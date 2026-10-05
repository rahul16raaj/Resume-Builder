// Supabase Configuration
const supabaseUrl = 'https://fxftthazlripssfhglfj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4ZnR0aGF6bHJpcHNzZmhnbGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExODQyMTYsImV4cCI6MjEwNjc2MDIxNn0.U3BcsMfvwusTcGqtlK9cY9o6Zz9G-ohcPHh_mJZNMSQ';
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

let experienceCount = 0;
let educationCount = 0;
let projectCount = 0;
let certificationCount = 0;
let awardCount = 0;
let achievementCount = 0;

// Initialize with one empty entry for some sections
document.addEventListener('DOMContentLoaded', () => {
    addExperience();
    addEducation();
    
    // Add event listener to template selector
    document.getElementById('template-select').addEventListener('change', (e) => {
        const preview = document.getElementById('resume-preview');
        preview.className = `resume-preview template-${e.target.value}`;
        updatePreview();
    });

    // Download PDF logic
    document.getElementById('download-btn').addEventListener('click', handleDownloadClick);
});

// Adding Form Entries
function addExperience() {
    experienceCount++;
    const container = document.getElementById('experience-list');
    const expHTML = `
        <div class="entry-card" id="exp-${experienceCount}">
            <button class="remove-btn" onclick="removeEntry('exp-${experienceCount}')">&times;</button>
            <div class="form-group row">
                <div class="col">
                    <label>Job Title</label>
                    <input type="text" class="exp-title" placeholder="Software Engineer" oninput="updatePreview()">
                </div>
                <div class="col">
                    <label>Company</label>
                    <input type="text" class="exp-company" placeholder="Google" oninput="updatePreview()">
                </div>
            </div>
            <div class="form-group row">
                <div class="col">
                    <label>Start Date</label>
                    <input type="text" class="exp-start" placeholder="Jan 2020" oninput="updatePreview()">
                </div>
                <div class="col">
                    <label>End Date</label>
                    <input type="text" class="exp-end" placeholder="Present" oninput="updatePreview()">
                </div>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="exp-desc" rows="3" placeholder="Describe your responsibilities and achievements..." oninput="updatePreview()"></textarea>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', expHTML);
}

function addProject() {
    projectCount++;
    const container = document.getElementById('projects-list');
    const projHTML = `
        <div class="entry-card" id="proj-${projectCount}">
            <button class="remove-btn" onclick="removeEntry('proj-${projectCount}')">&times;</button>
            <div class="form-group row">
                <div class="col">
                    <label>Project Name</label>
                    <input type="text" class="proj-title" placeholder="E-commerce Website" oninput="updatePreview()">
                </div>
                <div class="col">
                    <label>URL / Link</label>
                    <input type="text" class="proj-link" placeholder="github.com/..." oninput="updatePreview()">
                </div>
            </div>
            <div class="form-group">
                <label>Project Summary / Description</label>
                <textarea class="proj-desc" rows="3" placeholder="Briefly summarize what you built, the technologies used, and your key contributions..." oninput="updatePreview()"></textarea>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', projHTML);
}

