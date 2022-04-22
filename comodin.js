// ********* EJERCICIO 3:

// A. Crea una matriz de 3x3, cuadrada, con números enteros negativos en cada una de sus posiciones.

let matrix = [
    [-23, -45, -52],
    [-12, -49, -63],
    [-9, -77, -35],
]

// B. Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 5.
function sumaMultiplosDe5(objetoMatriz) {
	let multiplos = 0
    for (let row = 0; row < objetoMatriz.length; row++) {
		for (let column = 0; column < objetoMatriz[row].length; column++) {
			if(objetoMatriz[row][column] % 5 === 0){
				multiplos = multiplos + objetoMatriz[row][column];
			}
		}
	}
	return multiplos
}

console.table(matrix);
/* console.log(sumaMultiplosDe5(matrix)); */


// C. Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es impar.

function sumatoriaMatrizPar(objetoMatriz) {
	function sumarTodo(){
		let sumatoria = 0
		for (let row = 0; row < objetoMatriz.length; row++) {
			for (let column = 0; column < objetoMatriz[row].length; column++) {
				sumatoria = sumatoria + objetoMatriz[row][column];
			}
		}
		return sumatoria
	}
	sumarTodo()
	return Boolean(sumarTodo() % 2 !== 0)
}

/* console.log(sumatoriaMatrizPar(matrix)) */

// D. Crear una función que retorne la suma de las diagonales de la matriz.

function sumatoriaDiagonales(objetoMatriz) {
	let diagonalDesc = 0
	let diagonalAsc = 0
    for (let row = 0; row < objetoMatriz.length; row++) {
		for (let column = 0; column < objetoMatriz[row].length; column++) {
			if (row === column){
				diagonalDesc = diagonalDesc + objetoMatriz[row][column]
			}
			if (row + column === objetoMatriz.length - 1){
				diagonalAsc = diagonalAsc + objetoMatriz[row][column]
			}
		}
	}
	return (diagonalDesc + diagonalAsc)
}

console.log(sumatoriaDiagonales(matrix)); 