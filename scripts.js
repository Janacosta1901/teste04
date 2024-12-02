// Script de validação do formulário
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o formulário
    const form = document.querySelector('#contactForm');
    
    // Adiciona um evento de submit
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault(); // Impede o envio do formulário
            event.stopPropagation(); // Impede a propagação do evento
        }
        form.classList.add('was-validated'); // Adiciona a classe para ativar as mensagens
    }, false);
});
