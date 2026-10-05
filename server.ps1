$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8081/")
$listener.Start()
Write-Host "Listening on http://localhost:8081/ - Press Ctrl+C to stop"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath.Replace("/", "\")
        if ($localPath -eq "\") { $localPath = "\index.html" }
        
        $filePath = (Get-Location).Path + $localPath
        
        if (Test-Path $filePath -PathType Leaf) {
            $buffer = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $buffer.Length
            
            if ($localPath.EndsWith(".css")) {
                $response.ContentType = "text/css"
            } elseif ($localPath.EndsWith(".js")) {
                $response.ContentType = "application/javascript"
            } elseif ($localPath.EndsWith(".html")) {
                $response.ContentType = "text/html"
            }
            
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
}
