let numeros = "Escribe un numero"
let numero = prompt(numeros)

let numeros1 = "Escribe otro numero"
let numero1 = prompt(numeros1)

function multiplicar (num1,num2){
    return num1 * num2
}
let resultado= multiplicar(numero,numero1);
console.log("El resultado de multplicar " + numero + " y " + numero1 + " es: " + resultado)
