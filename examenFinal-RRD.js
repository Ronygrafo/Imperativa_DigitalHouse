
// ********* EJERCICIO 1:

const alumnos = [
    {
        id: 0,
        nombre: "Leandro",
        apellido: "Borrelli",
        legajo: 20210308,
        notas: [],
    },
    {
        id: 1,
        nombre: "Esteban",
        apellido: "Piazza",
        legajo: 20210211,
        notas: [],
    },
    {
        id: 2,
        nombre: "Martin",
        apellido: "Cejas",
        legajo: 20210218,
        notas: [],
    },
    {
        id: 3,
        nombre: "Karina",
        apellido: "Borgna",
        legajo: 20210516,
        notas: [],
    },
    {
        id: 5,
        nombre: "Javier",
        apellido: "Riera",
        legajo: 20220125,
        notas: [],
    },
];


// ¿Qué tipo de dato es?
// ¿Cuáles son las claves que puedes identificar
console.log("\n");
console.log('- - - - - - - - - - - - - Respuestas 1 - - - - - - - - - - - - -');
console.log(`El tipo de Dato es un ARRAY DE OBJETOS LITERALES`)
console.log("Identifico todas las Claves como ID, NOMBRE, APELLIDO, LEGAJO y NOTAS (como array)");
console.log("\n");

// Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma descendente. (*)
function ordenarPorLegajo(arrayAlumnos) {
    for (let i = 0; i < arrayAlumnos.length; i++) {
        for (let j = 0; j < arrayAlumnos.length - 1; j++) {
            if (arrayAlumnos[j].legajo > arrayAlumnos[j + 1].legajo) {
                let temp = arrayAlumnos[j];
                arrayAlumnos[j] = arrayAlumnos[j + 1];
                arrayAlumnos[j + 1] = temp;
            }
        }
    }
}
console.log('- - - - - - - - - - - - - Prueba 1 - - - - - - - - - - - - -');
console.table(alumnos);
ordenarPorLegajo(alumnos)
console.table(alumnos);
console.log("\n");

// ********* EJERCICIO 2: 

// Crear un método que retorne el promedio de notas.

let alumno = {
    id: 5,
    nombre: "Lucas",
    apellido: "Astrada",
    legajo: 20220125,
    notas: [10, 6, 8, 7, 9],
    promedioNotas: function () {
        let sumaNotas = 0
        for (let i = 0; i < this.notas.length; i++) {
            sumaNotas = sumaNotas + this.notas[i]
        }
        return sumaNotas / this.notas.length
    }
}
// -> Prueba 2.1

console.log('- - - - - - - - - - - - - prueba 2.1 - - - - - - - - - - - - -');
console.log(alumno)
console.log(`El promedio de notas del alumno: ${alumno.nombre} ${alumno.apellido} es de ${alumno.promedioNotas()}`)
console.log("");

// Crear una función que ordene las notas del alumno de forma ascendente.

function ordenarNotasAsc(objetoAlumno) {
    for (let i = 0; i < objetoAlumno.notas.length; i++) {
        for (let j = 0; j < objetoAlumno.notas.length - 1; j++) {
            if (objetoAlumno.notas[j] < objetoAlumno.notas[j + 1]) {
                let temp = objetoAlumno.notas[j];
                objetoAlumno.notas[j] = objetoAlumno.notas[j + 1];
                objetoAlumno.notas[j + 1] = temp;
            }
        }
    }
}
// -> Prueba 2.2

console.log('- - - - - - - - - - - - - prueba 2.2 - - - - - - - - - - - - -');
console.log(alumno.notas)
ordenarNotasAsc(alumno)
console.log(alumno.notas)
console.log("\n");


// ********* EJERCICIO 3:

// A. Crea una matriz de 3x3, cuadrada, con números enteros negativos en cada una de sus posiciones.
let matrix = [
    [-23, -45, -52],
    [-12, -49, -63],
    [-9, -77, -35],
]

// B. Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 5.
function sumaMultiplosDe5(objetoMatriz) {
    let multiplos = 0
    for (let row = 0; row < objetoMatriz.length; row++) {
        for (let column = 0; column < objetoMatriz[row].length; column++) {
            if (objetoMatriz[row][column] % 5 === 0) {
                multiplos = multiplos + objetoMatriz[row][column];
            }
        }
    }
    return multiplos
}

// C. Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es impar.
function sumatoriaMatrizPar(objetoMatriz) {
    function sumarTodo() {
        let sumatoria = 0
        for (let row = 0; row < objetoMatriz.length; row++) {
            for (let column = 0; column < objetoMatriz[row].length; column++) {
                sumatoria = sumatoria + objetoMatriz[row][column];
            }
        }
        return sumatoria
    }
    sumarTodo()
    return Boolean(sumarTodo() % 2 !== 0)
}

// D. Crear una función que retorne la suma de las diagonales de la matriz.
function sumatoriaDiagonales(objetoMatriz) {
    let diagonalDesc = 0
    let diagonalAsc = 0
    for (let row = 0; row < objetoMatriz.length; row++) {
        for (let column = 0; column < objetoMatriz[row].length; column++) {
            if (row === column) {
                diagonalDesc = diagonalDesc + objetoMatriz[row][column]
            }
            if (row + column === objetoMatriz.length - 1) {
                diagonalAsc = diagonalAsc + objetoMatriz[row][column]
            }
        }
    }
    return (diagonalDesc + diagonalAsc)
}

// -> Prueba 3

console.log('- - - - - - - - - - - - - prueba 3 - - - - - - - - - - - - -');
console.table(matrix)
console.log(sumaMultiplosDe5(matrix))
console.log(sumatoriaMatrizPar(matrix))
console.log(sumatoriaDiagonales(matrix))
console.log("\n");