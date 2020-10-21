var n1 = prompt ("Escriba el primer numero");
var n2 = prompt ("Escriba el segundo numero");
var n3 = prompt ("Escriba un tercer numero");
if(parseInt(n1)>parseInt(n2) && parseInt(n1)>parseInt(n3)){
    document.write("El numero mayor es: " + n1);

}
else if (parseInt(n2)>parseInt(n1) && parseInt(n2)>parseInt(n3)) {
    document.write("El numero mayor es: " + n2);

}else{
    document.write("El numero mayor es: " + n3);
}