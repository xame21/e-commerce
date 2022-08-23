(function () {
        const forms = document.querySelectorAll('.needs-validation')
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
    