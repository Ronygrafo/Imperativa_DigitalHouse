const altura = 1.3
const acompaniado = true

function puedeSubir(){
    if (altura >= 1.4 && altura <= 2){
       console.log('Puede Subir');
    } else if (altura >= 1.2 && acompaniado == true){
       console.log('Puede Subir Acompañado');
    } else {
       console.log('NO Puede Subir. ¡Pa la casa!');
    }
}
puedeSubir();