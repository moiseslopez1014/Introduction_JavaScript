// ejercicio 6

let fruta = `melon`;
let precio = 0

switch (fruta) {
    case `manzana`:
        precio = 1.09;
        console.log(`tenemos ${fruta} y cuesta ${precio} el kilo`);
        break;
    case `fresas`:
        precio = 2.29;
        console.log(`tenemos ${fruta} y cuesta ${precio} el kilo`);
        break;
    case `melon`:
        precio = 1.50;
        console.log(`tenemos ${fruta} y cuesta ${precio} el kilo`);
        break;
        default:
        console.log(`no tenemos esa fruta`);
}