function addEducation() {
    educationCount++;
    const container = document.getElementById('education-list');
    const eduHTML = `
        <div class="entry-card" id="edu-${educationCount}">
            <button class="remove-btn" onclick="removeEntry('edu-${educationCount}')">&times;</button>
            <div class="form-group row">
                <div class="col">
                    <label>Degree</label>
                    <input type="text" class="edu-degree" placeholder="B.S. Computer Science" oninput="updatePreview()">
                </div>
                <div class="col">
                    <label>School</label>
                    <input type="text" class="edu-school" placeholder="MIT" oninput="updatePreview()">
                </div>
            </div>
            <div class="form-group row">
                <div class="col">
                    <label>Start Year</label>
                    <input type="text" class="edu-start" placeholder="2016" oninput="updatePreview()">
                </div>
                <div class="col">
                    <label>End Year</label>
                    <input type="text" class="edu-end" placeholder="2020" oninput="updatePreview()">
                </div>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', eduHTML);
}

function addCertification() {
    certificationCount++;
    const container = document.getElementById('certifications-list');
    const certHTML = `
        <div class="entry-card" id="cert-${certificationCount}">
            <button class="remove-btn" onclick="removeEntry('cert-${certificationCount}')">&times;</button>
            <div class="form-group row">
                <div class="col">
                    <label>Certification Name</label>
                    <input type="text" class="cert-name" placeholder="AWS Certified Solutions Architect" oninput="updatePreview()">
                </div>
                <div class="col">
                    <label>Issuer & Year</label>
                    <input type="text" class="cert-issuer" placeholder="Amazon Web Services, 2023" oninput="updatePreview()">
                </div>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', certHTML);
}

function addAward() {
    awardCount++;
    const container = document.getElementById('awards-list');
    const awardHTML = `
        <div class="entry-card" id="award-${awardCount}">
            <button class="remove-btn" onclick="removeEntry('award-${awardCount}')">&times;</button>
            <div class="form-group row">
                <div class="col">
                    <label>Award Name</label>
                    <input type="text" class="award-name" placeholder="Employee of the Year" oninput="updatePreview()">
                </div>
                <div class="col">
                    <label>Issuer & Year</label>
                    <input type="text" class="award-issuer" placeholder="Google, 2022" oninput="updatePreview()">
                </div>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', awardHTML);
}

function addAchievement() {
    achievementCount++;
    const container = document.getElementById('achievements-list');
    const achHTML = `
        <div class="entry-card" id="ach-${achievementCount}" style="padding-bottom: 0.5rem;">
            <button class="remove-btn" onclick="removeEntry('ach-${achievementCount}')">&times;</button>
            <div class="form-group">
                <label>Achievement</label>
                <input type="text" class="ach-text" placeholder="Increased sales by 20% in Q3..." oninput="updatePreview()">
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', achHTML);
}

function removeEntry(id) {
    document.getElementById(id).remove();
    updatePreview();
}

