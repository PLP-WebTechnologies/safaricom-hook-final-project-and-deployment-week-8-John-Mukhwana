// Enhanced form validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email');
            const name = document.getElementById('name');
            const message = document.getElementById('message');

            if (!validateEmail(email.value)) {
                showError('Please enter a valid email address');
                return;
            }

            if (name.value.trim() === '') {
                showError('Please enter your name');
                return;
            }

            if (message.value.trim() === '') {
                showError('Please enter your message');
                return;
            }

            // Submit form if valid
            form.reset();
            showSuccess('Message sent successfully!');
        });
    }
});

function showError(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert error';
    alertBox.textContent = message;
    document.body.prepend(alertBox);
    setTimeout(() => alertBox.remove(), 3000);
}

function showSuccess(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert success';
    alertBox.textContent = message;
    document.body.prepend(alertBox);
    setTimeout(() => alertBox.remove(), 3000);
}