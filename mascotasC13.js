let misMascotas = [
    {
        nombre: "Sparkie",
        raza: "French Poddle",
        edad: 2,
        sonido: "Rrraafffh",
        llamada: function () {
            return `${this.sonido} ${this.sonido}`;
        },
    },
    {
        nombre: "Atenea",
        raza: "Criolla",
        edad: 7,
        sonido: "Güaaaaww",
        llamada: function () {
            return `${this.sonido} ${this.sonido}`;
        },
    },
    {
        nombre: "Molly",
        raza: "Callejera",
        edad: 11,
        sonido: "Miaaaj",
        llamada: function () {
            return `${this.sonido} ${this.sonido}`;
        },
    }
]

function aumentarEdad(arrayMascotas) {
    for (let i = 0; i < arrayMascotas.length; i++) {
        arrayMascotas[i].edad += 1;
    }
}

function aumentarEdad2(arrayMascotas) {
    for (let i = 0; i < arrayMascotas.length; i++) {
        console.log(arrayMascotas[i].edad);
        if (arrayMascotas[i].edad < 6) {
            arrayMascotas[i].edad += 1;
        } else if (arrayMascotas[i].edad > 6 && arrayMascotas[i].edad < 10) {
            arrayMascotas[i].edad += 2;
        } else {
            arrayMascotas[i].edad += arrayMascotas[i].edad / 2;
        }
        console.log(arrayMascotas[i].edad);
    }
}

function generarID(arrayMascotas) /*  {
    let identificaciones = 001
    for (let i = 0; i < arrayMascotas.length; i++) {
        const element = arrayMascotas[i]
        arrayMascotas.defineProperty(arrayMascotas[i], identificaciones, identificaciones)
        identificaciones += 1
    }
} */

/* console.log(misMascotas);
generarID(misMascotas)
console.log(misMascotas); */

/*     aumentarEdad(misMascotas);
    console.log(" - - - - - - - ")
    aumentarEdad2(misMascotas)
    console.log(" - - - - - - - ") */

    console.log( misMascotas.edad );