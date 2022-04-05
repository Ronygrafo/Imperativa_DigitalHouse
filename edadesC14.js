const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5]

// Otros Array
let edadesMenores = []
let mayoresDeEdad = []
let iguales18 = []

function filtrarEdades(arrayEdades) {
    for (let i = 0; i < arrayEdades.length; i++) {
        const element = arrayEdades[i];
        if (arrayEdades[i] === 18) {
            iguales18.push(arrayEdades[i])
            mayoresDeEdad.push(arrayEdades[i])
        } else if (arrayEdades[i] < 18) {
            edadesMenores.push(arrayEdades[i])
        } else {
            mayoresDeEdad.push(arrayEdades[i])
        }
    }
}


function incrementarEdades(arrayEdades) {
    for (let i = 0; i < arrayEdades.length; i++) {
        const element = arrayEdades[i];
        arrayEdades[i] +=1
    }
}
/* Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
Incrementar en 1 todas las edades. */

console.log(edades)
filtrarEdades(edades)
//incrementarEdades(edades)
console.log(edadesMenores)
console.log(mayoresDeEdad);
console.log(iguales18);