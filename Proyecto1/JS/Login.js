var listaUsuario = [];
function Usuario(CI, nombre, apellido, email, contra, lugar){
    this.CI = CI;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.contra = contra;
    this.lugar = lugar;

}
var boton = document.getElementById("registrarUsu");
boton.addEventListener('click', validacion);
function validacion(){
    var CI1 = document.getElementById('cedula2').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('Email1').value;
    var contra1 = document.getElementById('Password1').value;
    var contra2 = document.getElementById('Password2').value;
        if (CI1 == "") {
        alert("Debe ingresar una cedula");
    }
            else if (CI1.length != 7 && CI1.length != 8 ) {
                alert("La cedula debe contener 8 digitos");
        
    } 

    if (nombre == "") {
        alert("Debe ingresar un nombre");
        
    }

    if (apellido == "") {
        alert("Ingrese su apellido");
        
    }

    caracter1 = correo.indexOf("@");
    caracter2 = correo.indexOf(".");
    if (caracter1 < 1 || (caracter2 - caracter1 < 2) || correo === "") {
        alert("No es una Direccion de Correo");
    }
   
    if (contra1 == "") {
        alert("Debe ingresar una Contraseña");
        
    }
    if (contra1 != contra2) {
        alert("Las Contraseñas no coinciden");

    }
    let userExsit, usrData;
    
    guardarUsr();
    listaUsuario.forEach(element => {
        if(CI1 == element.CI){
            
            document.forms['registro'].reset();
            alert("El usuario ya existe");
        } 

    });
    
    listaUsuario.push(guardarUsr());
     console.log(listaUsuario);
     document.forms['registro'].reset();
    
}
function guardarUsr(){
    var datoUsr = {
        CI : document.getElementById('cedula2').value,
        nombre : document.getElementById('nombre').value,
        apellido : document.getElementById('apellido').value,
        email : document.getElementById('Email1').value,
        contra : document.getElementById('Password1').value,
        lugar : document.getElementById('lugar').value
};
    return datoUsr;
}
var boton2 = document.getElementById('Ingresar');
boton2.addEventListener('click', Login );
function Login(){
    var CI2 = document.getElementById('Cedula1').value
    var contra3 = document.getElementById('pass1').value

    listaUsuario.forEach(element =>{
        if(CI2 == element.CI && contra3 == element.contra){
            window.location.href="menu.html";
        } else{
            document.forms['Log'].reset();
            console.log("El usuario no existe");
        }
    })
}




