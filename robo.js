let matriz = [];
function crearMatrizNxM(filas, columnas) {
    for (let index = 0; index < filas; index++) {
      let array = [];
      for (let j = 0; j < columnas; j++) {
        array[j] = j + 1 + index * filas;
      }
      //matriz[index] = array;
      matriz.push(array);
    }
    return matriz;
  }

crearMatrizNxM(10,10)
console.table(matriz);

function sumarAscendente(){
    for (let i = 0; i < matriz.length; i++) {
        const element = matriz[i];
        //console.log(matriz[i]);
        for (let j = 0; j < matriz.length; j++) {
            const element = matriz[j];
            //console.log(matriz[i][j]); 
        }
        
    }
}

sumarAscendente(matriz)