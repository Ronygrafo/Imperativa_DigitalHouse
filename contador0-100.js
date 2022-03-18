/* 3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100 */

/* let total = 0

function sumatoria(){}
for(let i = 0; i <= 100; i++){
    total += i
    console.log(total)
} */

/* 5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta
el valor ingresado por parámetro. */

/* let pred2 = 0
let pred1 = 1
let sigNum = pred1 + pred2

console.log(sigNum)

function aumentPred(){
    pred2 = pred2 + pred1;
    pred1 = pred1 + sigNum
    sigNum = pred1 + pred2
} 
function aumentPred()
console.log(sigNum) */

function Fibonacci(number) {
    let a = 0
    let b = 1
    for (let i = 0; i < number; i++) {
        console.log(a)
        i=a+b;
        a=b;
        b=i;
    }
}

Fibonacci(1000000);


