const conteoHasta = 100
function digitalHouse(num1,num2){
    
    for (let i = 1; i <= (conteoHasta); i++) {
        
        if (i % num1 === 0 && i % num2 === 0){
            console.log('Digital-House');
        } else if (i % num1 === 0){
            console.log('Digital')
        } else if (i % num2 === 0){
            console.log('House')
        } else {
        console.log(i)}
    }
}
digitalHouse(3,7)