var numero = prompt("Ingrese numero que quiere saber sus divisores");
parseInt(numero);
var total=1;
for (let i = 0; i <= numero; i++) {
    if(numero%i === 0){
        console.log(i);
    }
    
}