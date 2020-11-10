function usuario(CI, Nombre, Apellido, Email, Pass, lugarnac) {
    this.CI = CI;
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Email = Email;
    this.Pass = Pass;
    this.lugarnac = lugarnac;
}
var usr1 = new usuario('34859203', 'Jorge', 'Martinez', 'jorgemar@gmail.com', 'dnqw123', 'Canelones');
var usr2 = new usuario('38204849', 'Juan', 'Perez', 'juanpe@gmail.com', 'juandsja23', 'Durazno');
var usr3 = new usuario('59355970', 'Rodrigo', 'Franca', 'rofra@gmail.com', 'rofaqr93', 'Artigas');


var usrs = [usr1, usr2, usr3];

function validarEmail() {

    var correo = document.getElementById('Email1').value;
    caracter1 = correo.indexOf("@");
    caracter2 = correo.indexOf(".");
    if (caracter1 < 1 || (caracter2 - caracter1 < 2) || correo === "") {
        alert("No es una Direccion de Correo");
    }
    validarPass();
}

function validarPass() {

    var contra1 = document.getElementById('Password1').value;
    var contra2 = document.getElementById('Password2').value;
    
    if (contra1 != contra2) {
        alert("Las Contraseñas no coinciden");

    }
    
}




