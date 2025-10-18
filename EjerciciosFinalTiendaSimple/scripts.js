//Tienda simple Ejercicios JavaScript 17 Octubre

console.log('=== TIENDA SIMPLE ===');

//1 Definicion incial de datos
console.log('//1 Definicion incial de datos');

const productos = [
  {
    nombre: 'Laptop',
    precio: 899.95,
    stock: 27,
  },
  {
    nombre: 'Tarjeta de Red',
    precio: 22.95,
    stock: 53,
  },
  {
    nombre: 'Impresora',
    precio: 54.95,
    stock: 28,
  }
];

//2 Mostrar el inventario incial
console.log('//2 Mostrar el inventario incial');

productos.forEach((producto) => { //por cada objeto
  const {nombre, precio, stock} = producto; //rescata nombre, precio y stock
  console.log(`Producto: ${nombre} | Precio: ${precio}  | Stock: ${stock}`) // muestra lo rescatado en texto formateado
});

//3 Agregar un nuevo producto
console.log('//3 Agregar un nuevo producto');

function agregarProducto(nombre, precio, stock) { //introduce 3 parametros
  productos.push({nombre: nombre, precio: precio, stock: stock}) //agrega un objeto con claves nombre ,precio, stock
}

agregarProducto('Altavoces', 49.99, 24);

//4 Actualizar el stock de un producto
console.log('//4 Actualizar el stock de un producto');

function actualizarStock(nombre, cantidad) { //introduce parametros
  let productoEncontrado = false; //Si al final sigue falso da mensaje error
  for (let i = 0; i < productos.length; i++) { //Iteracion para que recorra todos los objetos del array y saque su indice
    if (productos[i].nombre === nombre) {//Si el actual producto a comprobar .nombre coincide con el parametro
      productoEncontrado = true; //cambia la variable incial a encontrado
      productos[i].stock += cantidad;//en el objeto encontrado reasignar diferencia en stock
    }
  }
  if (productoEncontrado === false) {//Si el for termino y variable sigue falso
    console.log(`No se encuentra producto: ${nombre}`)//mensaje error
  }
}
      actualizarStock('Impresora', -5);

//5 Calcular el valor total del inventario
console.log('//5 Calcular el valor total del inventario');

function calcularValorTotal() {
  let valorTotal = 0; // Variable que acumula los valores de cada objeto
  productos.forEach((objeto) => { //iteracion entre objetos del array
    valorTotal+= objeto.precio * objeto.stock; //multiplica precio y stock de objeto y lo suma a valortotal
  })
  console.log(`El valor total de todo el inventario es de: ${valorTotal} Euros`); //mensaje con el calculo
  return valorTotal;
}

calcularValorTotal();

//6 Buscar un producto
console.log('//6 Buscar un producto');

function buscarProducto(nombre) { //funcion declarada
  let objetoEncontrado = null; //Objeto a buscar 
  productos.forEach((objeto) => { // recorre el array de objetos
    if (objeto.nombre === nombre) { // si en el objeto actual coinciden nombres
      objetoEncontrado = objeto; //asigna ese objeto a variable incial
    }
  })
  if (objetoEncontrado === null) { //si al recorrer el array no hay producto con mismo nombre
    return `No se ha encontrado el producto "${nombre}"`; //dar mensaje de error
  }
  else { // si se asigno un valor a la variable incial que no sea null(o sea que se encontro un objeto antes)
    return objetoEncontrado; //devuelve objeto
  }
}

let objetoEncontrado = buscarProducto('Impresora')

console.log(objetoEncontrado);

//7 Aplicar Destructuracion
console.log('//7 Aplicar Destructuracion');

const {nombre: nombreEncontrado, precio: precioEncontrado} = objetoEncontrado;

console.log(` --Nombre: ${nombreEncontrado} -- Precio: ${precioEncontrado} Euros-- `);

//8 Eliminar un producto
console.log('//8 Eliminar un producto');

function eliminarProducto(nombre) { //funcion declarada
  const indiceEliminar = productos.findIndex(objeto => objeto.nombre === nombre) //encuentra nombre en el array y asigna numero de indice de su objeto (si no encuentra asigna -1)
  if (indiceEliminar !== -1) { // si indice no es igual a -1 (importante, si hacemos el splice con -1 borraria el ultimo objeto del array al introducir un nombre mal)
    productos.splice(indiceEliminar, 1); //elimina objeto del array
    console.log(`El producto ${nombre} encontrado y eliminado`);
  }
  else {
    console.log(`No se ha encontrado ${nombre}`);
  }
}

  eliminarProducto('Tarjeta de Red');

// 9 Mostrar todo el inventario
console.log('// 9 Mostrar todo el inventario');
//Literal es hacer un console.log, o repetir el ejercicio 2 
productos.forEach((producto) => { //por cada objeto
  const {nombre, precio, stock} = producto; //rescata nombre, precio y stock
  console.log(`Producto: ${nombre} | Precio: ${precio}  | Stock: ${stock}`) // muestra lo rescatado en texto formateado
});