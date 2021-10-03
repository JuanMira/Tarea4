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
      getProducts: () => {
        return JSON.parse(localStorage.getItem("products"));
      },
      getUrlParams: () => {
        const params = window.location.search;
        return new URLSearchParams(params);
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
    const products = $.getProducts();
    products.forEach((data, index) => {
      if (index > 2) return;
      elementInsert.innerHTML += `
      <div class="card">        
        <h4>${data.category}</h4>        
        <a href="productos.html?products=${data.category}">Ver productos</a>
      </div>
    `;
    });
  }
};

$.setCartLength = setCartLength

$.setCartLength()

insertProductsAtHome();
