console.log("Practica dia 16 Octubre!");

//1

const alumnos = ["Jeronimo", "Manuel", "Kratos", "Pandora", "Jose Luis"];

for (let i = 0; i < alumnos.length; i++) {
  console.log(`Indice de alumno:${i} con nombre:${alumnos[i]}`);
}

//2

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayNumeros.forEach(function (num) {
  if (num % 2 === 0) {
    console.log(`${num} es par`);
  } else {
    console.log(`${num} es impar`);
  }
});

//3

const persona = {
  nombre: "Jose Luis",
  edad: 23,
  ciudad: "Cadiz",
  profesion: "programador",
};

persona.saludar = function () {
  console.log("Hola");
};
persona.caminar = function () {
  console.log("Pausa?");
};

Object.freeze(persona);

//4

function mostrarArray(a) {
  for (let i = 0; i < a.length; i++) {
    console.log(`Indice del array:${i} con valor:${a[i]}`);
  }
}

mostrarArray([24, 56, 2367, 256, 2, 673, null, true, "casa"]);

//5

const inventario = [
  {
    nombre: "Altavoces RevienTimpanos",
    precio: 34.95,
    stock: 25,
  },
  {
    nombre: "Laptop TablaCortar",
    precio: 199.95,
    stock: 10,
  },
  {
    nombre: "Consola PisaPapeles",
    precio: 799,
    stock: 15,
  },
];

let valorTotal = 0;
inventario.forEach((elemento) => {
  valorTotal += elemento.precio * elemento.stock;
});

console.log('El valor total es: ', valorTotal);

//6

inventario[1].stock += 10;

inventario.push(
  {nombre: 'Mesa NoSilla',
  precio: 49.99,
  stock:23,});
inventario.shift();

//7

function buscarProducto(nombre) {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre.includes(nombre) === true) {  //para nombre parcial
//    if (inventario[i].nombre === nombre) {  //para nombre exacto
      console.log(inventario[i]);
    }
  }
}
buscarProducto('Laptop Tabla');

//8

let conversionATexto = inventario.map((item, indice) => `Indice: ${indice} - Producto: ${item.nombre} - Precio: ${item.precio} - Stock: ${item.stock}`).join('\n')

console.log(conversionATexto);

