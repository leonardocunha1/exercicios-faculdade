async function api() {
    let user = document.getElementById("user").value;
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

    // document.querySelector(".aux2").style.display = "block";
    // document.querySelector(".aux1").style.display = "none";
    document.querySelectorAll(".aux2").forEach(element => { element.style.display = "block" });
    document.querySelectorAll(".aux1").forEach(element => { element.style.display = "none" });

    document.querySelector("#reset").addEventListener("click", () => {
        // document.querySelector(".aux2").style.display = "none";
        // document.querySelector(".aux1").style.display = "block";
        document.querySelectorAll(".aux2").forEach(element => { element.style.display = "none" });
        document.querySelectorAll(".aux1").forEach(element => { element.style.display = "block" });
        document.getElementById("user").value = "";
    })
}



