/**
 * Las funciones son bloques fundamentales dentro de la construcción de aplicaciones.
 * Son un listado de instrucciones que se deben ejecutar.
 * Para crear funciones en javascript debemos utilizar la palabra reservada function.
 */

function saludar() {
    console.log('Hola Mundo');
}

saludar();

function suma() {
    return 2 + 2; // Aqui la función retorna un valor que luego podemos tomar
}

let resultado = suma(); // Aquí tomamos el valor retornado de la función y lo guardamos en una variable
console.log(resultado);

console.log(suma()); // De esta forma podemos igualmente imprimir la función