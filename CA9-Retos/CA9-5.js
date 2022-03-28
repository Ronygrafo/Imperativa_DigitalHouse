/* 5) Escribí un programa que piense un número de forma aleatoria del 1 al 10 y
le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola
"Felicitaciones, ese era!", de lo contrario, debe imprimir "Lo siento, intenta nuevamente!" */

//DESAFIO2: PREGUNTAR SI DESEA SEGUIR JUGANDO

const prompt = require("prompt-sync")({ sigint: true })
let seguirJugando = true

while (seguirJugando == true) {

    function jugarAdivinar() {
        let numRandom = Math.floor(Math.random() * 10)+1
        let adivinar = prompt("- Trata de adivinar número del 1 al 10: ")

        while (numRandom != adivinar) {
            console.log("- Ese no era! Sigue Intentando")
            adivinar = prompt("Recuerda... 1 al 10: ")
        }
        console.log("- FELICITACIONES ADIVINASTE!!")
        console.log("--------------------------------")
    }
    jugarAdivinar()

    console.log("- ¿Quieres seguir jugando?")
    console.log(" ")

    adivinar = prompt("Si / No: ")
    if (adivinar == "Si" || adivinar == "SI" || adivinar == "si"){
        jugarAdivinar()
    } else if (adivinar == "No" || adivinar == "NO" || adivinar == "no"){
        seguirJugando = false
    } else {
        adivinar = prompt("Si / No: ")
    }
}
console.log("- Gracias por jugar! VUELVE PRONTO")