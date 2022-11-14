document.getElementById('formEmail').value = localStorage.getItem('username');

document.getElementById('formNombre1').value = localStorage.getItem('formName');

document.getElementById('formApellido1').value = localStorage.getItem('formLastname');

document.getElementById('formTel').value = localStorage.getItem('formPhone');

document.getElementById('formNombre2').value = localStorage.getItem('formName1');

document.getElementById('formApellido2').value = localStorage.getItem('formLastname1');

(function () {

  forms = document.querySelectorAll('.needs-validation')
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()

        }
        form.classList.add('was-validated')
        let formNombre = document.getElementById("formNombre1")
        localStorage.setItem("formName", formNombre.value)
        let formApellido = document.getElementById("formApellido1")
        localStorage.setItem("formLastname", formApellido.value)
        let formTel = document.getElementById("formTel")
        localStorage.setItem("formPhone", formTel.value)
        let formNombre1 = document.getElementById("formNombre2")
        localStorage.setItem("formName1", formNombre1.value)
        let formApellido1 = document.getElementById("formApellido2")
        localStorage.setItem("formLastname1", formApellido1.value)
      }, false)
    })
})()


// function val() {
//   if (trimAll(document.getElementById('formApellido1','formNombre1','formTel' ).value) === '') {
//     alert('CAMPO VACIO');
//   }
// }

// function trimAll(usuariopinion) {
//   while (usuariopinion.substring(0, 1) == ' ') {
//     usuariopinion = usuariopinion.substring(1, usuariopinion.length);
//   }
//   while (usuariopinion.substring(usuariopinion.length - 1, usuariopinion.length) == ' ') {
//     usuariopinion = usuariopinion.substring(0, usuariopinion.length - 1);
//   }
//   return usuariopinion
//     ;

// };