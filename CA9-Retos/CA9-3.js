/* 3) Escribí un programa que le pida al usuario ingresar un número,
luego le pida un segundo número, e imprima en la consola la
suma de los dos números que ingresó el usuario. */

const prompt1 = require("prompt-sync")({ sigint: true });
let num1 = prompt1("Ingresa 1er número: ");
const prompt2 = require("prompt-sync")({ sigint: true });
let num2 = prompt2("Dame otro: ");

console.log(`La suma de los números es: ${(parseInt(num1))+(parseInt(num2))}` );