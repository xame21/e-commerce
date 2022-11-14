const CART_INFO_USER = "https://japceibal.github.io/emercado-api/user_cart/25801.json"



document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_INFO_USER).then((result) => {
    cartinfo = result.data;

    for (let cartdata of cartinfo.articles) {
      cardtable.innerHTML += `<tr>
    <th scope="row"><img class="img-thumbnail w-auto" style="width: 150px;height: 80px;" src="${cartdata.image}"></th>
    
    <td class="w-auto">${cartdata.name}</td>
    
    <td class="w-auto">${cartdata.currency} <span id="costporuni">${cartdata.unitCost}</span></td>
    
    <td><input class="form-control w-auto" type="number" min=1 placeholder=0 id="cantidart" value="${cartdata.count}" oninput="unitCostPorCount(); unitCostPorCount1()"></td>
    


    <td class="w-auto" id=""> <span>${cartdata.currency}</span> <span id="subto">${cartdata.unitCost}</span></td>

   

    
  </tr>`




    }
    unitCostPorCount1()
  }
  )

});

function unitCostPorCount() {
  subto.innerHTML = "";
  let m1 = costporuni.innerText;
  let m2 = cantidart.value;
  let costoxuni = parseInt(m1);
  let cant1 = parseInt(m2);
  let productom = parseInt(costoxuni * cant1);
  subto.innerHTML += `
  ${productom}
  `




};

function unitCostPorCount1() {
  document.getElementById("sumasubtotales").innerHTML = "";

  let sumita = subto.innerText;
  let sumit1 = parseInt(sumita);
  sumasubtotales.innerHTML += `${sumit1}`
  sendType()
}





function sendType() {

  document.getElementById("costenvio").innerHTML = "";
  document.getElementById("enviopremium");
  document.getElementById("envioexpress");
  document.getElementById("enviostandard");

  let productop = sumasubtotales.innerHTML;

  let premium = 0.15
  let express = 0.07
  let standard = 0.05

  let premiump = parseInt(productop * premium)
  let expressp = parseInt(productop * express)
  let standardp = parseInt(productop * standard)


  if (enviopremium.checked) { costenvio.innerHTML += `${premiump}` };
  if (envioexpress.checked) { costenvio.innerHTML += `${expressp}` };
  if (enviostandard.checked) { costenvio.innerHTML += `${standardp}` };

  document.getElementById("totalall").innerHTML = "";

  let sumasub = sumasubtotales.innerHTML
  let sumaenvio = costenvio.innerHTML
  let sumasub1 = parseInt(sumasub)
  let sumaenvio1 = parseInt(sumaenvio)

  let sumenviosubt = parseInt(sumasub1 + sumaenvio1)
  totalall.innerHTML += `${sumenviosubt}`
}

(function () {

  forms = document.querySelectorAll('.needs-validation')
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        modalVal()
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();

        } else {
          event.preventDefault();
          terminarCompra()
        };
        form.classList.add('was-validated')

      }, false)
    })
})()

function modalVal() {
  if ((!transfer.checked) && (!tarjetacredito.checked)) {
    noselected.classList.add("is-invalid");
  } else {
    noselected.classList.remove("is-invalid");
    let formadepago = document.querySelectorAll(".pagotransfer, .pagotarjeta");
    for (pago of formadepago) {
      if ((!pago.disabled) && (pago.value.trim() == "")) {
        noselected.classList.add("is-invalid")
      }
    }
  }
}

function noHabilitar() {
  if ((tarjetacredito.checked)) {
    ncuenta.disabled = true;
    ntarjeta.disabled = false;
    nseguridad.disabled = false;
    ncaducidad.disabled = false;
    noselected.innerHTML = `
    Tarjeta de credito`
  }
  if ((transfer.checked)) {
    ntarjeta.disabled = true;
    nseguridad.disabled = true;
    ncaducidad.disabled = true;
    ncuenta.disabled = false;
    noselected.innerHTML = `
    Transferencia bancaria`
  }
}

function terminarCompra() {
  alertconfirmation.innerHTML =
    `<div class="alert alert-success alert-dismissible" style="z-index:99999999; role="alert">
  <div>Has comprado con exito!</div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
}

// function validateDireccion() {

//   document.querySelectorAll('#tarjetacredito, #ntarjeta, #nseguridad, #ncaducidad, #ncuenta, #enviocalle, #envionumero, #envioesquina,').forEach(input => {
//     if (input.value.trim() == '') {
//       input.setCustomValidity('error');
//     } else {
//       input.setCustomValidity('');
//     }
//   });

// }

// document.getElementById("checksend").required = true;