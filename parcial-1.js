// Ejercicio 1:

const estudiante = {
    nombre: 'Rony',
    apellido: 'Romero Duque',
    camada: 2,
    esParcial: true,
}

function imprimirNota(nota) {
    function validarNota(nota) {
        if (nota < 4) {
            return 'desaprobado'
        } else if (nota >= 4 && nota < 7) {
            return 'Debe rendir Examen Final'
        } else {
            return 'PROMOCIONADO!'
        }
    }
    console.log(` El alumno obtuvo una nota igual a ${nota}.\n Por lo tanto su condición es ${validarNota(nota)}\n`)
}

// PRUEBA Ejercicio 1
imprimirNota(3)
imprimirNota(6)
imprimirNota(9)

// - - - - - - - - - - - - - - - - - - - - 

// Ejercicio 2:

const clase = [
    {
        nombres: 'Vero',
        apellidos: 'Valdez',
        bimestre: 2,
    },
    {
        nombres: 'Nataly',
        apellidos: 'Guerrero',
        bimestre: 2,
    },
    {
        nombres: 'Martín',
        apellidos: 'Cejas',
        bimestre: 2,
    },
]


function siguienteCursada(arrayClase) {
    for (let i = 0; i < arrayClase.length; i++) {
        const element = arrayClase[i];
        arrayClase[i].bimestre += 1
    }
}
// PRUEBA Ejercicio 2

console.log(clase);
siguienteCursada(clase)
console.log(clase);

// - - - - - - - - - - - - - - - - - - - - 

// Ejercicio 3:

const asistenciaMinima = 23

function aprobacionAsistenciaProgreso(asistencias, playground) {
    if (asistencias === 23 && playground == true) {
        return "Alumno está APROBADO"
    } else {
        return "Alumno está desaprobado"
    }
}

// PRUEBA Ejercicio 3:

console.log(aprobacionAsistenciaProgreso(23, true));
console.log(aprobacionAsistenciaProgreso(23, false));
console.log(aprobacionAsistenciaProgreso(2, true));