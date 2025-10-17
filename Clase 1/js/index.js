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
