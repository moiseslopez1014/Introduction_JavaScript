// ejercicio 4

let tienePermisos = false;
let edad = 12;

if (tienePermisos && edad >=18) {
    console.log(`tiene permisos y edad`);
}
else if (!tienePermisos && edad >=18) {
    console.log(`tiene edad pero no permisos`);
}
else if (tienePermisos && edad < 18) {
    console.log(`tiene permisos pero no edad suficiente`);
}
else {
    console.log(`No tiene permisos ni edad suficiente`);
}