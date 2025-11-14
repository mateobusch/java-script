let form= document.querySelector("form")
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let fullName= document.querySelector("#fullName")
  let email= document.querySelector("#email")
  let phone= document.querySelector("#phone")
  let password= document.querySelector("#password")
  let rePassword= document.querySelector("#rePassword")
 
  if (fullName.value== ""){
   let invalidName= document.querySelector(".invalid-feedback.fullName")
   invalidName.innerHTML= "<p>Debe llenar el campo</p>";
   invalidName.style.display = "block";
}
   
  else if  (email.value== ""){
   let invalidEmail= document.querySelector(".invalid-feedback.email")
   invalidEmail.innerHTML= "<p>Debe llenar el campo</p>";
   invalidEmail.style.display = "block";
}
 else if (phone.value== ""){
   let invalidPhone= document.querySelector(".invalid-feedback.phone")
   invalidPhone.innerHTML= "<p>Debe llenar el campo</p>";
   invalidPhone.style.display = "block";
}
else if (phone.value.length < 8) {
  let invalidPhone = document.querySelector(".invalid-feedback.phone");
  invalidPhone.innerHTML = "<p>El teléfono debe tener al menos 8 caracteres</p>";
  invalidPhone.style.display = "block";
}
 else if (password.value== ""){
   let invalidPassword= document.querySelector(".invalid-feedback.password")
   invalidPassword.innerHTML= "<p>Debe llenar el campo</p>";
   invalidPassword.style.display = "block";
}
else if (password.value.length < 3) {
  let invalidPassword = document.querySelector(".invalid-feedback.password");
  invalidPassword.innerHTML = "<p>La contraseña debe tener al menos 3 caracteres </p>";
  invalidPassword.style.display = "block";
}
  else if (rePassword.value== ""){
   let invalidRepassword= document.querySelector(".invalid-feedback.rePassword")
   invalidRepassword.innerHTML= "<p>Debe llenar el campo</p>";
   invalidRepassword.style.display = "block";
}
else if (rePassword.value!=password.value) {
  let invalidRepassword = document.querySelector(".invalid-feedback.rePassword");
  invalidRepassword.innerHTML = "<p>Las contraseñas deben coincidir</p>";
  invalidRepassword.style.display = "block";
}
else{
    this.submit()
}

});











