// Script de validação do formulário
document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('#contactForm');
    
   
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault(); 
            event.stopPropagation(); 
        }
        form.classList.add('was-validated'); 
    }, false);
});
