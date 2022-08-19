
const url = "https://japceibal.github.io/emercado-api/cats_products/101.json"

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url).then((result) => {
        if (result.status === "ok"){
            ProductsArray = result.data.products
            showProducts()
         
        }
    })
    });

    

    function showProducts(){

       const productCont = document.getElementById('product-container')
                for (let product of ProductsArray){
                    productCont.innerHTML += `
                <div class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost}</h4>
                                <small class="text-muted">${product.soldCount} productos</small>
                            </div>
                            <p class="mb-1">${product.description}</p>
                        </div>
                    </div>
                </div>
                `
            }
        
           
        } 
    