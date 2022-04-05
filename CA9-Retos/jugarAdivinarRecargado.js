const prompt = require("prompt-sync")({})
const prompt2 = require("prompt-sync")({})
const prompt3 = require("prompt-sync")({})

let persona = prompt3("- Nombre de Jugardor: ")

// Objeto Persona / Jugador
let jugador = {
    nombre: persona,
    intentosFallidos: 0,
    numerosAdivinados: [],
    porcentajeSuerte: function(){
        return (this.numerosAdivinados.length / this.intentosFallidos)
    }
}

// Continuidad del juego
let pararDeJugar = false
let deseaJugar = undefined

// Ciclo de Turno
while (pararDeJugar == false) {
    deseaJugar = undefined
    function jugarAdivinar(){
        let numRandom = Math.floor(Math.random() * 10)+1
        let adivinar = prompt("- Trata de adivinar número del 1 al 10: ")

        while (numRandom != adivinar) {
            console.log(" ")
            console.log("- Ese no era! Sigue Intentando")
            adivinar = prompt("escribe # 1 al 10: ")
            jugador.intentosFallidos ++
        }
        console.log(" ")
        console.log("- FELICITACIONES ADIVINASTE!!")
        console.log("--------------------------------")
        console.log(" ")
        jugador.numerosAdivinados.push(adivinar)
    }
    jugarAdivinar()

// Pregunta de Continuidad
    while (deseaJugar == undefined) {
        console.log(`- ${jugador.nombre} ¿Quieres seguir jugando?`)
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

// Mensaje Despedida
console.log(`- ${jugador.nombre} tus Estadísticas fueron:`)
console.log(`- Cantidad de intentos fallidos: ⓧ ${jugador.intentosFallidos}`)
console.log(`- Los números que adivinaste fueron: ${jugador.numerosAdivinados} ✓`)
console.log(`- Tu porcentaje de suerte fue de: ★ ${Math.round(jugador.porcentajeSuerte()*100)}%`)
console.log(" ")
console.log("- Gracias por jugar! VUELVE PRONTO")