function updatePreview() {
    const template = document.getElementById('template-select').value;

    // Update Personal Info
    const nameStr = document.getElementById('name').value || 'John Doe';
    document.getElementById('preview-name').textContent = nameStr;
    const nameParts = nameStr.trim().split(' ');
    let initials = nameParts[0] ? nameParts[0][0] : 'J';
    if(nameParts.length > 1) {
        initials += nameParts[nameParts.length-1][0];
    }
    document.getElementById('preview-initials').textContent = initials.toUpperCase();
    
    document.getElementById('preview-title').textContent = document.getElementById('title').value || 'Software Engineer';
    
    // Contact Info formatting
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const loc = document.getElementById('location').value;
    const website = document.getElementById('website').value;
    
    let contactHtml = '';
    if (template === 'attractive') {
        const line1 = [];
        if (loc) line1.push(`<span class="contact-item">${loc}</span>`);
        
        const line2 = [];
        if (email) line2.push(`<span class="contact-item">${email}</span>`);
        if (phone) line2.push(`<span class="contact-item">${phone}</span>`);
        if (website) line2.push(`<span class="contact-item">${website}</span>`);
        
        const line1Html = line1.length > 0 ? `<div>${line1.join('')}</div>` : '';
        const line2Html = line2.length > 0 ? `<div>${line2.join(' <span class="contact-separator">/</span> ')}</div>` : '';
        
        if (!line1Html && !line2Html) {
            contactHtml = '<div>New Delhi, India 110034</div><div>d.agarwal@sample.in <span class="contact-separator">/</span> +91 11 5555 3345</div>';
        } else {
            contactHtml = line1Html + line2Html;
        }
    } else {
        const contactParts = [];
        if (phone) contactParts.push(`<span class="contact-item"><i class="icon">📞</i>${phone}</span>`);
        if (email) contactParts.push(`<span class="contact-item"><i class="icon">✉️</i>${email}</span>`);
        if (loc) contactParts.push(`<span class="contact-item"><i class="icon">📍</i>${loc}</span>`);
        if (website) contactParts.push(`<span class="contact-item"><i class="icon">🔗</i>${website}</span>`);
    
        contactHtml = contactParts.length > 0 
            ? contactParts.join(' <span class="contact-separator">|</span> ') 
            : '<span class="contact-item"><i class="icon">📞</i>+1 234 567 890</span> <span class="contact-separator">|</span> <span class="contact-item"><i class="icon">✉️</i>email@example.com</span> <span class="contact-separator">|</span> <span class="contact-item"><i class="icon">📍</i>New York, NY</span>';
    }
    
    document.querySelector('.contact-info').innerHTML = contactHtml;

    // Summary
    document.getElementById('preview-summary').textContent = document.getElementById('summary').value || 'Briefly describe your background and goals...';

    // Key Achievements
    const achList = document.getElementById('preview-achievements-list');
    const achSection = document.getElementById('section-achievements');
    achList.innerHTML = '';
    const achCards = document.querySelectorAll('#achievements-list .entry-card');
    let hasAch = false;

    achCards.forEach(card => {
        const text = card.querySelector('.ach-text').value;
        if (text) {
            hasAch = true;
            achList.innerHTML += `<li>${text}</li>`;
        }
    });
    achSection.style.display = hasAch ? 'block' : 'none';

    // Experience
    const expList = document.getElementById('preview-experience-list');
    expList.innerHTML = '';
    const expCards = document.querySelectorAll('#experience-list .entry-card');
    
    expCards.forEach(card => {
        const title = card.querySelector('.exp-title').value;
        const company = card.querySelector('.exp-company').value;
        const start = card.querySelector('.exp-start').value;
        const end = card.querySelector('.exp-end').value;
        const desc = card.querySelector('.exp-desc').value;

        if (title || company) {
            const dateStr = start && end ? `${start} - ${end}` : (start || end);
            const descHtml = desc ? `<ul class="bullet-list">${desc.split('\n').filter(l=>l.trim()).map(l => `<li>${l}</li>`).join('')}</ul>` : '';
            
            let metaHtml = '';
            if (template === 'attractive') {
                metaHtml = `
                    <div class="entry-left">
                        <span class="entry-title">${title}</span>
                        ${company ? `<span class="entry-separator"> / </span><span class="entry-company">${company}</span>` : ''}
                    </div>
                    <div class="entry-date">${dateStr}</div>
                `;
            } else {
                metaHtml = `
                    <div class="entry-title">${title}</div>
                    <div class="entry-date">${dateStr}</div>
                    <div class="entry-company">${company}</div>
                `;
            }
            
            expList.innerHTML += `
                <div class="entry-card-preview">
                    <div class="entry-meta">
                        ${metaHtml}
                    </div>
                    ${descHtml ? `<div class="entry-desc">${descHtml}</div>` : ''}
                </div>
            `;
        }
    });

    // Projects
    const projList = document.getElementById('preview-projects-list');
    const projSection = document.getElementById('section-projects');
    projList.innerHTML = '';
    const projCards = document.querySelectorAll('#projects-list .entry-card');
    let hasProj = false;
    
    projCards.forEach(card => {
        const title = card.querySelector('.proj-title').value;
        const link = card.querySelector('.proj-link').value;
        const desc = card.querySelector('.proj-desc').value;

        if (title || desc) {
            hasProj = true;
            const descHtml = desc ? `<ul class="bullet-list">${desc.split('\n').filter(l=>l.trim()).map(l => `<li>${l}</li>`).join('')}</ul>` : '';
            
            let metaHtml = '';
            if (template === 'attractive') {
                metaHtml = `
                    <div class="entry-left">
                        <span class="entry-title">${title}</span>
                        ${link ? `<span class="entry-separator"> / </span><span class="entry-company">${link}</span>` : ''}
                    </div>
                `;
            } else {
                metaHtml = `
                    <div class="entry-title">${title}</div>
                    <div class="entry-date">${link}</div>
                `;
            }

            projList.innerHTML += `
                <div class="entry-card-preview">
                    <div class="entry-meta">
                        ${metaHtml}
                    </div>
                    ${descHtml ? `<div class="entry-desc">${descHtml}</div>` : ''}
                </div>
            `;
        }
    });
    projSection.style.display = hasProj ? 'block' : 'none';

    // Education
    const eduList = document.getElementById('preview-education-list');
    eduList.innerHTML = '';
    const eduCards = document.querySelectorAll('#education-list .entry-card');
    
    eduCards.forEach(card => {
        const degree = card.querySelector('.edu-degree').value;
        const school = card.querySelector('.edu-school').value;
        const start = card.querySelector('.edu-start').value;
        const end = card.querySelector('.edu-end').value;

        if (degree || school) {
            const dateStr = start && end ? `${start} - ${end}` : (start || end);
            
            let metaHtml = '';
            if (template === 'attractive') {
                metaHtml = `
                    <div class="entry-left">
                        <span class="entry-title">${degree}</span>
                    </div>
                    <div class="entry-date">${dateStr}</div>
                    <div class="entry-company-full">${school}</div>
                `;
            } else {
                metaHtml = `
                    <div class="entry-title">${degree}</div>
                    <div class="entry-date">${dateStr}</div>
                    <div class="entry-company">${school}</div>
                `;
            }

            eduList.innerHTML += `
                <div class="entry-card-preview">
                    <div class="entry-meta">
                        ${metaHtml}
                    </div>
                </div>
            `;
        }
    });

    // Certifications
    const certList = document.getElementById('preview-certifications-list');
    const certSection = document.getElementById('section-certifications');
    certList.innerHTML = '';
    const certCards = document.querySelectorAll('#certifications-list .entry-card');
    let hasCert = false;

    certCards.forEach(card => {
        const name = card.querySelector('.cert-name').value;
        const issuer = card.querySelector('.cert-issuer').value;
        
        if (name) {
            hasCert = true;
            certList.innerHTML += `
                <div style="margin-bottom: 0.5rem;">
                    <div class="entry-title">
                        <span>${name}</span>
                        ${issuer ? `<span style="font-weight:normal; font-size: 0.9rem;">${issuer}</span>` : ''}
                    </div>
                </div>
            `;
        }
    });
    certSection.style.display = hasCert ? 'block' : 'none';

    // Awards
    const awardList = document.getElementById('preview-awards-list');
    const awardSection = document.getElementById('section-awards');
    awardList.innerHTML = '';
    const awardCards = document.querySelectorAll('#awards-list .entry-card');
    let hasAward = false;

    awardCards.forEach(card => {
        const name = card.querySelector('.award-name').value;
        const issuer = card.querySelector('.award-issuer').value;
        
        if (name) {
            hasAward = true;
            awardList.innerHTML += `
                <div style="margin-bottom: 0.5rem;">
                    <div class="entry-title">
                        <span>${name}</span>
                        ${issuer ? `<span style="font-weight:normal; font-size: 0.9rem;">${issuer}</span>` : ''}
                    </div>
                </div>
            `;
        }
    });
    awardSection.style.display = hasAward ? 'block' : 'none';

    // Skills
    const skillsInput = document.getElementById('skills').value;
    const skillsContainer = document.getElementById('preview-skills');
    
    if (skillsInput) {
        const skillsArray = skillsInput.split(',').map(s => s.trim()).filter(s => s);
        
        if (template === 'plain' || template === 'attractive') {
            skillsContainer.innerHTML = `<ul class="skills-list">${skillsArray.map(s => `<li>${s}</li>`).join('')}</ul>`;
        } else {
            skillsContainer.innerHTML = `<ul class="skills-list">${skillsArray.map(s => `<li>${s}</li>`).join('')}</ul>`;
        }
    } else {
        skillsContainer.innerHTML = `<ul class="skills-list"><li>Cash register operation</li><li>POS system operation</li><li>Sales expertise</li><li>Teamwork</li><li>Inventory management</li><li>Accurate money handling</li></ul>`;
    }
}

