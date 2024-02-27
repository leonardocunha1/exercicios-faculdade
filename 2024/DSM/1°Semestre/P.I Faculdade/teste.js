// fazendo o menu aparecer e desaparecer
const menu = document.querySelector('.mobile-menu-icon-button');
const menuItens = document.querySelector('.mobile-menu');

menu.addEventListener('click', function() {
    menuItens.classList.toggle('hidden') // adiciona ou remove a classe "hidden" do menu
});


// fazendo o item selecionado no menu ficar laranja e com a classe "active"
document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual da URL

    var menuItems = document.querySelectorAll('.menu-info .menu-item'); // Seleciona todos os itens do menu

    // Itera sobre os itens do menu para verificar se a página corresponde ao link e adiciona a classe "active"
    menuItems.forEach(function(item) {
        if (item.getAttribute('href') === currentPage) {
            item.style.color = '#ffa500';
            item.style.transition = 'none'
            item.classList.add('active');
        }
    });
});

window.sr = ScrollReveal({ reset: true });
sr.reveal('.banner-message', { duration: 2500 });
sr.reveal('.banner-image', { 
    rotate: { x: 0, y: 80, z: 0 }, duration: 2500});

// banner-message, .banner-image
