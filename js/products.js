
const url = "https://japceibal.github.io/emercado-api/cats_products/101.json"

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url).then((result) => {
        if (result.status === "ok"){
            carProductsArray = result.data.products
            showCarProducts()
         
        }
    })
    });

    

    function showCarProducts(){

        
       const carCont = document.getElementById('product-container')
                for (let carProduct of carProductsArray){
                    carCont.innerHTML += `
                <div class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src="${carProduct.image}" alt="${carProduct.description}" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${carProduct.name} - ${carProduct.currency} ${carProduct.cost}</h4>
                                <small class="text-muted">${carProduct.soldCount} productos</small>
                            </div>
                            <p class="mb-1">${carProduct.description}</p>
                        </div>
                    </div>
                </div>
                `
            }
        
           
        } 
        
    