const CART_INFO_USER = "https://japceibal.github.io/emercado-api/user_cart/25801.json"



document.addEventListener("DOMContentLoaded", function(e){
getJSONData(CART_INFO_USER).then((result) => {
    cartinfo = result.data;
    
   for (let cartdata of cartinfo.articles) {
    cardtable.innerHTML += `<tr>
    <th scope="row"><img class="img-thumbnail w-auto" style="width: 150px;height: 80px;" src="${cartdata.image}"></th>
    
    <td class="w-auto">${cartdata.name}</td>
    
    <td class="w-auto">${cartdata.currency} <span id="costporuni">${cartdata.unitCost}</span></td>
    
    <td><input class="form-control w-auto" type="number" placeholder="0" id="cantidart" value="${cartdata.count}" oninput="unitCostporcount()"></td>
    


    <td class="w-auto" id=""> <span>${cartdata.currency}</span> <span id="subto"></span></td>

   

    
  </tr>`
  
  
}}
)
});

function unitCostporcount(){
  subto.innerHTML ="";
  let m1 = costporuni.innerText;
  let m2 = cantidart.value;
  let costoxuni = parseInt(m1);
  let cant1 = parseInt(m2);
  let producto = parseInt(costoxuni*cant1);
  subto.innerHTML+=`
  ${producto}
  `
}