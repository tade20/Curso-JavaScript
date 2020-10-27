var numero = prompt("Ingrese numero a factorizar");
parseInt(numero);
var total=1;
for (let i = 1; i <= parseInt(numero); i++) {
    total = total * i;
}
console.log(total);