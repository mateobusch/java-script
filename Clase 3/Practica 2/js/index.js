
fetch("https://rickandmortyapi.com/api/character")
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos)
    let personajes = document.querySelector(".characterList")
    let characters = ""
    for (let i = 0; i < datos.results.length; i++) {
        console.log(datos.results[i]);
        let perfiles = datos.results[i]
        characters += 
        `<article> <img src="${perfiles.image}" alt="${perfiles.name}"> 
        <p>Name: ${perfiles.name}</p> 
        <p>Status: ${perfiles.status}</p>
        </article>`
    }
personajes.innerHTML= characters
})
.catch(function(error){
    console.log(error)
})



