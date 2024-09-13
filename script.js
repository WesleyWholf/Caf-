document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    body.classList.add('fade-in'); // Adiciona a transição de entrada quando a página é carregada

    // Adiciona a transição de saída ao clicar em links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            body.classList.add('fade-out'); // Inicia a transição de saída
            setTimeout(function () {
                window.location.href = href;
            }, 500); // Redireciona após o tempo da transição
        });
    });
});

// Lógica de login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email && password) {
        if (email === "usuario@teste.com" && password === "123456") {
            sessionStorage.setItem('loggedIn', true);
            sessionStorage.setItem('userName', 'Usuário'); // Salva o nome do usuário

            // Adiciona a transição de saída ao fazer login corretamente
            document.querySelector('body').classList.add('fade-out');
            setTimeout(function () {
                window.location.href = 'index.html'; // Redireciona para a página principal
            }, 500); // Tempo de espera para a transição
        } else {
            alert('Email ou senha incorretos!');
        }
    } else {
        alert('Por favor, preencha ambos os campos!');
    }
});
