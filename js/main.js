function validateForm(){
	/* Escribe tú código aquí */
  var name = document.getElementById('name');
  var lastname = document.getElementById('lastname');
  var email = document.getElementById('input-email');
  var password = document.getElementById('input-password');
  var requeridos = document.getElementsByClassName('form-control');
  var twitter = document.getElementById('input-social');
  var letras = /[A-Z]+[a-z]*/;

  if (requeridos[0].value == "" || requeridos[1].value == "" || requeridos[2].value == "" || requeridos[3].value == ""){
    alert ("Error: Debe llenar los 4 campos obligatoriamente") ;
  }

  if(name.value != letras.value){
    alert ("Error: Debe ingresar letras de la a A a la Z.") ;
  }

  if(lastname.value != letras.value){
    alert ("Error: Debe ingresar letras de la a A a la Z.") ;
  }
}
