/*
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
    num => num % 2 === 0 ? console.log(num + 'es par') : console.log(num + 'es impar')
)

//caso 4

const activo = false;

console.log('activo:', activo); //Es mas claro para debug porque el valor booleano sigue manteniendose sin transformarse en un string


//ternarios

const notas = [8,4,6,9,5,3];

notas.forEach((nota) => { 
  const estado = nota < 5 ? 'suspenso' : 'aprobado';
  console.log('La nota ' + nota + ' es ' + estado);
});
//malll mu malll


const numeros = [10, -5, 0, 7, -3, 2];

numeros.forEach(numero => {
    console.log('El numero ' + numero + (numero === 0 ? ' es cero' : numero < 0 ? ' es negativo' : ' es positivo'));
})

// Ejercicio 8

const letras = ['a', 'b', 'c', 'd'];

const dosPrimeras = letras.slice(0,2);
    console.log(dosPrimeras);

const tresUltimas = letras.slice(-3);
    console.log(tresUltimas);
/*

// Ejercicio 9

const primerArray = [1,2];
const segundoArray = [3,4];

const arraysUnidos = primerArray.concat(segundoArray);

console.log('Ojala esto sea uno y dos: ', primerArray);
console.log('Ojala esto sea tres y cuatro: ', segundoArray);
console.log('Ambos arrays unidos en uno solo: ', arraysUnidos);
console.log('Me sorprende que esto que parecia sencillo, de hecho lo fue. no se como no se jodio. Bravo. Dejenme en paz');

// Ejercicio 10

const numeros10 = [2,5,8,12];

console.log('Alguno es mayor a 10?', numeros10.some(num => num > 10));
console.log('Todos son mayores que 0?', numeros10.every(num => num > 0));
console.log('El array contiene el 8?', numeros10.includes(8));

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


//extra
//split(): Rompe string en array

let stringTest = 'moiseslopeziglesias';
let arrayString = stringTest.split("");
console.log(arrayString);


// Ejercicios 15 octubre

console.log("=== Ejercicios 15 Octubre ===");

//1

const matrizBi = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrizBi[0][0]);
console.log(matrizBi[0][1]);
console.log(matrizBi[0][2]);
console.log(matrizBi[1][0]);
console.log(matrizBi[1][1]);
console.log(matrizBi[1][2]);
console.log(matrizBi[2][0]);
console.log(matrizBi[2][1]);
console.log(matrizBi[2][2]);

console.log("La segunda fila y tercera columna es: ", matrizBi[1][2]);

//2

for (let i = [0]; i < matrizBi.length; i++) {
  for (let j = [0]; j < matrizBi[i].length; j++) {
    console.log(matrizBi[i][j]);
  }
}

let sumados = 0;
for (let i = [0]; i < matrizBi.length; i++) {
  for (let j = [0]; j < matrizBi[i].length; j++) {
    sumados += matrizBi[i][j];
  }
}

console.log("La suma es: ", sumados);

//3

const matrizTri = 
[
  [
    [1,2],[3,4],
  ],
  [
    [5,6],[7,8],
  ],
];

console.log(matrizTri[0][0][0]);

//4

function cuentaAtras(i) {
  if (i < 1) return;
  console.log(i);
  cuentaAtras(i-1);
}

cuentaAtras(5);

//5

function sumaRe(i) {
  if (i <= 1) return 1;
  return i + sumaRe(i-1);
}

let retornoSumaRe = sumaRe(3);
console.log(retornoSumaRe);

//6 

function factorial(i) {
  if (i <=1) return 1;
  return i * factorial(i-1);
}

let retornoFactorial = factorial(5);
console.log(retornoFactorial);

//7

const persona = {
  nombre: 'Menganito',
  edad: 33,
  ciudad: 'Cabra'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

persona.profesion = 'mamporrero';

console.log(persona);

persona.edad = 34;

console.log(persona.edad);

persona.saludar = function() { console.log('Hola', persona.nombre) }

persona.saludar();

//8

const muchasPersonas = [
  {
    nombre: 'Juan',
    edad: 23,
    ciudad:'malaga'
  },
  {
    nombre: 'danie',
    edad: 30,
    ciudad:'algeciras'
  },
  {
    nombre: 'Dick',
    edad: 20,
    ciudad:'Breda'
  }
]

console.log(muchasPersonas[0].nombre);
console.log(muchasPersonas[1].nombre);
console.log(muchasPersonas[2].nombre);

//9

const colores = ['rojo','verde','azul'];

const [primerColor, segundoColor, tercerColor] = colores;

console.log(segundoColor, tercerColor, primerColor);

//10

const numerosParaSeleccion = [23,12,33];

const [numeroSeleccionado1, ,numeroSeleccionado2] = numerosParaSeleccion;
console.log(numeroSeleccionado2,numeroSeleccionado1);

//11

const persona11 = {
  nombre: 'Menganito',
  edad: 33,
  ciudad: 'Cabra',
  profesion: 'programador',
  hobbies: 'dormir'
}

const {nombre, edad} = persona11;

console.log(nombre, edad);

//12

const {nombre: nombrePersona, edad: edadPersona} = persona11;

console.log(nombrePersona, edadPersona);
//REPASO
//1
console.log('====== REPASO ======');

const libros = [
  {
    titulo: 'JavaScript for dummies',
    autor: 'Alejandro',
    año: 2025
  },
  {
    titulo: 'JavaScript o "No se como no se jodio"',
    autor: 'Moises',
    año: 2025
  },
  {
    titulo: 'Yo ya llevo disociando 2 horas',
    autor: 'estudiante Javascript',
    año: 2025
  },
  {
    titulo: 'JavaScript: o por que odio los seres humanos',
    autor: 'Brendan Eich',
    año: 1995
  },
]

libros.forEach(function(elemento) {
  console.log(elemento.titulo);
});


//2

const arrayNumeros = [3,56,342,25,246,8,43,5,2,5,77,5];

console.log(arrayNumeros.reduce((acc, val) => acc + val, 0));
//3

function mayoresQue(n) {
  const arrayNumeros = [3,56,342,25,246,8,43,5,2,5,77,5];
  return arrayNumeros.filter((val) => val > n );
}

console.log(mayoresQue(30));

//4

function conteoPalabras(n) {
  n = n.split(" ");
  return console.log(n.length);
}
conteoPalabras('Esta frase tiene cinco palabras');
*/

//5

const arrayDesordenado = [76,434,533,6,787,4,2,234,5,99];

const ordenamos = [...arrayDesordenado].sort((a,b) => a - b)

console.log(ordenamos);