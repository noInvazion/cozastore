function decreaseQuantity(button) {
    var quantityElement = button.parentElement.querySelector(".quantity-button");
    var quantity = parseInt(quantityElement.innerHTML);
  
    var priceElement = button.parentElement.parentElement.previousElementSibling;
    var price = parseFloat(priceElement.innerHTML.replace("$", ""));
  
    var totalElement = button.parentElement.parentElement.nextElementSibling;
    var total = parseFloat(totalElement.innerHTML.replace("$", ""));
  
    if (quantity > 0) {
      quantity--;
      total -= price;
    } else if (quantity === 0) {
      total = 0;
    }
  
    quantityElement.innerHTML = quantity;
    totalElement.innerHTML = "$" + total.toFixed(2);
  }
  
  function increaseQuantity(button) {
    var quantityElement = button.parentElement.querySelector(".quantity-button");
    var quantity = parseInt(quantityElement.innerHTML);
  
    var priceElement = button.parentElement.parentElement.previousElementSibling;
    var price = parseFloat(priceElement.innerHTML.replace("$", ""));
  
    var totalElement = button.parentElement.parentElement.nextElementSibling;
    var total = parseFloat(totalElement.innerHTML.replace("$", ""));
  
    quantity++;
    total += price;
    quantityElement.innerHTML = quantity;
    totalElement.innerHTML = "$" + total.toFixed(2);
  }
  


// function updateTotal() {
//     var total = 0;
//     var prices = document.querySelectorAll('td:nth-child(2)'); // Select all price cells

//     for (var i = 0; i < prices.length; i++) {
//         var price = parseFloat(prices[i].innerHTML.substr(1)); // Extract price value (without $ sign)
//         var quantity = parseInt(prices[i].nextElementSibling.querySelector('.quantity').innerHTML);
//         var itemTotal = price * quantity;
//         total += itemTotal;
//     }

//     document.getElementById('cart-total').innerHTML = total.toFixed(2);
// }

function checkout() {
    
}
