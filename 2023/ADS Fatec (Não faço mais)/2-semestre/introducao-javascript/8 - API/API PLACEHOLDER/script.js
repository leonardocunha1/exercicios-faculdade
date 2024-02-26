async function api() {
    let user = document.getElementById("user").value;
    if (user > 0 && user < 11) {
        let dados = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`).then(response => response.json());
        document.querySelector(".id").textContent = dados.id;
        document.querySelector(".name").textContent = dados.name;
        document.querySelector(".username").textContent = dados.username;
        document.querySelector(".email").textContent = dados.email;
        document.querySelector(".street").textContent = dados.address.street;
        document.querySelector(".suite").textContent = dados.address.suite;
        document.querySelector(".city").textContent = dados.address.city;
        document.querySelector(".zipcode").textContent = dados.address.zipcode;
        document.querySelector(".phone").textContent = dados.phone;
        document.querySelector(".website").textContent = dados.website;
        document.querySelector(".company").textContent = dados.company.name;

        const elementsToDisplay = document.querySelectorAll(".aux2");
        const elementsToHide = document.querySelectorAll(".aux1");
        elementsToDisplay.forEach((element) => (element.style.display = "block"));
        elementsToHide.forEach((element) => (element.style.display = "none"));

        const dadosUsuario = document.querySelector("h1");
        dadosUsuario.textContent = `Dados do usuário`;

        let exibicaoLayout = function () {
            elementsToDisplay.forEach(element => { element.style.display = "none" });
            elementsToHide.forEach(element => { element.style.display = "block" });
            document.getElementById("user").value = "";
            dadosUsuario.textContent = "Consultar Usuário";
        }

        document.querySelector("#reset").addEventListener("click", exibicaoLayout)
    } else {
        alert("Digite um número de usuário válido!")
    }
}



