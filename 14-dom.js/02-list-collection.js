let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);

/**
 * Como podemos seleccionar elementos tanto de las colecciones,
 * como de las listas
 */

let item1 = collection.namedItem('chanchito');
let item2 = collection.item(3);
let item3 = collection[3];

/**
 * Para iterar elementos en una colección podemos
 * utilizar los siguiente 
 */

// con un bucle forOf
for (let el of collection)
    console.log(el);

// Convirtiendo nuestra colección en un array *Nos muestra el objeto
Array.from(collection).forEach(x => console.log(x));

// Envolvemos nuestra colección en un array y utilizamos...
// ... y utilizamos nuestro spread operator [...collection]
// *Nos muestra el elemento mismo
[...collection].forEach(x => console.log(x));

/**
 * Para acceder a los elementos de las NodeList
 */

let item11 = list.item(3);
let item12 = list[3];

list.forEach(x => console.log(x));

// entries, keys y values.

let entries = list.entries();
let keys = list.keys();
let values = list.values();

[...list].forEach(el => console.log(el));