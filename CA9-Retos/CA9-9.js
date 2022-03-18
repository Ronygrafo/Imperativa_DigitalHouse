/* 8) Escribí una función llamada elemento que recibe un arreglo
como parámetro. La función debe devolver el valor que se
encuentra en la tercera posición. Si el arreglo no tiene al menos
3 elementos deberá retornar -1. */

const prompt = require("prompt-sync")({ sigint: true });
let numero = parseInt(prompt("Calculáme el 18, ve... "));

if(numero > 500){
    console.log('El 18% es: ' + numero * 0.18)
} else{
    console.log('Subile! tacaño')
}