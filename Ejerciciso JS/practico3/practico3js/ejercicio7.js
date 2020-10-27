var numero = prompt ("ingrese el numero");
parseInt(numero);

for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) {
        console.log("No es primo");
    }
    else{
        console.log("Es primo");
    }
    
}


