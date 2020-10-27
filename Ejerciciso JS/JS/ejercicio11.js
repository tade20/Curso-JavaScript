var tarjeta = true;
var monto = prompt ("Ingrese el monto del pago");
if (parseInt(monto) > 100 && tarjeta===true){
    document.write("Gracias por pagar con crédito");
}
else if(parseInt(monto) > 100 && tarjeta===false ){
    document.write("Gracias por pagar con efectivo");
}
else if(parseInt(monto) < 100){
    document.write("Losiento no puedes pagar esta cuenta");
}