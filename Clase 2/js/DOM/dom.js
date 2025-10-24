alert("Bienvenidos a mi sitio")

let pregunta= "¿Está seguro de querer avanzar?";
let respuesta = confirm("¿Está seguro de querer avanzar?")

if (respuesta){
    document.querySelector(".saludo").innerText = "Qué alegría que quieras continuar tu visita";
}else{
        document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita";

}
let pregunta1= "Ingresa tu nombre"
let nombre = prompt(pregunta1)

document.querySelector("h1").innerText = " Bienvenido " +  nombre;

let pregunta2= "Ingresa tu edad"
let edad = prompt(pregunta2)

if (edad<18){
    let ocultar= document.querySelector(".container-general");
    ocultar.style.display = "none";
    let mostrar = document.querySelector("#accesoDenegado");
    mostrar.style.display = "block"
}else{

}
let pregunta3= "¿Te gusta la programación?"
let gusta = confirm(pregunta3)

if (gusta){
    document.querySelector(".background-img").innerHTML = "<img src='./img/programmer.jpeg' alt='' >"
    
}else{
        document.querySelector(".background-img").innerHTML = "<img src='./img/gatito.jpeg' alt='' >"

}
let pregunta4= "Dame la ruta de la imagen"
let ruta =prompt(pregunta4)
let loco = document.querySelector(".avatar")
loco.src = ruta
  

let pelicula  = prompt("Decime una película");
let director  = prompt("Decime el director");
let duracion  = Number(prompt("Decime la duración (en minutos)"));
let actor     = prompt("Decime un actor");


let peli = {
  nombre: pelicula,
  director: director,
  duracion: duracion,
  actor: actor
};


let contenedor = document.querySelector("#pelicula");
let lista = contenedor.querySelector("ul");

contenedor.style.display = "block";
lista.style.display = "block";

lista.innerHTML =
  "<li>Nombre: "   + peli.nombre   + "</li>" +
  "<li>Director: " + peli.director + "</li>" +
  "<li>Duración: " + peli.duracion + "</li>" +
  "<li>Actor: "    + peli.actor    + "</li>";

