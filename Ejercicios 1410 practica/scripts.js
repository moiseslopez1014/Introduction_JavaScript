
//Ejercicios practica

//1

let curso = 'JS Basico';

function mostrar() {
    let tema = 'Funciones';
    console.log(curso+tema);
}

//console.log(tema);
//Error porque tema solo esta definida dentro de la funcion
mostrar()

//2

function saludar(nombre) {
    return ('Hola '+nombre);
}

let saludo = saludar('Moises')

console.log(saludo);

//3

const miLogger = (nombre) => console.log(nombre+"LOG");

miLogger('main');

//4

const esPar = (n) => n % 2 === 0;

console.log(esPar(7));

//5
//primer enunciado
const frutas = ['aguacate', 'uva', 'albaricoque'];

console.log('indice primero: ', frutas[0]);
console.log('Ultimo indice: ', frutas.length-1);

//Segundo enunciado
console.log('===Segundo enunciado===');

frutas.pop();
frutas.push('mango');

//Tercer enunciado
console.log('tercer enunciado');
console.log(frutas);

//ejercicio 6.
console.log('ejercicio 6');

let cola = [];

cola.push('Ana');
cola.push('Pepe');
cola.unshift('Luisa')

console.log(`${cola.shift()} Puede ser atendida en este momento`);

console.log(cola);


//7

console.log('---7');

const items = ['altura', 'base', 'cuadrado', 'bisectriz'];

items.forEach(
    (val, ind) => {
        console.log(ind + ': ' + val);
    }
);

//parte 2

const iWithB = items.findIndex(palabra => palabra.includes('b'));
const iWithY = items.findIndex(palabra => palabra.includes('y'));

console.log('index with b:', iWithB);
console.log('index with y:', iWithY);

/*
//Caso 1

const nombre = 'Juan';
const mensajes = 3;

console.log('El usuario ' + nombre + ' tiene ' + mensajes + 'mensajes');

//caso 2

const edad = 25;
const ciudad = 'Madrid';

console.log('Edad:', edad, 'Ciudad:', ciudad);

//caso 3

const paresEImpares = [1,2,3,4,5,6,7,8,9,10];
paresEImpares.forEach(
    paresEImpares % 2 === 0 ? console.log(paresEImpares + 'es par') : console.log(paresEImpares + 'es impar')
)

//caso 4

const activo = false;

console.log('activo:', activo); //Es mas claro para debug porque el valor booleano sigue manteniendose sin transformarse en un string

//ternarios

const notas = [8,4,6,9,5,3];

notas.forEach(
    console.log('La nota ' + nota + (nota => nota < 6 ? 'reprobado' : 'aprobado'));
)
//malll mu malll


const numeros = [10, -5, 0, 7, -3, 2];

numeros.forEach(numero => {
    console.log('El numero ' + numero + (numero === 0 ? ' es cero' : numero < 0 ? ' es negativo' : ' es positivo'));
})

*/

// Ejercicio 8

const letras = ['a', 'b', 'c', 'd'];

const dosPrimeras = letras.slice(0,2);
    console.log(dosPrimeras);

const tresUltimas = letras.slice(-3);
    console.log(tresUltimas);

// Ejercicio 9

const primerArray = [1,2];
const segundoArray = [3,4];

const arraysUnidos = primerArray.concat(segundoArray);

console.log('Ojala esto sea uno y dos: ', primerArray);
console.log('Ojala esto sea tres y cuatro: ', segundoArray);
console.log('Ambos arrays unidos en uno solo: ', arraysUnidos);
console.log('Me sorprende que esto que parecia sencillo, de hecho lo fue. no se como no se jodio. Bravo. Dejenme en paz');

// Ejercicio 10

const numeros = [2,5,8,12];

console.log('Alguno es mayor a 10?', numeros.some(num => num > 10));
console.log('Todos son mayores que 0?', numeros.every(num => num > 0));
console.log('El array contiene el 8?', numeros.includes(8));

//Ejercicio 11

const cod = [9,8,7];

const inviertoNoCopio = [...cod].reverse()

console.log(cod);
console.log(inviertoNoCopio);

const leMetoGuiones = cod.join(' - ');
console.log(leMetoGuiones);
console.log(cod);

//Ejercicio 12

const base = [1,2,3];

const alCuadrado = base.map(num => num * num);

console.log('originales ', base);
console.log('Al cuadrado', alCuadrado);

//Ejercicio 13

const pagos = [10,20,5];

const pagosSumados = pagos.reduce((acc, val) => acc + val, 0);
console.log('Suma de los pagos:', pagosSumados);

// Ejercicio 14

let desorden = [10,2,1,20];

let desordenOrdenado = [...desorden].sort((a,b) => a - b);
let desordenOrdenadoInvertido = [...desordenOrdenado].reverse();

console.log('Desorden:', desorden);
console.log('Ordenamos:', desordenOrdenado);
console.log('E invertimos:', desordenOrdenadoInvertido);

//Extra variante

desordenOrdenado = [...desorden].sort((a,b) => a - b);
desordenOrdenadoInvertido = [...desorden].sort((a,b) => b - a);

console.log('Desorden:', desorden);
console.log('Ordenamos:', desordenOrdenado);
console.log('E invertimos:', desordenOrdenadoInvertido);