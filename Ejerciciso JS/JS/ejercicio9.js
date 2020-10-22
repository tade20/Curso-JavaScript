var op1 = prompt("1) Oreo 1 peso/ 2) Kit Kat 1.50 pesos/ 3) Brownie 0.75 pesos/ 4) Menta Granizada 0.95 pesos");
switch (op1){
    case "1":
        document.write("El total de su compra es de 1 peso, el helado seleccionado fue el de Oreo");
        break;
    case "2":
        document.write("El total de su compra es de 1.50 pesos, el helado seleccionado fue el de Kit Kat");
        break;
    case "3":
        document.write("El total de su compra es de 0.75 pesos, el helado seleccionado fue el de Brownie");
        break;
    case "4":
        document.write("El total de su compra es de 0.95 pesos, el helado seleccionado fue el de Menta Granizada");
        break;
    default:
        document.write("El helado seleccionado no existe");
}