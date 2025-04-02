document.addEventListener('DOMContentLoaded', function() {
    // Contact Form
    const contactForm = document.querySelector('.php-email-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const loading = this.querySelector('.loading');
            const errorMessage = this.querySelector('.error-message');
            const sentMessage = this.querySelector('.sent-message');
            
            loading.style.display = 'block';
            submitButton.disabled = true;
            
            fetch(this.action, {
                method: 'POST',
                body: new FormData(this)
            })
            .then(response => response.json())
            .then(data => {
                loading.style.display = 'none';
                if (data.status === 'success') {
                    sentMessage.style.display = 'block';
                    contactForm.reset();
                } else {
                    throw new Error(data.message || 'Form submission failed');
                }
            })
            .catch(error => {
                loading.style.display = 'none';
                errorMessage.innerHTML = error.message;
                errorMessage.style.display = 'block';
            })
            .finally(() => {
                submitButton.disabled = false;
            });
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.footer-newsletter .php-email-form');
    if (newsletterForm) {
        // Similar event listener for newsletter form
        // ...
    }
}); 