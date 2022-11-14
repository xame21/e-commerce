(function () {

  forms = document.querySelectorAll('.needs-validation')
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()

        }
        form.classList.add('was-validated')
        let email = document.getElementById("emailuserlog")
        localStorage.setItem("username", email.value)
      }, false)
    })
})()
