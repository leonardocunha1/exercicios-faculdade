const button = document.querySelector("button");
const coracaoBrabo = document.querySelector(".coracao-brabo");
const msg = "O Palmeiras é o melhor time das américas";
const coracao = `<p class="scale">💚</p>`;
let i = 0;

button.addEventListener("mouseover", () => {
  button.textContent = msg;
  button.style.backgroundColor = "green";
  //   button.classList.add("scale");
  if (i === 0) {
    coracaoBrabo.insertAdjacentHTML("beforeend", coracao);
  }
  i++;
});
