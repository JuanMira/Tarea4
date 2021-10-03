const tableContent = document.getElementById('table-content')

let subtotal = 0;

$.getCartItems().forEach(data=>{
    subtotal +=  parseInt(data.price) * parseInt(data.quantity) 
    tableContent.innerHTML += `
        <tr>
            <td><img src="${data.image}"/></td>
            <td>${data.quantity}</td>
            <td>$ ${data.price}</td>
            <td>$ ${parseInt(data.price) * parseInt(data.quantity) }</td>
        </tr>
    `    
})


const tableFoot = document.querySelector('.subtotal').innerHTML =  `    
        <h4> Subtotal ${subtotal} </h4>
        <a href="./pago.html" class="button"> Pagar </a>
`