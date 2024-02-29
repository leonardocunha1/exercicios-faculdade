// fazendo o menu do celular aparecer e desaparecer
const menu = document.querySelector(".mobile-menu-icon-button");
const btnOpenModal = document.querySelector(".mobile-menu");
const btnCloseModal = document.querySelector(".mobile-menu-close-btn");
const overlay = document.querySelector(".overlay");

const openMenu = function() {
    btnOpenModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeMenu = function () {
  btnOpenModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

menu.addEventListener("click", openMenu);
btnCloseModal.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);



// fazendo o aba selecionada no menu ficar laranja e com a classe "active"
document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual da URL
  var menuItems = document.querySelectorAll(".menu nav .menu-info .menu-item"); // Seleciona todos os itens do menu
  // console.log(menuItems);

  // Itera sobre os itens do menu para verificar se a página corresponde ao link e adiciona a classe "active"
  menuItems.forEach(function (item) {
    if (item.getAttribute("href") === currentPage) {
      item.style.color = "#f26820";
      item.style.transition = "none";
      item.classList.add("active");
    }
  });
});

// utilizando a biblioteca ScrollReveal para animar os elementos da página
window.sr = ScrollReveal({ reset: true });
sr.reveal(".banner-message", { duration: 2500 });
sr.reveal(".banner-image", {
  rotate: { x: 0, y: 80, z: 0 },
  duration: 2500,
});
sr.reveal(".info-burger-text", { duration: 2500 });
