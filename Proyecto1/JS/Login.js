function usuario (CI, Nombre, Apellido, Email, Pass, lugarnac){
    this.CI = CI;
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Email = Email;
    this.Pass = Pass;
    this.lugarnac = lugarnac;
}
var usr1 = new usuario('34859203','Jorge','Martinez','jorgemar@gmail.com','dnqw123','Canelones');
var usr2 = new usuario('38204849','Juan','Perez','juanpe@gmail.com','juandsja23','Durazno');
var usr3 = new usuario('59355970','Rodrigo','Franca','rofra@gmail.com','rofaqr93','Artigas');


var usrs = [usr1, usr2, usr3];
 function Correo (event){
    var correo = document.getElementById('Email1').value;
    caracter1 = correo.indexOf("@");
    caracter2 = correo.indexOf(".");
    if (caracter1 < 1 || ( caracter2 - caracter1 < 2 )||correo===""){
        alert("correo invalido");
     }else{
         alert("correo valido");
       }
}