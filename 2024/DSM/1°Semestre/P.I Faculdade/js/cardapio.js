let burgerArea = document.querySelector(".burgers-area");
let bebidasArea = document.querySelector(".bebidas-area");

burgerJson.forEach((item, index) => {
  let insereBurger = `
    <div class="burger">
        <div class="burger-img-area">
            <img class="burger-img" src="${item.img}" alt="${item.name}" srcset="" />
        </div>
        <div class="burger-infos">  
            <p class="burger-nome">${index+1} - ${item.name}</p>
            <p class="burger-descricao">${item.tipo}</p>
            <p class="burger-ingredientes">Ingredientes: ${item.description}</p>
        </div>
    </div>`;
  burgerArea.insertAdjacentHTML("beforeend", insereBurger);
});



bebidasJson.forEach((item, index) => {
    let insereBebida = `
    <div class="drinks">
        <div class="drink-img-area">
            <img class="drink-img" src="${item.img}" alt="${item.name}" srcset="" />
        </div>
        <div class="drink-infos">
            <p class="drink-nome">${index+1} - ${item.name}</p>
            <p class="drink-descricao">${item.tipo}</p>
            <p class="drink-ingredientes">Descrição: ${item.description}</p>
        </div>
    </div>`;
    bebidasArea.insertAdjacentHTML("beforeend", insereBebida);
});

