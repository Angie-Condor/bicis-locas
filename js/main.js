function validateForm(){
	/* Escribe tú código aquí */
  var name = document.getElementById('name');
  var lastname = document.getElementById('lastname');
  var email = document.getElementById('input-email');
  var password = document.getElementById('input-password');
  var requeridos = document.getElementsByClassName('form-control');
  var bicicleta = document.getElementById('bicicleta');
  var twitter = document.getElementById('input-social');
  var letras = /^[a-zA-Zñá-ú+\s]*$/;
  var letra1Mayus = /^[A-Z]{1}/;
  var formatoEmail = /\S+@\S+\.\S+/;

  if (requeridos[0].value == "" || requeridos[1].value == "" || requeridos[2].value == "" || requeridos[3].value == "" || bicicleta.value == "0"){
    alert ("Error:\n Debe llenar los 5 primeros campos obligatoriamente") ;
  } else if(name.value.search(letras) || lastname.value.search(letras)){
    alert ("Error:\n Debe ingresar en el Nombre y/o Apellido letras de la A a la Z.") ;
  } else if(name.value.search(letra1Mayus) || lastname.value.search(letra1Mayus)){
      alert ("Error:\n Debe ingresar en el Nombre y/o Apellido la primera letra con mayúscula.") ;
  } else if(email.value.search(formatoEmail)){
      alert ("Error:\n Debe ingresar un e-mail válido.") ;
  } else if (password.value == "password" || password.value == "123456" || password.value == "098754") {
      alert("Error:\n No puede usar esa palabra como password.");
  } else if (password.value.length < 6) {
      alert("Error:\n Password debe tener como mínimo 6 caracteres.");
  } else {
      alert("Los datos son correctos. \n Gracias.");
  }
}
