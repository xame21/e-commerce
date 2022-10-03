const prodInfID = localStorage.getItem("prodID")

const prod = "https://japceibal.github.io/emercado-api/products/"+ prodInfID +".json"

const prodopin = "https://japceibal.github.io/emercado-api/products_comments/"+ prodInfID +".json"

document.addEventListener("DOMContentLoaded", ()=>{
    getJSONData(prod).then((result) => {
            productInf = result.data;
            prodName = result.data.name;

            boxprodinfo.innerHTML += `
            <div> <h1>${productInf.name}</h1></div>
            <hr>
            <br>
            <h4><b>Precio</b></h4>
            <div>${productInf.currency}  ${productInf.cost}</div>
            <br>
            <h4><b>Descripción</b></h4>
            <div>${productInf.description}</div>
            <br>
            <h4><b>Categoría</b></h4>
            <div>${productInf.category}</div>
            <br>
            <h4><b>Cantidad de vendidos</b></h4>
            <div>${productInf.soldCount}</div>
            <br>
            <h4><b>Imágenes ilustrativas</b></h4>
            <div  class="row mb-4" id="imgprodcont"></div>
            
            `

            for(let imgprod of productInf.images){
                imgprodcont.innerHTML += `
               <div class="card mb-4" style="width: 15rem">
                <img class="card-img-top" src="${imgprod}"
                alt="">
               
                </div>
              
               `
              

            }
            getJSONData(prod).then((result) => {
              prodrelacion = result.data.relatedProducts;
              relprod.innerHTML += `
              
              <h4>Productos Relacionados</h4>
               
              <div class="row mb-4" id="relaprod"></div>`
              
              for(let prodsrel of prodrelacion){
                relaprod.innerHTML += `
               <div onclick="relID(${prodsrel.id})" class="card mb-4" style="width: 15rem">
               <img class="card-img-top" src="
                ${prodsrel.image}">
                </br>
                ${prodsrel.name}</div> 
                
                             
               `  } 
               
              })
            
   }
    );  
    

 getJSONData(prodopin).then((result)=>{
   productComm = result.data;
   
   for(let prodopi of productComm)
   boxcoments.innerHTML += ` 
   <div class="list-group">
   <div class="list-group">
 <div class="list-group-item">
    <div class="d-flex w-100 justify-content-between">
      <p class="mb-1"><b>${prodopi.user}</b> - ${prodopi.dateTime} 
      
      <span class="" id="stars">
      ${puntuacion (prodopi.score)}
    </span>
    
        </div>
    
    <p class="mb-1">${prodopi.description}</p>
   
  </div>
</div>
   `
    }

    
 )})


function val()
{
  if (trimAll(document.getElementById('textcomm').value) === '')
  {
     alert('CAMPO VACIO');
  }
} 

function trimAll(usuariopinion)
{
    while (usuariopinion.substring(0,1) == ' ')
    {
        usuariopinion = usuariopinion.substring(1, usuariopinion.length);
    }
    while (usuariopinion.substring(usuariopinion.length-1, usuariopinion.length) == ' ')
    {
        usuariopinion = usuariopinion.substring(0,usuariopinion.length-1);
    }
return usuariopinion
;

};

function puntuacion (star) {
  let a = "";
  
  for(let i = 0; i < 5; i++) {
    if(i<star) {
      a += `<span class="fa fa-star checked"></span>`
    } else {
      a += `<span class="fa fa-star"></span>`
    }
  }
  return a;
}
 
function relID(id) {
  localStorage.setItem("prodID", id);
  window.location = "product-info.html"
}

