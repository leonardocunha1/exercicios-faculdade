const topics = [
  { id: 1, name: "HTML Basic" },
  { id: 2, name: "HTML Elements" },
  { id: 3, name: "HTML Attributes" },
  { id: 4, name: "HTML Headings" },
  { id: 5, name: "HTML Paragraphs" },
  { id: 6, name: "HTML Styles" },
  { id: 7, name: "HTML Formatting" },
  { id: 8, name: "HTML Quotations" },
  { id: 9, name: "HTML Comments" },
  { id: 10, name: "HTML Colors" },
  { id: 11, name: "HTML Links" },
  { id: 12, name: "HTML Favicon" },
  { id: 13, name: "HTML Table" },
  { id: 14, name: "HTML List" },
  { id: 15, name: "HTML Block & Inline" },
  { id: 16, name: "HTML Div" },
  { id: 17, name: "HTML Classes" },
  { id: 18, name: "HTML Id" },
  { id: 19, name: "HTML Iframes" },
  { id: 20, name: "HTML JavaScript" },
  { id: 21, name: "HTML Semantics" },
  { id: 22, name: "HTML Style Guide" },
  { id: 23, name: "HTML Entities" },
  { id: 24, name: "HTML Symbols" },
  { id: 25, name: "HTML Emojis" },
  { id: 26, name: "HTML Charsets" },
  { id: 27, name: "HTML URL Encode" },
  { id: 28, name: "HTML vs XHTML" },
  { id: 29, name: "HTML Forms" },
  { id: 30, name: "HTML Form Attributes" },
  { id: 31, name: "HTML Form Elements" },
  { id: 32, name: "HTML Input Types" },
  { id: 33, name: "HTML Input Attributes" },
  { id: 34, name: "Input Form Attributes" },
  { id: 35, name: "HTML Canvas" },
  { id: 36, name: "HTML SVG" },
  { id: 37, name: "HTML Media" },
  { id: 38, name: "HTML Video" },
  { id: 39, name: "HTML Audio" },
  { id: 40, name: "HTML Drag/Drop" },
];

// Adicionando o menu de navegação
function createMenu() {
  const menuList = document.querySelector(".menu-list");

  topics.forEach((topic, i) => {
    const li = `
      <li>
          <a href="#" class="item-${i}"}>
              ${topic.id} - ${topic.name}
          </a>
      </li>`;

    menuList.insertAdjacentHTML("beforeend", li);
  });
}

function menuDinamico() {
  const liItems = document.querySelectorAll(".menu-list li a");
  liItems[0].classList.add("active-li");
  liItems[0].style.color = "black";

  liItems.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarConteudo(`${i + 1}`);
      liItems.forEach((li) => {
        li.classList.remove("active-li");
        li.style.color = "white";
      });
      item.classList.add("active-li");
      item.style.color = "black";
    });
  });
}

// // Adicionando e ocultando o conteúdo das seções
function mostrarConteudo(section) {
  // Primeiro, ocultar todas as seções de conteúdo
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Exibir a seção correspondente ao ID passado como argumento
  const sectionToShow = document.getElementById("content" + section);
  if (sectionToShow) {
    sectionToShow.style.display = "flex";
  }
}

createMenu();
menuDinamico();

// TUDO O QUE ESTÁ ABAIXO DISSO SÃO SCRIPTS DOS CONTEÚDOS DENTRO DAS DAS SEÇÕES. A MAIORIA FOI FEITA POR INTELIGÊNCIA ARTIFICIAL

function clicou() {
  console.log("Clicou");
}

var canvas = document.getElementById("meuCanvas");
var ctx = canvas.getContext("2d");

// Definir o estilo do círculo
ctx.fillStyle = "#3498db"; // cor azul
ctx.lineWidth = 2;
ctx.strokeStyle = "#2980b9"; // cor para a borda do círculo

// Desenhar um círculo no centro do canvas
var centerX = canvas.width / 2; // coordenada X do centro
var centerY = canvas.height / 2; // coordenada Y do centro
var radius = 100; // raio do círculo

ctx.beginPath(); // começar um novo caminho de desenho
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // desenhar um círculo
ctx.fill(); // preencher o círculo com cor
ctx.stroke(); // desenhar a borda do círculo
ctx.closePath(); // fechar o caminho

const draggableItem = document.getElementById("draggable-item");
const dropzone = document.getElementById("dropzone");

// Evento de início de arrasto
draggableItem.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", "Drag Data");
  event.dataTransfer.effectAllowed = "move";
});

// Evento de entrada na zona de destino
dropzone.addEventListener("dragenter", function (event) {
  event.preventDefault(); // Permite o arrasto
  dropzone.classList.add("over"); // Altera a aparência para indicar que o arrasto é permitido
});

// Evento de saída da zona de destino
dropzone.addEventListener("dragleave", function (event) {
  dropzone.classList.remove("over"); // Retorna à aparência original
});

// Evento para permitir o arrasto
dropzone.addEventListener("dragover", function (event) {
  event.preventDefault(); // Permite o arrasto para a zona
});

// Evento para soltar
dropzone.addEventListener("drop", function (event) {
  event.preventDefault(); // Previne ações padrão
  dropzone.classList.remove("over"); // Remove a indicação visual
  dropzone.textContent = "Item solto!"; // Atualiza o conteúdo da zona
});
