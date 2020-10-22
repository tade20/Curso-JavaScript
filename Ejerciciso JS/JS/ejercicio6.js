var op1 = prompt("1) Oreo 1 peso/ 2) Kit Kat 1.50 pesos/ 3) Brownie 0.75 pesos/ 4) Menta Granizada 0.95 pesos");
if (op1 === "1"){
    document.write("El total de su compra es de 1 peso, el helado seleccionado fue el de Oreo");
}
else if(op1 === "2"){
    document.write("El total de su compra es de 1.50 pesos, el helado seleccionado fue el de Kit Kat");
}
else if (op1 === "3"){
    document.write("El total de su compra es de 0.75 pesos, el helado seleccionado fue el de Brownie");
}
else if (op1 === "4"){
    document.write("El total de su compra es de 0.95 pesos, el helado seleccionado fue el de Menta Granizada");
}
else{
    document.write("El helado seleccionado no existe");
}