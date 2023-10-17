  // Script para rolar suavemente para as seções ao clicar nos links de navegação
  document.addEventListener('rolagempagina', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

function enviarMensagem() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome.trim() !== "" && email.trim() !== "" && mensagem.trim() !== "") {
        alert("Mensagem enviada!");
        // Adicione aqui a lógica para enviar a mensagem (por exemplo, usando AJAX ou redirecionando para um script de envio de e-mail)
    } else {
        alert("Por favor, preencha todos os campos.");
    }
    return false; // Isso previne o envio padrão do formulário
}