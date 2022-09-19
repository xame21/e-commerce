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
            </div>
            `

            for(let imgprod of productInf.images){
                imgprodcont.innerHTML += `
               <div class="card mb-4" style="width: 15rem">
                <img class="card-img-top" src="${imgprod}"
                alt="">
               
                </div>
              
               `
              

            }
                      
                          
            
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
      <p class="mb-1"><b>${prodopi.user}</b> - ${prodopi.dateTime} - ${prodopi.score} 
      
      <span id="star1" class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span></p>
      
    </div>
    
    <p class="mb-1">${prodopi.description}</p>
   
  </div>
</div>
   `

    }
    
 );
 

})
function val()
{
  if (trimAll(document.getElementById('textcomm').value) === '')
  {
     alert('Empty !!');
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


 


