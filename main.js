// cart handler lib
((window, document) => {
  const init = () => {
    let cartItems = {};
    const lib = {
      getCartItemsLength: () => {
        if (localStorage.getItem("cart")) {
          return JSON.parse(localStorage.getItem("cart")).length;
        } else {
          return 0;
        }
      },
      getCartItems: () => {
        return JSON.parse(localStorage.getItem("cart"));
      },
    };
    return lib;
  };

  if (typeof window.$ === "undefined") {
    window.$ = init();
  }
})(window, document);

const setCartLength = () => {
  const cart = document.getElementById("cart");
  if (window.$.getCartItemsLength() == 0) {
    cart.innerHTML = `<a> Cart (0) </a>`;
  } else {
    cart.innerHTML = `<a href="./cart-items.html"> Cart (${window.$.getCartItemsLength()}) </a>`;
  }
};

const insertProductsAtHome = () => {
  const elementInsert = document.querySelector(".products-home");
  if (elementInsert) {
    const products = window.$.getCartItems();
    products.pop();
    products.forEach((data, index) => {
      if (index > 2) return;
      elementInsert.innerHTML += `
      <div class="card">
        <img src="${data.image}"/>
        <h4>${data.name}</h4>
        <h5>${data.price}</h5>
        <a href="product.html?product=${data.name}">Ver producto</a>
      </div>
    `;
    });
  }
};

setCartLength();
insertProductsAtHome();
