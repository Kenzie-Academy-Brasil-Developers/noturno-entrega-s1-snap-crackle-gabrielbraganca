// Seu código vai aqui



 function snapCrackle (maxValue){
    let texto = "__";

for (let counter = 1; counter <= maxValue; counter++){
   
    if (counter % 5 == 0 && counter % 2 !=0){ 
        texto = texto + " SnapCrackle ";
    } else if( counter % 2 != 0){
        texto = texto + " Snap ";
    } else if(counter % 5 == 0){
        texto = texto + " Crackle";
    } else {texto = texto + counter}
    
    if(maxValue != counter){ 
        texto = texto + ",";
    } else {
        texto = texto + "__";
    }
}

return texto
}

console.log(snapCrackle(12)) 




