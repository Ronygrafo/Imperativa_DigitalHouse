/* 8) Construí un pseudocódigo que permita ingresar un número, si el número es mayor de 500,
se debe calcular y mostrar en pantalla el 18% de este. */

const prompt = require("prompt-sync")({ sigint: true });
let numero = parseInt(prompt("Calculáme el 18, ve... "));

if(numero > 500){
    console.log('El 18% es: ' + numero * 0.18)
} else{
    console.log('Subile! tacaño')
}