// A função deve ser assíncrona pois tem uma chamada síncrona dentro dela
async function api() {
    // Recupera o CEP informado pelo usuário
    let cep = document.getElementById("cep").value;
    // Chamando a API usando a função fetch do JavaScript
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`); //O await faz com que a função espere a resposta da API
    // Os dados chegam no formato string, então precisamos converter para JSON
    let dados = await resposta.json();
    // Coloca o logradouro no campo de endereço
    document.getElementById("logradouro").value = dados.logradouro;
    document.querySelector("#bairro").value = dados.bairro;
    document.querySelector("#localidade").value = dados.localidade;
    document.querySelector("#uf").value = dados.uf;
    document.querySelector("#ddd").value = dados.ddd;

}
