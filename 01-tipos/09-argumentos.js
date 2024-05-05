/**
 * Se utilizan los parametros y argumentos para hacer nuestras funciones mas dinamicas.
 * Los parametros se colocan en los parentesis de nuestra función y dentro de ella.
 * Los argumentos se colocan en los parentesis cuando llamamos a nuestra función.
 * Las funciones pueden recibir multiples parametros y multiples argumentos.
 */


function suma(a, b) { //Dentro de los parentesis, podemos pasar parametros.
    return a + b;
}

let resultado = suma(5, 6); //Dentro de los parentesis cuando se llame a la función colocamos el argumento
console.log(resultado);
console.log(typeof suma);