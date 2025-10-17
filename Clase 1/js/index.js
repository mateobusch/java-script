

function rectangulo (base,altura){
    return base * altura
}
let resultado= rectangulo(2,4);
console.log(resultado)

function triangulo (base,altura){
    return (base*altura)/2
}
let resultado1= triangulo(3,3);
console.log(resultado1)

function dolarHoy (peso,dolar){
    return peso*dolar
}
let resultado2= dolarHoy(30,1375);
console.log(resultado2)

function precioFinal (precio,iva){
    return precio * iva + precio
}
let resultado3= precioFinal(300,0.21)
console.log(resultado3)

function mitad (numero){
    return numero/2
}
let resultado4= mitad(50)
console.log(resultado4)


function sumar (num1, num2){
    return num1 + num2
}
function multiplicar (num1, num2){
    return num1 * num2
}
function restar (num1, num2){
    return num1 - num2
}
function dividir (num1, num2){
    return num1 / num2
}
function calculadora (num1, num2, calculo) {
    return calculo(num1,num2)
}
console.log(calculadora(2,4,sumar));
console.log(calculadora(4,6,multiplicar));
console.log(calculadora(6,8,restar));
console.log(calculadora(8,10,dividir));

function siguiente(numero) {
  return numero + 1;
}
console.log(siguiente(7))

function doble(numero) {
  return 2 * numero;
}
console.log(doble(5))

function siguienteDelDoble(numero) {
   return siguiente(doble(numero));
}
console.log(siguienteDelDoble(8))

function anterior(numero) {
  return numero - 1;
}
console.log(anterior(9))


function triple(numero) {
  return 3 * numero;
}
console.log(triple(90))

function anteriorDelTriple(numero) {
   return anterior(triple(numero));
}
console.log(anteriorDelTriple(18))



let misDatos= {
    nombre: "Mateo",
    apellido: "Busch",
    dni: 47391831,
    edad: 19,
    comidasFavoritas: ["Milanesa", "Pizza", "Ravioles"],
    saludar: function(){
        return "Hola, mi nombre es " +this.nombre+ "" +this.apellido+ " y tengo" +this.edad + " años. Mi comida favorita es " + this.comidasFavoritas[0]
    }
};
console.log(misDatos)
console.log(misDatos.saludar())

let auto={
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2014,
    color: "Blanco",
    posicion: 0,
    avanzar: function(n){
        return this.posicion=this.posicion + n
    },
    retroceder: function(n){
        return this.posicion= this.posicion - n
    }
}
auto.avanzar(10)
auto.retroceder(5)
console.log(auto.posicion)

let auto1={
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2014,
    color: "Blanco",
    posicion: 0,
    moverse: function(n){
        return this.posicion= this.posicion + n
    }
}
auto1.moverse(10)
auto1.moverse(-5)
console.log(auto1.posicion)

let ironMan= {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar Misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(n){
        this.energia= this.energia -10
        return "Poder elegido de " + this.nombre + "" + this.poderes[n] + " .Energia restante: " + this.energia;
    }
    
}
let Hulk= {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(n){
        this.energia= this.energia -10
        return "Poder elegido de " + this.nombre + " " + this.poderes[n] + "  .Energia restante: " + this.energia;
    }
    
}
console.log(ironMan.getPoder(0))
console.log(Hulk.getPoder(1))
console.log(ironMan.getPoder(2))
console.log(ironMan.getPoder(1))
console.log(ironMan.getPoder(0))
console.log(Hulk.getPoder(2))
console.log(ironMan.getPoder(1))
console.log(Hulk.getPoder(0))
console.log(ironMan.getPoder(2))
console.log(Hulk.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(Hulk.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(Hulk.getPoder(0))
console.log(ironMan.getPoder(2))
console.log(Hulk.getPoder(1))
console.log(ironMan.getPoder(0))
