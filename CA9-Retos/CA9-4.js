/* 4) Escribí un programa que le pida al usuario su año de nacimiento e imprima
su edad actual en la consola con la frase "Tienes X años" (siendo X la cantidad de años). */

const prompt = require("prompt-sync")({ sigint: true });
let anio = parseInt(prompt("Ingresa tu año de nacimiento: "));

console.log(`Tienes entre ${2022-anio} y ${2021-anio} años` );