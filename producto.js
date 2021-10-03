const urlParams = $.getUrlParams();
const param = urlParams.get("product");

const productContent = document.querySelector(".product-detail");
const store = {
  quantity: 1,
};

const addCart = (data) => {  
  if(localStorage.getItem('cart')){
      const cart = JSON.parse(localStorage.getItem('cart'))
      cart.push(data)
      localStorage.setItem('cart',JSON.stringify(cart))
  }else{
    const cartItems = []
    cartItems.push(data)
    localStorage.setItem('cart',JSON.stringify(cartItems))
  }

  $.setCartLength()
};

$.getProducts().forEach((data) => {
  if (data.name == param) {
    productContent.innerHTML = `
            <img  src="${data.image}" />
            <div class="detail">
                <div class="price">
                    <h3>${data.name}</h3>
                    <h5>$ ${data.price}</h5>
                </div>
                <div class="action">
                    <button id="add">+</button>
                    <label id="quantity">${store.quantity}</label>
                    <button id="dis">-</button>
                    <button id="addCart">Agregar</button>
                </div>                
            </div>
        `;
  }
});

const add = document.getElementById("add");
const dis = document.getElementById("dis");
const addItemCart = document.getElementById("addCart");

if (add) {
  add.addEventListener("click", () => {
    store.quantity++;
    document.getElementById("quantity").innerHTML = store.quantity;
  });

  dis.addEventListener("click", () => {
    if (store.quantity > 1) {
      store.quantity--;
      document.getElementById("quantity").innerHTML = store.quantity;
    }
  });

  addItemCart.addEventListener("click", () => {
    $.getProducts().forEach((data) => {
      if (data.name === param) {
        addCart({
          image: data.image,
          quantity: store.quantity,
          price:data.price
        });
      }
    });
  });
}
