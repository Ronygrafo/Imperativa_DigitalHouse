let jugador = {
    nombre: 'Rony',
    intentosFallidos: 17,
    numerosAdivinados: [5,2,7,4,2,8],
    porcentajeSuerte: function(){
        return (this.numerosAdivinados.length / this.intentosFallidos)
    }
}
console.log(jugador.intentosFallidos);
console.log(jugador.numerosAdivinados);
console.log(jugador.numerosAdivinados.length);
console.log();

/* console.log(`- ${jugador.nombre} tus Estadísticas fueron:`)
console.log(`- Cantidad de intentos fallidos: ⓧ ${jugador.intentosFallidos}`)
console.log(`- Los números que adivinaste fueron: ${jugador.numerosAdivinados} ✓`)
console.log(`- Tu porcentaje de suerte fue de: ★ ${jugador.porcentajeSuerte()}%`)
console.log(" ")
console.log("- Gracias por jugar! VUELVE PRONTO") */