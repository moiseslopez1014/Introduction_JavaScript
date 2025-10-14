/*// ejercicios 14 de octubre

let globalTotal  = 'tres';

console.log(globalTotal);

function scopeInterior() {
    let varLocal = 'hola';
    console.log(varLocal);
    return varLocal + ' caracola';
}

let result = scopeInterior();
console.log(result);

function devolverUnSaludo (name) {
    let saludo = 'hola '+ name;
    return saludo;
}

let nameASaludar = 'Isaac';

let greeting = devolverUnSaludo(nameASaludar)
console.log(greeting);

const GUSTOS = function(preferensia) {

    return 'Me gusta ' + preferensia;
}

console.log(GUSTOS('el fresquito de la mañana'));


let array = ['hola', 5, 'Adios', null, 6];

let arrayVacio = [];

arrayVacio.push(1);
arrayVacio.push(3);
arrayVacio.push(null);
arrayVacio.push('Hola');
arrayVacio.pop();
arrayVacio.unshift(7);
arrayVacio.shift();

console.log(arrayVacio);

//

let product = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero*2);
});



let frutas = ['manzanas', 'pera', 'uva', 'albaricoques', 'sandia'];
let empty = [];

console.log(frutas, empty);


console.log(frutas[1]);

frutas.push('melocoton');

console.log(frutas);
frutas.pop();
frutas.unshift('sandia');
console.log(frutas);
frutas.shift();
console.log(frutas);

frutas.forEach((fruta, index) => {
    console.log(`la fruta ${fruta} esta en la posicion ${index}`);
})

console.log(frutas.indexOf('pera'));

let frutaEnOferta = frutas.slice(-1);
console.log(frutaEnOferta);

let array1 = [1,3,5];
let array2 = [2,4,6];
let arrayUnion = array1.concat(array2);
console.log(arrayUnion);

console.log(arrayUnion.some((elem) => elem %2 === 0));
console.log(arrayUnion.every((elem) => elem %2 === 0));
console.log(arrayUnion.every((elem) => elem > 3));

console.log(arrayUnion.includes(45));

*/

