let pregunta1 = "De que pais sos?"
let nacionalidad1 = prompt(pregunta1)

let pregunta2 = "Cual es tu profesion?"
let profesion1 = prompt(pregunta2)

let pregunta3 = "Cuantos kilometros caminas por dia?"
let kilometros1 = prompt(pregunta3)

function filosofoHipster (nacionalidad, profesion, kmsRecorridos){
    if (nacionalidad == "Argentina" && profesion== "Musico" && kmsRecorridos>2){
        return "Soy un filósofo hipster"
    }else{
        return "Aún no soy filósofo hipster"
    }
}
let resultado = filosofoHipster(nacionalidad1, profesion1, kilometros1)
console.log(resultado)