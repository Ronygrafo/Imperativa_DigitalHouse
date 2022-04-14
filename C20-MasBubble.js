/* Ejercicio 1

En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array.

Ordenar los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos,
cuánto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo?

—suponer que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

let concursantes = [
    {
        id: 1,
        nombre: 'Carlos',
        likes: 57,
    },
    {
        id: 2,
        nombre: 'Leidy',
        likes: 26,
    },
    {
        id: 3,
        nombre: 'Rony',
        likes: 10,
    },
    {
        id: 4,
        nombre: 'Karina',
        likes: 39,
    },
    {
        id: 5,
        nombre: 'Angelica',
        likes: 14,
    },
    {
        id: 6,
        nombre: 'Jose',
        likes: 16,
    },
    {
        id: 7,
        nombre: 'Natalia',
        likes: 67,
    },
    {
        id: 8,
        nombre: 'Mariana',
        likes: 23,
    },
    {
        id: 9,
        nombre: 'Mia',
        likes: 20,
    },
    {
        id: 10,
        nombre: 'Sigrid',
        likes: 31,
    },
    {
        id: 11,
        nombre: 'Patricia',
        likes: 86,
    },
    {
        id: 12,
        nombre: 'Ramon',
        likes: 99,
    },
    {
        id: 13,
        nombre: 'Marybel',
        likes: 34,
    },
    {
        id: 14,
        nombre: 'Dayana',
        likes: 50,
    },
    {
        id: 15,
        nombre: 'Martin',
        likes: 45,
    },

]

function ordernarXLikes (arrayConcursantes,likes){
    for (let i = 0; i < arrayConcursantes.length; i++) {
        const element = arrayConcursantes[i];
        for (let j = 0; j < arrayConcursantes.length-1; j++) {
            const element = arrayConcursantes[j];
            if (arrayConcursantes[j].likes < arrayConcursantes[j+1].likes){
                let temp = arrayConcursantes[j]
                arrayConcursantes[j]= arrayConcursantes[j+1]
                arrayConcursantes[j+1] = temp
            }
        }
    }
return arrayConcursantes
}

function anunciarResultados(){
    console.log();
    console.log(`- El primer lugar es para ${concursantes[0].nombre} con ${concursantes[0].likes} Likes!! \n`)
    console.log(`- De segundo lugar tenemos a ${concursantes[1].nombre} con un total de ${concursantes[1].likes} likes \n`)
    console.log(`- Medalla de bronce para... ${concursantes[2].nombre} con ${concursantes[2].likes} likes  \n`)
    console.log(`- Y en último lugar ${concursantes[concursantes.length-1].nombre}, con tristes ${concursantes[concursantes.length-1].likes} likes \n`)
}

ordernarXLikes(concursantes, concursantes.likes)
anunciarResultados()



/* Ejercicio 2

El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor. */