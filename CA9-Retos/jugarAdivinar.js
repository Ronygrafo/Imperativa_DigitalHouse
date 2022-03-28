const prompt = require("prompt-sync")({ sigint: true })
const prompt2 = require("prompt-sync")({ sigint: true })
let pararDeJugar = false
let deseaJugar = undefined

while (pararDeJugar == false) {
    deseaJugar = undefined
    function jugarAdivinar(){
        let numRandom = Math.floor(Math.random() * 10)+1
        let adivinar = prompt("- Trata de adivinar número del 1 al 10: ")

        while (numRandom != adivinar) {
            console.log("- Ese no era! Sigue Intentando")
            adivinar = prompt("escribe # 1 al 10: ")
        }
        console.log("- FELICITACIONES ADIVINASTE!!")
        console.log("--------------------------------")
    }
    jugarAdivinar()

    while (deseaJugar == undefined) {
        console.log("- ¿Quieres seguir jugando?")
        let seguirJugando = prompt2("Responde Si / No: ")
        console.log(" ")
        if (seguirJugando == "No" || seguirJugando == "NO" || seguirJugando == "no" || seguirJugando == "N" || seguirJugando == "n") {
            pararDeJugar = true
            deseaJugar = false
        } else if (seguirJugando == "Si" || seguirJugando == "SI" || seguirJugando == "si" || seguirJugando == "S" || seguirJugando == "s") {
            pararDeJugar = false
            deseaJugar = true
        } else {
            deseaJugar = undefined
        }
    }
    
}
console.log("- Gracias por jugar! VUELVE PRONTO")