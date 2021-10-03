const completeName = document.getElementById("completeName");
const email = document.getElementById("email");
const cardNumber = document.getElementById("cardNumber");
const date = document.getElementById("date");
const cvv = document.getElementById("ccv");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const errors = []  
  if(completeName.value.length < 6){      
      errors.push("Nombre completo")
  }

  if(cvv.value.length < 3){
      errors.push("CVV")
  }

  if(cardNumber.value.length < 10) errors.push("Card number")
  
  if(errors.length > 0) alert(`Por favor verifica estos campos : ${errors}`)
  else{
      alert("Producto(s) comprados")
      localStorage.removeItem('cart')
      $.setCartLength()
      location.href = "./index.html"
  }
  
});
