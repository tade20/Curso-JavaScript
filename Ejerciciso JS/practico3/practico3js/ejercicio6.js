var person = new Object();
person = prompt("Introduce tus datos");


var numVocales;

for (i = 0; i < 10; i++) { 

    var vocal;

    if (i = 0){
        vocal = "a";
    }
    else if (i = 1){
        vocal = "e";
    }
    else if (i = 2){
        vocal = "i";
    }
    else if (i = 3){
        vocal = "o";
    }
    else if (i = 4){
        vocal = "u";
    }
    else if (i = 5){
        vocal = "A";
    }
    else if (i = 6){
        vocal = "E";
    }
    else if (i = 7){
        vocal = "I";
    }
    else if (i = 8){
        vocal = "O";
    }
    else if (i = 9){
        vocal = "U";
    }

    var aux = person.indexOf(vocal);

    if(aux != -1){
        numVocales++;
    }

}


console.log(numVocales);