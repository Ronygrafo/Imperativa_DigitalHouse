/* Se está realizando el desarrollo de una aplicación para control de gastos. Cada día,
el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.

Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día.
Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. */

let gastoMes =[
	[1135,2500,900,1600,2800,3650,1100],
	[1750,1890,1900,1300,898,1750,2800],
	[1700,1150,1690,1900,1770,4500,2560],
	[800,1250,1430,2100,1980,1270,950]
]

/* a)  Lo que nos solicitan es dar el total de gastos en una semana.
Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz.
Recordar que las matrices comienzan siempre en posición 0.*/

function sumarSemana(matrizMes,numSemana){
    let sumatoriaSemana = 0
        for (let i = 0; i < matrizMes[numSemana-1].length; i++) {
            sumatoriaSemana += matrizMes[numSemana-1][i];
        }
    return console.log(sumatoriaSemana);
}
//sumarSemana(gastoMes,0)
/* sumarSemana(gastoMes,1)
sumarSemana(gastoMes,2)
sumarSemana(gastoMes,3)
sumarSemana(gastoMes,4) */


/* b) La aplicación también tendrá una parte de estadísticas,
para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3,
acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0. */

/* let semanaIndex = 0
let diaIndex = 0
console.log(semanaIndex);
console.log(diaIndex); */

function encontrarDia(matrizMes,numDia){
    if (numDia>21){
        semanaIndex = 3
        diaIndex = numDia-22
    } else if(numDia>14 && numDia<=21){
        semanaIndex = 2
        diaIndex = numDia-15
    } else if(numDia>7 && numDia<=14){
        semanaIndex = 1
        diaIndex = numDia-8
    } else{
        semanaIndex = 0
        diaIndex = numDia-1
    }
return(console.log(matrizMes[semanaIndex][diaIndex]))
}

encontrarDia(gastoMes,28)
encontrarDia(gastoMes,21)
encontrarDia(gastoMes,14)
encontrarDia(gastoMes,7)


/* c) Por último, es necesario tener el total de gastos realizados en el mes.
Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
 */