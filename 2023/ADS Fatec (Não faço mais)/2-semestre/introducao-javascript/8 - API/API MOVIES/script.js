async function api() {
    let movie = document.getElementById("movie").value;
    let dados = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=8e6149a9`).then(response => response.json());
    document.querySelector(".title").textContent = dados.Title;
    document.querySelector(".year").textContent = dados.Year;
    document.querySelector(".released").textContent = dados.Released;
    document.querySelector(".runtime").textContent = dados.Runtime;
    document.querySelector(".genre").textContent = dados.Genre;
    document.querySelector(".director").textContent = dados.Director;
    document.querySelector(".writer").textContent = dados.Writer;
    document.querySelector(".actors").textContent = dados.Actors;
    document.querySelector(".plot").textContent = dados.Plot;
    document.querySelector(".language").textContent = dados.Language;
    document.querySelector(".country").textContent = dados.Country;
    document.querySelector(".awards").textContent = dados.Awards;
    document.querySelector(".poster").src = dados.Poster;
    document.querySelector(".imdbRating").textContent = dados.imdbRating;
    document.querySelector(".imdbVotes").textContent = dados.imdbVotes;

    // document.querySelector(".aux1").style.display = "none";
    
    document.querySelector(".aux2").style.display = "block";
}
