// Retrieve data from localStorage
let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
let purchasesPerCustomer = JSON.parse(localStorage.getItem('purchasesPerCustomer')) || [];
let shoppingCartContent=document.querySelector(".shopping-cart__content");
let checkoutContent=document.querySelector(".checkout__content");
const emptyCheckout= document.querySelector(".empty__checkout");
const freeShipping=200;

checkEmptyCart();
function checkEmptyCart(){
  if(cartData.length===0 || localStorage.getItem("cartData")===null){//the form is subbmitted now
    checkoutContent.style.display="none";
    emptyCheckout.style.display="block";
    localStorage.setItem('checkoutSubmitted', 'false');
  }
  else{    
    checkoutContent.style.display="block";
    emptyCheckout.style.display="none";
  }
};
displayPurchaseProduct()
function displayPurchaseProduct(){
    let printRow="";
    for(let i=0; i<cartData.length;i++){
        let orginalPrice="";
        if(cartData[i].badge==="sale")//or  if(cartData[i].final_price!==cartData[i].price)
            orginalPrice=`<del class="product--price-marked">$${cartData[i].price}</del>`
        else
        orginalPrice=`$${cartData[i].price}`

        printRow+=
        `
    <tr>
    <td class="d-flex align-items-center">
      <a class="cart__table-figure" href="shop.html">
        <img src="${cartData[i].image}" alt="" height="141">
      </a>
      <a class="cart__table-link" href="shop.html">${cartData[i].name}</a>
    </td>
    <td>${orginalPrice}</td>
    <td>$${cartData[i].final_price}</td>    
    <td>${cartData[i].count}</td>
    <td>$${cartData[i].total}</td>
    </tr>
  `
}
shoppingCartContent.innerHTML=printRow;  
}
function getTotalPrice(){
  const totalPrice = cartData.reduce(function (previousElement, currentElement) {
      return previousElement + currentElement.total;
    }, 0);
  return totalPrice;
}
displayCartTotal();
function displayCartTotal(){
  let shipping="Free"; let totalShipping=getTotalPrice();const shippingCost=10;
  if(getTotalPrice()<freeShipping){
    shipping='$10';
    totalShipping=getTotalPrice()+shippingCost;
  }
  document.querySelector(".cart__totals__body").innerHTML=
  `
  <tr>
    <td>Cart Subtotal</td>
    <td>$${getTotalPrice()}</td>
  </tr>
  <tr class="mt-4">
    <td>Shipping [Free shipping for orders $200 and above]</td>
    <td>${shipping}</td>
  </tr>
  <tr class="mt-4">
    <td>Total</td>
    <td>$${totalShipping}</td>
  </tr>
  `
}
