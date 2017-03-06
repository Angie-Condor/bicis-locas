function validateForm(){
	/* Escribe tú código aquí */
  var name = document.getElementById('name');
  var lastname = document.getElementById('lastname');
  var email = document.getElementById('input-email');
  var password = document.getElementById('input-password');
  var requeridos = document.getElementsByClassName('form-control');
  var twitter = document.getElementById('input-social');
  var letras = /[A-Z]+[a-z]*/;
  var letra1Mayus = /^[A-Z]{1}/;
  var formatoEmail = /\S+@\S+\.\S+/;

  if (requeridos[0].value == "" || requeridos[1].value == "" || requeridos[2].value == "" || requeridos[3].value == ""){
    alert ("Error:\n Debe llenar los 4 campos obligatoriamente") ;
  }

  if(name.value != letras.value){
    alert ("Error:\n Debe ingresar letras de la a A a la Z.") ;
  } else if(lastname.value != letras.value){
      alert ("Error:\n Debe ingresar letras de la a A a la Z.") ;
  } else if(name.value != letra1Mayus.value){
      alert ("Error:\n Debe ingresar la primera letra de su nombre con mayúscula.") ;
  } else if(lastname.value != letra1Mayus.value){
      alert ("Error:\n Debe ingresar la primera letra de su apellido con mayúscula.") ;
  } else if(email.value != formatoEmail.value){
      alert ("Error:\n Debe ingresar un e-mail válido.") ;
  } else if (password.value == "password" || password.value == "123456" || password.value == "098754") {
      alert("Error:\n No puede usar esa palabra como password.");
  } else if (password.value.length < 6) {
      alert("Error:\n Ingresa como mínimo 6 caracteres.");
  }
}