// Generate PDF using html2pdf
async function generatePDF() {
    const element = document.getElementById('resume-preview');
    const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Change style temporarily if necessary to fix scaling issues in PDF
    const originalStyle = element.style.transform;
    element.style.transform = 'none';
    
    html2pdf().set(opt).from(element).outputPdf('blob').then(async (pdfBlob) => {
        try {
            // 1. Trigger local download using the generated Blob
            const url = URL.createObjectURL(pdfBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'resume.pdf';
            a.click();
            URL.revokeObjectURL(url);
            
            // 2. Upload to Supabase Storage if user is signed in
            const { data: { user } } = await supabaseClient.auth.getUser();
            if (user && pdfBlob) {
                const fileName = `${user.id}/${Date.now()}_resume.pdf`;
                const { error } = await supabaseClient.storage.from('pdfs').upload(fileName, pdfBlob, {
                    contentType: 'application/pdf'
                });
                if (error) {
                    console.error('Failed to upload PDF to Supabase:', error.message);
                    alert('PDF downloaded, but failed to save to cloud: ' + error.message);
                } else {
                    alert('Success! PDF downloaded and saved to your dashboard.');
                }
            }
        } catch (e) {
            console.error("PDF upload failed", e);
            alert('Upload Error: ' + e.message);
        } finally {
            element.style.transform = originalStyle;
        }
    }).catch(e => {
        console.error("PDF generation failed", e);
        alert('PDF Generation Error: ' + e.message);
        element.style.transform = originalStyle;
    });
}

// --- Authentication & Download Logic ---

// Listen to auth state changes
supabaseClient.auth.onAuthStateChange((event, session) => {
    const userStatus = document.getElementById('user-status');
    const userEmail = document.getElementById('user-email');
    const dashBtn = document.getElementById('dashboard-btn');
    const saveBtn = document.getElementById('save-btn');
    
    if (session && session.user) {
        userStatus.style.display = 'flex';
        userEmail.textContent = session.user.email;
        dashBtn.style.display = 'inline-block';
        saveBtn.style.display = 'inline-block';
    } else {
        userStatus.style.display = 'none';
        userEmail.textContent = '';
        dashBtn.style.display = 'none';
        saveBtn.style.display = 'none';
    }
});

async function handleSignOut() {
    await supabaseClient.auth.signOut();
}

function toggleAuthView(view) {
    const title = document.getElementById('auth-title');
    document.getElementById('auth-error').style.display = 'none';
    document.getElementById('auth-msg').style.display = 'none';
    
    if (view === 'signup') {
        document.getElementById('signin-view').style.display = 'none';
        document.getElementById('signup-view').style.display = 'block';
        title.textContent = 'Create Account';
    } else {
        document.getElementById('signin-view').style.display = 'block';
        document.getElementById('signup-view').style.display = 'none';
        title.textContent = 'Sign In Required';
    }
}

async function handleDownloadClick() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    
    if (user) {
        // User is signed in
        generatePDF();
    } else {
        // Show auth modal
        document.getElementById('auth-modal').style.display = 'flex';
    }
}

function closeAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
    document.getElementById('auth-error').style.display = 'none';
    document.getElementById('auth-msg').style.display = 'none';
    document.getElementById('auth-email').value = '';
    document.getElementById('auth-password').value = '';
    toggleAuthView('signin');
}

async function handleSignIn() {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    const errorEl = document.getElementById('auth-error');
    const msgEl = document.getElementById('auth-msg');
    
    errorEl.style.display = 'none';
    msgEl.style.display = 'none';
    
    if (!email || !password) {
        errorEl.textContent = 'Please enter email and password';
        errorEl.style.display = 'block';
        return;
    }
    
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });
    
    if (error) {
        errorEl.textContent = error.message;
        errorEl.style.display = 'block';
    } else {
        closeAuthModal();
        generatePDF();
    }
}

async function handleSignUp() {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    const errorEl = document.getElementById('auth-error');
    const msgEl = document.getElementById('auth-msg');
    
    errorEl.style.display = 'none';
    msgEl.style.display = 'none';
    
    if (!email || !password) {
        errorEl.textContent = 'Please enter email and password';
        errorEl.style.display = 'block';
        return;
    }
    
    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
    });
    
    if (error) {
        errorEl.textContent = error.message;
        errorEl.style.display = 'block';
    } else {
        if (data.user && data.user.identities && data.user.identities.length === 0) {
           errorEl.textContent = 'User already exists. Please sign in.';
           errorEl.style.display = 'block';
        } else if (data.session) {
           // Successfully signed up and signed in
           closeAuthModal();
           generatePDF();
        } else {
           // Needs email confirmation
           msgEl.textContent = 'Please check your email to confirm your account.';
           msgEl.style.display = 'block';
        }
    }
}

