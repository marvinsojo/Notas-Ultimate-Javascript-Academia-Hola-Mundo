/**
 * Esta linea de codigo se utiliza como un pequeño hack
 * para verificar que metodos y propiedades podemos utilizar
 * con el elemento. Para saber como yo puedo interactuar con
 * el. Esto se hace en la consola del navegador.
 * console.log(Object.getPrototypeOf(htmlElement));
 */

/**
 * Estos métodos van a buscar mediante el indice y por eso
 * son mas repidos
 */

/*
Esto nos devuelve un HTML***Element -> los asteriscos
pueden variar segun el elemento seleccionado Ex. Div,
paragrsph, etc.
*/
// HTMLElement
let htmlElement = document.getElementById('cuerpo');

// HTMLCollection -> se parece a un array pero no lo es.
let elementosRed = document.getElementsByClassName('red');

// NodeList 
let elementosChanchito = document.getElementsByName('chanchito');

// HTMLCollection -> se parece a un array pero no lo es.
let parrafos = document.getElementsByTagName('p');


/**
 * Estos métodos son lentos, ya que tienen que buscar por todo
 * el documento para buscar el elemento.
 */
// HTMLElement -> solo un elemento
// si queremos buscar por id usamos # y por clases .
let el = document.querySelector('#cuerpo');

// NodeList
// si queremos buscar por id usamos # y por clases .
// y tambien podemos buscar por tipo de etiqueta.
let els = document.querySelectorAll('p');

/**
 * La diferencia entre HTMLColletion y la NodeList es
 * que HTMLCollection no importa cuantas veces manipulemos o
 * modifiquemos el DOM esta siempre va a reflejar los últimos
 * cambios que tiene el DOM, mientras que la NodeList no siempre
 * va a sincronizar con los cambios que tenemos en el DOM
 */
let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive, pstatic);

let nuevoP = document.createElement('p');
document.body.append(nuevoP);

console.log(plive, pstatic);