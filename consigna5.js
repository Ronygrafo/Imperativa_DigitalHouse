const prompt = require("prompt-sync")({ sigint: true });
let pulgadas = prompt("Pulgadas a convertir: ");
/* Convertir pulgadas en centímetros. */

const coversion = 2.54
function covertirCM (pulgadas)
{
    return pulgadas * coversion
}

console.log(`En Centímetros el valor es ${covertirCM(pulgadas)}`);