// --- Save & Dashboard Logic ---

async function saveResume() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return alert('Please sign in to save.');

    const title = prompt('Enter a name for this resume:', 'My Resume');
    if (!title) return;

    // Collect all data
    const resumeData = {
        name: document.getElementById('name').value,
        title: document.getElementById('title').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        website: document.getElementById('website').value,
        summary: document.getElementById('summary').value,
        skills: document.getElementById('skills').value,
        achievements: Array.from(document.querySelectorAll('#achievements-list .ach-text')).map(el => el.value),
        experience: Array.from(document.querySelectorAll('#experience-list .entry-card')).map(card => ({
            title: card.querySelector('.exp-title').value,
            company: card.querySelector('.exp-company').value,
            start: card.querySelector('.exp-start').value,
            end: card.querySelector('.exp-end').value,
            desc: card.querySelector('.exp-desc').value
        })),
        projects: Array.from(document.querySelectorAll('#projects-list .entry-card')).map(card => ({
            title: card.querySelector('.proj-title').value,
            link: card.querySelector('.proj-link').value,
            desc: card.querySelector('.proj-desc').value
        })),
        education: Array.from(document.querySelectorAll('#education-list .entry-card')).map(card => ({
            degree: card.querySelector('.edu-degree').value,
            school: card.querySelector('.edu-school').value,
            start: card.querySelector('.edu-start').value,
            end: card.querySelector('.edu-end').value
        })),
        certifications: Array.from(document.querySelectorAll('#certifications-list .entry-card')).map(card => ({
            name: card.querySelector('.cert-name').value,
            issuer: card.querySelector('.cert-issuer').value
        })),
        awards: Array.from(document.querySelectorAll('#awards-list .entry-card')).map(card => ({
            name: card.querySelector('.award-name').value,
            issuer: card.querySelector('.award-issuer').value
        })),
        template: document.getElementById('template-select').value
    };

    const { error } = await supabaseClient.from('resumes').insert({
        user_id: user.id,
        title: title,
        data: resumeData,
        template: resumeData.template
    });

    if (error) {
        console.error(error);
        alert('Failed to save resume: ' + error.message);
    } else {
        alert('Resume saved successfully!');
    }
}

