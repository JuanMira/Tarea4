(() => {
  if (!localStorage.getItem("products")) {
    const cartItems = [
      {
        name: "IPhone",
        price: 1200,
        category: "Telephone",
        image:
          "https://falabella.scene7.com/is/image/FalabellaCO/9722708_1?wid=800&hei=800&qlt=70",
        quantity: 1,
      },
      {
        name: "Laptop",
        price: 5000,
        category: "Computer",
        image:
          "https://icdn.dtcn.com/image/digitaltrends_es/185-xps-13-laptop-resized-2.jpg",
        quantity: 2,
      },
      {
        name: "Table",
        price: 200,
        category: "Domestic",
        image:
          "https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/table.jpg",
        quantity: 1,
      },
    ];

    localStorage.setItem("products", JSON.stringify(cartItems));
  }
})();
