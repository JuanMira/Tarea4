const tableContent = document.getElementById("table-content");

let subtotal = 0;

const setCartItems = () => {
  $.getCartItems().forEach((data, index) => {
    subtotal += parseInt(data.price) * parseInt(data.quantity);
    tableContent.innerHTML += `
        <tr>
            <td><img src="${data.image}"/></td>
            <td>${data.quantity}</td>
            <td>$ ${data.price}</td>
            <td>$ ${parseInt(data.price) * parseInt(data.quantity)}</td>
            <td><button class="remove" id="${index}" onclick="remove(${index})">x</button></td>
        </tr>
    `;
  });
};

setCartItems();

const test = () => alert("test");

const tableFoot = (document.querySelector(".subtotal").innerHTML = `    
        <h4> Subtotal $ ${subtotal} </h4>
        <a href="./pago.html" class="button"> Pagar </a>
`);

const remove = (id) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(
      $.getCartItems().filter((element, index) => index !== parseInt(id))
    )
  );

  $.setCartLength();
  location.reload();
};