async function openDashboard() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return;

    document.getElementById('dashboard-modal').style.display = 'flex';
    const listEl = document.getElementById('resumes-list');
    listEl.innerHTML = '<p>Loading...</p>';

    const { data, error } = await supabaseClient
        .from('resumes')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        listEl.innerHTML = '<p style="color:red;">Error loading resumes.</p>';
        return;
    }

    if (!data || data.length === 0) {
        listEl.innerHTML = '<p>No resumes saved yet.</p>';
        return;
    }

    listEl.innerHTML = '';
    data.forEach(resume => {
        const d = new Date(resume.created_at).toLocaleDateString();
        const itemHtml = `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border: 1px solid #ddd; margin-bottom: 0.5rem; border-radius: 4px;">
                <div>
                    <strong>${resume.title}</strong>
                    <div style="font-size: 0.8rem; color: #666;">Saved on ${d} | Template: ${resume.template}</div>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="primary-btn" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;" onclick='loadResume(${JSON.stringify(resume.data).replace(/'/g, "&#39;")})'>Load</button>
                    <button class="secondary-btn" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; color: red;" onclick="deleteResume('${resume.id}')">Delete</button>
                </div>
            </div>
        `;
        listEl.innerHTML += itemHtml;
    });
}

function closeDashboard() {
    document.getElementById('dashboard-modal').style.display = 'none';
}

async function deleteResume(id) {
    if (!confirm('Are you sure you want to delete this resume?')) return;
    
    const { error } = await supabaseClient.from('resumes').delete().eq('id', id);
    if (error) {
        alert('Failed to delete: ' + error.message);
    } else {
        openDashboard();
    }
}

function loadResume(data) {
    document.getElementById('name').value = data.name || '';
    document.getElementById('title').value = data.title || '';
    document.getElementById('email').value = data.email || '';
    document.getElementById('phone').value = data.phone || '';
    document.getElementById('location').value = data.location || '';
    document.getElementById('website').value = data.website || '';
    document.getElementById('summary').value = data.summary || '';
    document.getElementById('skills').value = data.skills || '';
    
    document.getElementById('template-select').value = data.template || 'plain';

    // Helper to repopulate lists
    const populateList = (selector, values, addFn, fillFn) => {
        document.getElementById(selector).innerHTML = '';
        if (values && values.length > 0) {
            // Reset count globals safely? We will just invoke addFn
            values.forEach(val => {
                addFn();
                const cards = document.querySelectorAll(`#${selector} .entry-card`);
                const latestCard = cards[cards.length - 1];
                fillFn(latestCard, val);
            });
        } else {
            addFn(); // add at least one empty
        }
    };

    populateList('achievements-list', data.achievements, addAchievement, (card, val) => {
        card.querySelector('.ach-text').value = val || '';
    });

    populateList('experience-list', data.experience, addExperience, (card, val) => {
        card.querySelector('.exp-title').value = val.title || '';
        card.querySelector('.exp-company').value = val.company || '';
        card.querySelector('.exp-start').value = val.start || '';
        card.querySelector('.exp-end').value = val.end || '';
        card.querySelector('.exp-desc').value = val.desc || '';
    });

    populateList('projects-list', data.projects, addProject, (card, val) => {
        card.querySelector('.proj-title').value = val.title || '';
        card.querySelector('.proj-link').value = val.link || '';
        card.querySelector('.proj-desc').value = val.desc || '';
    });

    populateList('education-list', data.education, addEducation, (card, val) => {
        card.querySelector('.edu-degree').value = val.degree || '';
        card.querySelector('.edu-school').value = val.school || '';
        card.querySelector('.edu-start').value = val.start || '';
        card.querySelector('.edu-end').value = val.end || '';
    });

    populateList('certifications-list', data.certifications, addCertification, (card, val) => {
        card.querySelector('.cert-name').value = val.name || '';
        card.querySelector('.cert-issuer').value = val.issuer || '';
    });

    populateList('awards-list', data.awards, addAward, (card, val) => {
        card.querySelector('.award-name').value = val.name || '';
        card.querySelector('.award-issuer').value = val.issuer || '';
    });

    closeDashboard();
    
    // Trigger preview update
    document.getElementById('template-select').dispatchEvent(new Event('change'));
    updatePreview();
}
