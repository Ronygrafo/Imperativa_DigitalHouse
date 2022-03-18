let counter = 0;
function noParesDeContarImparesHasta(numero){
    for(i=1; i <= numero; i = i+2){
        counter = counter + 1
    }
    console.log(counter)
}

noParesDeContarImparesHasta(21)

/* let i=1
console.log (Boolean(i <= 5))
i+2
console.log (Boolean(i <= 5))
i+2
console.log (Boolean(i <= 5))
i+2
console.log (Boolean(i <= 5)) */



/* }
console.log(noParesDeContarImparesHasta(10))


function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
    let counter = 0;
    for(let i = 0; i < numero; i++) {
        if( i % 2 !== 0 ) {
            console.log(i);
            counter++
        }
    }
    return counter;
} */