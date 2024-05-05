let animales = []; // A esto se le conoce como un array literal [totalmente vacio]

animales = ['chanchito', 'caballo'];
console.log(animales);
console.log(animales[0]); //para imprimir solo uno de los elementos, podemos utilizar el indice [aqui va el indice]

animales[2] = 'dragon'; // De esta forma podemos agregar elementos a un array, mediante su indice
console.log(animales);

animales[10] = 'pez'; // Hay que estar atento de cual es la continuidad para ingresar elementos mediante el indice
console.log(animales[7]);
console.log(typeof animales); // En Javascript los arrays son tratados como objetos
console.log(animales.length); // Ya que son tratados como objetos se puede ingresar a sus propiedades de la misma forma