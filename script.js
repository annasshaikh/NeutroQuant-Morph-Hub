document.addEventListener('DOMContentLoaded', () => {
    
    // --- Image Banner Logic ---
    const images = [
        'sampleimages/web/20251209130924105.png',
        'sampleimages/web/20251218102026855.png',
        'sampleimages/web/20251218102522562.png',
        'sampleimages/web/20260107101426668.png',
        'sampleimages/web/20260107101451032.png',
        'sampleimages/web/20260520091531982.png',
        'sampleimages/web/20260520091627065.png',
        'sampleimages/web/25.png'
    ];

    const track = document.getElementById('banner-track');

    function initBanner() {
        if (!track) return;
        
        // We append the images twice so the CSS scroll animation is seamless
        const bannerImages = [...images, ...images];
        
        bannerImages.forEach((src, index) => {
            const slide = document.createElement('div');
            slide.classList.add('banner-slide');
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Neutrophil Sample ${index + 1}`;
            img.loading = "lazy";
            slide.appendChild(img);
            track.appendChild(slide);
        });
    }

    initBanner();


    // --- Google Form Submission Tracking ---
    let formLoadCount = 0;
    const gForm = document.getElementById('google-form');
    const downloadBtnContainer = document.getElementById('download-btn-container');
    const downloadNote = document.querySelector('.download-note');

    if (gForm && downloadBtnContainer) {
        gForm.addEventListener('load', function() {
            formLoadCount++;
            // First load is the form rendering. Second load is the submission redirect/thank you page.
            if (formLoadCount > 1) {
                downloadBtnContainer.style.display = 'block';
                if(downloadNote) {
                    downloadNote.style.display = 'none';
                }
            }
        });
    }


    // --- Copy Citation Logic ---
    const copyBtn = document.getElementById('copy-citation');
    const citationText = document.getElementById('citation-text');

    if (copyBtn && citationText) {
        copyBtn.addEventListener('click', () => {
            const textToCopy = citationText.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = copyBtn.innerText;
                copyBtn.innerText = 'Copied!';
                copyBtn.style.backgroundColor = '#d4edda';
                copyBtn.style.color = '#155724';
                copyBtn.style.borderColor = '#c3e6cb';
                
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.style.backgroundColor = '#fff';
                    copyBtn.style.color = '#212529';
                    copyBtn.style.borderColor = '#dee2e6';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});
