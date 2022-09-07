const ORDER_ASC_BY_COST = "$$";
const ORDER_DESC_BY_COST = "$";
const ORDER_BY_SOLD_COUNT = "Rel.";
let minCost = undefined;
let maxCost = undefined;

const category = localStorage.getItem("catID") //*guardamos el id de cada cat en el local storage con la variabl category
const url = "https://japceibal.github.io/emercado-api/cats_products/"+ category +".json" //* para acceder a la data de cada json accedemos a la url con el id de cat

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url).then((result) => {
        if (result.status === "ok"){
            catInfo = result.data.products;
            catname = result.data.catName
            showCatProducts(catInfo)

            document.getElementById("categoryname").innerHTML=catname //* traemos el id de donde se va a mostrar el contenido
         
        }
    })
    
  
    });

  

    function showCatProducts(array){ 

        let productapend = ""
       const catCont = document.getElementById('product-container')
              
       for (let catProduct of array){

        if (((minCost == undefined) || (minCost != undefined && parseInt(catProduct.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(catProduct.cost) <= maxCost))){

                    productapend += `
                <div class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src="${catProduct.image}" alt="${catProduct.description}" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${catProduct.name} - ${catProduct.currency} ${catProduct.cost}</h4>
                                <small class="text-muted">${catProduct.soldCount} productos</small>
                            </div>
                            <p class="mb-1">${catProduct.description}</p>
                        </div>
                    </div>
                </div>
                `
            }}
        
           catCont.innerHTML=productapend
        } 
        

        

        document.getElementById("clearRangeFilter").addEventListener("click", function(){
            document.getElementById("rangeFilterCountMin").value = "";
            document.getElementById("rangeFilterCountMax").value = "";
    
            minCost = undefined;
            maxCost = undefined;
    
            showCatProducts(catInfo);
        });

       
        document.getElementById("sortBySoldCount").addEventListener("click", function(){
            sortProducts(ORDER_BY_SOLD_COUNT, catInfo);
        });

        document.getElementById("sortAsc").addEventListener("click", function(){
            sortProducts(ORDER_ASC_BY_COST, catInfo);
        });

        document.getElementById("sortDesc").addEventListener("click", function(){
            sortProducts(ORDER_DESC_BY_COST, catInfo);
        });

        function sortProducts(criteria, array){
        let result = [];
            if (criteria === ORDER_ASC_BY_COST)
            {
                result = array.sort(function(a, b) {
                    if ( a.cost < b.cost ){ return -1; }
                    if ( a.cost > b.cost ){ return 1; }
                    return 0;
                });
            }else if (criteria === ORDER_DESC_BY_COST){
                result = array.sort(function(a, b) {
                    if ( a.cost > b.cost ){ return -1; }
                    if ( a.cost < b.cost ){ return 1; }
                    return 0;
                });
            }else if (criteria === ORDER_BY_SOLD_COUNT){
                result = array.sort(function(a, b) {
                    let aCount = parseInt(a.soldCount);
                    let bCount = parseInt(b.soldCount);
        
                    if ( aCount > bCount ){ return -1; }
                    if ( aCount < bCount ){ return 1; }
                    return 0;
                });
            }
        
            showCatProducts(result);
        };

        document.getElementById("rangeFilterCount").addEventListener("click", function(){
         
            minCost = document.getElementById("rangeFilterCountMin").value;
            maxCost = document.getElementById("rangeFilterCountMax").value;
    
            if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
                minCost = parseInt(minCost);
            }
            else{
                minCost = undefined;
            }
    
            if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
                maxCost = parseInt(maxCost);
            }
            else{
                maxCost = undefined;
            }
    
            showCatProducts(catInfo);
        });
       