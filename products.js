const categorys = document.getElementById("categorys");

$.getProducts().forEach((data) => {
  categorys.innerHTML += `
        <li><a href="productos.html?products=${data.category}">${data.category}</a></li>
    `;
});

const urlParams = $.getUrlParams()
const param = urlParams.get("products");

const productsContent = document.querySelector(".products");

if (param == null) {
  $.getProducts().forEach((data) => {
    productsContent.innerHTML += `
        <div class="card">  
            <img src="${data.image}"/>      
            <h4>${data.name}</h4>    
            <h5>$ ${data.price}</h5>    
            <a href="producto.html?product=${data.name}">Ver producto</a>
        </div>
        `;
  });
}

$.getProducts().forEach((data) => {
  if (data.category == param) {
    productsContent.innerHTML += `
    <div class="card">  
        <img src="${data.image}"/>      
        <h4>${data.name}</h4>    
        <h5>$ ${data.price}</h5>    
        <a href="producto.html?product=${data.name}">Ver producto</a>
    </div>
    `;
  }
});
