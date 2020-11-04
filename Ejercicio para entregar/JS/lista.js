var listaComida =[
    ["Fruta","Manzana","Banana","Frutilla","Melón"],
    ["Verduras","Tomate","Cebolla","Morrón","Ajo"],
    ["Carne","Asado","Pulpón","Picada","Corazón"]
   ]
function tituloTabla(){
    var variable1 = listaComida.length;
    var variable2 = listaComida[1].length;
    var variable3 = '<tr>';
    for(let i = 0; i<variable1; i++){
        variable3 = variable3 + '<th>'+ listaComida[i][0]+ '</th>';
    }
    variable3 = variable3 + '</tr>';
    document.getElementById("listacomida-th").innerHTML = variable3;

}
function listaTabla(){
    var variable1 = listaComida.length;
    var variable2 = listaComida[1].length;
    var variable3 = ' ';
    for(let i = 1; i < variable2; i++){
        variable3 = variable3 + '<tr>';
        for(let h = 0; h < variable1; h++){
            variable3 = variable3 + '<td>' + listaComida[h][i] + '</td>';
        }
        variable3 = variable3 + '</tr>';
    }
    document.getElementById("listacomida-tb").innerHTML = variable3;
}