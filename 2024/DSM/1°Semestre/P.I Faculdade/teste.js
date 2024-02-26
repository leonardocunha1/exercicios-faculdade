// fazendo o menu aparecer e desaparecer
const menu = document.querySelector('.mobile-menu-icon-button');
const menuItens = document.querySelector('.mobile-menu');

menu.addEventListener('click', function() {
    menuItens.classList.toggle('hidden') // adiciona ou remove a classe "hidden" do menu
});



document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual da URL

    var menuItems = document.querySelectorAll('.menu-item'); // Seleciona todos os itens do menu

    // Itera sobre os itens do menu para verificar se a página corresponde ao link e adiciona a classe "active"
    menuItems.forEach(function(item) {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});
