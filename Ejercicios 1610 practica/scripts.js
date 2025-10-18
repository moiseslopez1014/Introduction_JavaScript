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

//9

const estudiantes = [
  {
    nombre: 'Juan',
    edad: 22,
    notas: [6.7,7,7],
  },
  {
    nombre:'Teresa',
    edad: 25,
    notas: [7.25,5.5,8],
  },
  {
    nombre:'Daniel',
    edad: 28,
    notas: [6,4.75,5.25],
  },
  {
    nombre: 'Abraham',
    edad: 22,
    notas: [8.4,3,9],
  },
]

function mediaNotas(notas) {
  let suma = notas.reduce((total, nota) => total + nota, 0);
  return suma / notas.length;
}

estudiantes.forEach((alumno) => {
  alumno.media = mediaNotas(alumno.notas);
});

console.log(estudiantes);

//10

estudianteConMedia = estudiantes.map(({nombre, media}) => ({nombre, media}))

const estudianteConMediaOrdenado = [...estudianteConMedia].sort((a,b) => b.media - a.media);

console.log(`${estudianteConMediaOrdenado[0].nombre} sabe lo que se hace porque tiene un ${estudianteConMediaOrdenado[0].media}`);
console.log(`${estudianteConMediaOrdenado[1].nombre} tambien esta a la altura con un ${estudianteConMediaOrdenado[1].media}`);
console.log(`${estudianteConMediaOrdenado[2].nombre} esta en la linea con ${estudianteConMediaOrdenado[2].media}`);
console.log(`${estudianteConMediaOrdenado[3].nombre} se arriesga a un tiron de orejas con ${estudianteConMediaOrdenado[3].media}`);

//11

const arrayConNotas = [[5,6,7],[8,9,10]]

function sumadorDeNotas(n) {
  if (n.length === 0) return 0; //finaliza cuando extraiga todos los numeros del subarray 

  const [primero, ...resto] = n; //coge los array y les saca uno de los valores por un lado y el resto por otro

  if (Array.isArray(primero)) //Si el valor sacado sigue siendo un array 
    {
    return sumadorDeNotas(primero) + sumadorDeNotas(resto); //Ejecuta la funcion por dos en paralelo, con valor separado y resto
    } 
    else 
    {
    return primero + sumadorDeNotas(resto); //cuando el valor separado es numero lo suma al final y repite funcion con resto de arrays
    }
  }

const resultadoSuma = sumadorDeNotas(arrayConNotas);
  console.log(resultadoSuma);
  

//12

const usuarios = [
  {
    nombre: 'GerardoElPotingues',
    edad: 56,
    email: 'eleboro@japierdole.pl',
  },
  {
    nombre: 'Snake',
    edad: 44,
    email: 'solid@metalgear.jp',
  },
  {
    nombre: 'Kratos6',
    edad: 22,
    email: 'kratos6@zoni.com',
  },
  {
    nombre: 'Croft',
    edad: 30,
    email: 'idontsendnudes@eidos.com',
  },
  {
    nombre: 'fisher',
    edad: 61,
    email: 'stealthboy@ubizo.fr',
  },
]

function buscarUsuario(email) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === email) {
      return usuarios[i];
    }
  }
}

const {nombre, edad, email} = buscarUsuario('eleboro@japierdole.pl');

console.log(`Usuario: ${nombre} | Edad: ${edad} | Email: ${email}`);