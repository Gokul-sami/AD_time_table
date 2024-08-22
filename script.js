document.getElementById('form').addEventListener('submit', function(event) {
    var form = this;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
    } else {
        event.preventDefault();
        window.location.href = "home.html";
    }
});