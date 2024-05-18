function toggleForms(formId) {
    const forms = ['loginContainer', 'registerContainer', 'adminLoginContainer'];
    forms.forEach(id => {
        const formContainer = document.getElementById(id);
        if (id === formId) {
            formContainer.style.display = 'block';
        } else {
            formContainer.style.display = 'none';
        }
    });
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login form submitted');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Register form submitted');
});

document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Basic admin credentials check for demonstration purposes
    const adminUsername = document.getElementById('adminUsername').value;
    const adminPassword = document.getElementById('adminPassword').value;
    if (adminUsername === 'admin' && adminPassword === 'admin123') {
        window.location.href = 'admin.html'; // Redirect to admin page
    } else {
        alert('Invalid admin credentials');
    }
});
