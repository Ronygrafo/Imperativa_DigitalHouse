/* 5) Escribí un programa que piense un número de forma aleatoria del 1 al 10 y
le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta nuevamente!" */

let numRandom = Math.floor(Math.random() * 10)+1
const prompt = require("prompt-sync")({ sigint: true })
let adivinar = prompt("Trata de adivinar número del 1 al 10: ")


while (numRandom != adivinar) {
    console.log("Sigue Intentando")
    adivinar = prompt("Trata de adivinar número del 1 al 10: ")
}
console.log("FELICITACIONES ADIVINASTE")

/* do {
    console.log("Sigue Intentando")
    adivinar = prompt("Trata de adivinar número del 1 al 10: ")
} while (numRandom != adivinar);
console.log("FELICITACIONES ADIVINASTE") */