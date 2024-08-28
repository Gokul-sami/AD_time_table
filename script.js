document.getElementById('form').addEventListener('submit', function(event) {
    var form = this;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
    } else {
        event.preventDefault();
        
        const inputData = {
            name: document.getElementById('firstName').value,
            registerNumber: document.getElementById('zip').value,
            email: document.getElementById('email').value
        };
        localStorage.setItem('formData', JSON.stringify(inputData));
        
        window.location.href = "home.html";
    }
});