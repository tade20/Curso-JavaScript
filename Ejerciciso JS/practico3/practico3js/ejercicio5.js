var numero = prompt("Ingrese numero que quiere saber sus divisores");
parseInt(numero);
var numero2 = prompt("Ingrese otro numero que quiera saber sus divisores");
var total=1;
for (let i = 0; i <= numero; i++) {
    if(numero%i === 0 && numero2%i === 0){
        console.log(i);
    }
    
}