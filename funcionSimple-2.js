const prompt = require("prompt-sync")({ sigint: true });
let stringURL = prompt("ingrese sin espacios: ");
/* Convertir string en URL. */

let url = stringURL => 'http://www.' + stringURL + '.com';

console.log(`la URL es: ${url(stringURL)}`);