// Agrupacion de datos que hacen sentido tenerlos juntos.
// Personaje de television
let nombre = "Tanjiro";
let anime = "Demon slaver";
let edad = 16;

let personaje = {}; // A esto se le llama objeto literal {totalmente vacio}
personaje = {
    nombre: "Tanjiro", // A esto se lo conoce como par llave-valor (key-value) tambien se les dice propiedad
    anime: "Demon slaver",
    edad: 16,
}
console.log(personaje);
console.log(personaje.nombre); // Si quiero acceder a una sola propiedad sintaxis 1
console.log(personaje['anime']); // Si quiero acceder a una sola propiedad sintaxis 2

personaje.edad = 13; // Si le quiero cambiar el valor a una propiedad sintaxis 1
personaje['edad'] = 16; // Si le quiero cambiar el valor a una propiedad sintaxis 2

delete personaje.anime;

console.log(personaje);