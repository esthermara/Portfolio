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