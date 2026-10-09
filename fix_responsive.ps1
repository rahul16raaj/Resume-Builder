$content = Get-Content 'style.css' -Raw
$newContent = $content -replace '(?s)/\* Responsive Design \*/.*', '/* Responsive Design */
@media screen and (max-width: 1024px) {
    body, .app-container {
        height: auto;
        min-height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .app-container {
        flex-direction: column;
    }
    .editor-section, .preview-section {
        width: 100%;
        border-right: none;
        overflow: visible;
    }
    .preview-section {
        padding: 1rem 0;
        overflow-x: auto;
        justify-content: flex-start; /* Prevent centering clipping on mobile */
    }
    .resume-preview {
        zoom: 0.8;
        margin: 0 auto;
    }
}

@media screen and (max-width: 768px) {
    .app-header {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        text-align: center;
    }
    .actions {
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }
    .row {
        flex-direction: column;
        gap: 0;
    }
    .resume-preview {
        zoom: 0.6;
    }
    .modal-content {
        width: 90%;
        margin: 10% auto;
    }
}

@media screen and (max-width: 480px) {
    .resume-preview {
        zoom: 0.45;
    }
    .template-selector {
        flex-direction: column;
    }
}'
Set-Content 'style.css' -Value $newContent
