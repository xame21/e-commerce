//*function showAlertSuccess() {
   //* document.getElementById("alert-success").classList.add("show");
//*}

//*function showAlertError() {
   //* document.getElementById("alert-danger").classList.add("show");/
//*}

//*const btn = document.getElementById("buttonloginthe")
//*btn.addEventListener('click', checkForm)

//*function clean(array){
   //* array.forEach(input => {
      //*  input.value = ""
        //*input.checked = false
    //*});
//*}
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
    //Compruebo que no haya input vacios
    //for(let i of array){
      //  if((i.value == "")) {
        //    clean(array);
          //  showAlertError()
            //return
        //}
        //}
    
    //Compruebo que contraseñas y checkbox se adecueen a los solicitado
   // if((pass1.length < 6) || (pass1 !== pass2) || (!check)){
        //    clean(array);
          //  showAlertError()
            //return
        //}
    //showAlertSuccess()

    //}