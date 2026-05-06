document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona o formulário de contato através do seu ID
    const formContato = document.getElementById('formContato');

    // Adiciona um evento que "escuta" o clique no botão de enviar (submit)
    formContato.addEventListener('submit', function(event) {
        
        // Impede recarregar a página
        event.preventDefault();

        // Captura os valores digitados nos campos, removendo espaços em branco nas pontas
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validação 1: Verifica se algum dos campos está vazio
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos antes de enviar a mensagem.');
            return; // Interrompe a execução do script aqui, não deixando enviar
        }

        // Validação 2: Verifica o formato do e-mail usando Expressão Regular 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).');
            return;
        }

        // Simulação do envio: Se o código chegou até aqui, todas as validações passaram
        alert('Mensagem enviada com sucesso!');

        // Limpa todos os campos do formulário após o sucesso
        formContato.reset();
    });

});