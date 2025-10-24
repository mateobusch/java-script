let mensaje = "¿Vas a salir de tu casa?";
let resultado = confirm(mensaje);

if (resultado == true){
    alert("Chequeá el pronóstico del tiempo antes de salir");
}else{
    alert("Que bueno que te quedes. Va a llover mucho hoy.");

}

let nombre = "¿Cual es tu nombre?"
let respuesta = prompt(nombre)
console.log(respuesta)

let edad = "¿Cual es tu edad?"
let respuesta1 = prompt(edad)
console.log(respuesta1)

let deportes = "Te gustan los deportes?"
let fanDeportes= confirm(deportes)

alert("Muchas gracias " + respuesta + " por responder nuestras preguntas")

let usuario ={
    nombre: respuesta,
    edad: respuesta1,
    depor: fanDeportes,
    deportistaProfesional() {
  if (this.depor) {
    return "Sí, soy fan de los deportes";
  } else {
    return "No soy tan fan aún de los deportes";
  }
}

}
console.log(usuario.deportistaProfesional());