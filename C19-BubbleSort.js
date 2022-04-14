let numeros = [6,5,7,2,4,3,8,1];

for(let i=0; i<numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) { // evitar desbordamiento
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

// console.log(numeros);

//ORDENANDO ALFABETICAMENTE

let misLetras = ['C','A','D','E','H','Z','J','L',];

function ordenarAlfabeticamenteAxZ(arrayLetras){
    for(let i=0; i<arrayLetras.length; i++) {
        for (let j = 0; j < arrayLetras.length - 1; j++) { 
            if (arrayLetras[j] > arrayLetras[j + 1]) {
                let temp = arrayLetras[j];
                arrayLetras[j] = arrayLetras[j + 1];
                arrayLetras[j + 1] = temp;
            }
        }
    }
console.log(arrayLetras);
}

function ordenarDescendenteZxA(arrayLetras){
    for(let i=0; i<arrayLetras.length; i++) {
        for (let j = 0; j < arrayLetras.length - 1; j++) { 
            if (arrayLetras[j] < arrayLetras[j + 1]) {
                let temp = arrayLetras[j];
                arrayLetras[j] = arrayLetras[j + 1];
                arrayLetras[j + 1] = temp;
            }
        }
    }
console.log(arrayLetras);
}x

ordenarAlfabeticamenteAxZ(misLetras)
ordenarDescendenteZxA(misLetras)

// ORDENANDO OBJETOS LITERALES

let lasCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

function ordenarPorSaldo(arrayCuentas){
    for(let i=0; i<arrayCuentas.length; i++) {
        for (let j = 0; j < arrayCuentas.length - 1; j++) { 
            if (arrayCuentas[j].saldo < arrayCuentas[j + 1].saldo) {
                let temp = arrayCuentas[j];
                arrayCuentas[j] = arrayCuentas[j + 1];
                arrayCuentas[j + 1] = temp;
            }
        }
    }
console.table(arrayCuentas);
}

console.table(lasCuentas);
//console.log(lasCuentas[2].saldo);
ordenarPorSaldo(lasCuentas)