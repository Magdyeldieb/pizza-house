// Retrieve data from localStorage
let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
if (localStorage.getItem('checkoutSubmitted') === null)
  localStorage.setItem('checkoutSubmitted', 'false');
const cartContent = document.querySelector(".cart__content");
const emptyCart=document.querySelector(".empty__cart");
const stepperUp = document.querySelector(".stepper__arrow.up");
const stepperDown = document.querySelector(".stepper__arrow.down");
const cartTableBody = document.querySelector(".cart__table-body");
const cartTotalPrice=document.querySelector(".cart__total-price");
const max = 20;
const min = 1;
checkEmptyCart();
function getTotalPrice(){
    const totalPrice = cartData.reduce(function (previousElement, currentElement) {
        return previousElement + currentElement.total;
      }, 0);
    cartTotalPrice.innerHTML=`$${totalPrice}.00`;      
    return totalPrice;
}
displayPurchaseProduct();
getTotalPrice();
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
    <td>
      <div class="cart__table-stepper">
        <div class="stepper">
          <div class="stepper__input" value="1" min="1" max="20"  data-name="${cartData[i].name}">${cartData[i].count}</div>
          <span class="stepper__arrow up" onclick="stepperUpFunc('${cartData[i].name}')">+</span>
          <span class="stepper__arrow down" onclick="stepperDownFunc('${cartData[i].name}')">-</span>
        </div>
      </div>
    </td>
    <td>$${cartData[i].total}</td>
    <td><span class="trash-icon fa fa-trash"onclick="deleteProduct('${cartData[i].name}')"></span></td>
    </tr>
  `
getTotalPrice();
}
cartTableBody.innerHTML=printRow;  
}

function stepperUpFunc(name) {
    const itemIndex = cartData.findIndex(item => item.name === name);
    const stepperInput = document.querySelector(`[data-name="${name}"]`);
    if (parseInt(stepperInput.textContent) >= max) {
      stepperInput.textContent = max;
    } else {
      stepperInput.textContent = parseInt(stepperInput.textContent) + 1;
      if (itemIndex !== -1) {
        cartData[itemIndex].count = parseInt(stepperInput.textContent);
        cartData[itemIndex].total = (cartData[itemIndex].count)*(cartData[itemIndex].final_price);
          // save updated cartData to localStorage
        localStorage.setItem('cartData', JSON.stringify(cartData));
      }
    }
    displayPurchaseProduct();
}
  function stepperDownFunc(name){
    const itemIndex = cartData.findIndex(item => item.name === name);
    const stepperInput = document.querySelector(`[data-name="${name}"]`);
    if (parseInt(stepperInput.textContent) <= min) {
      stepperInput.textContent = min;
    } else {
      stepperInput.textContent = parseInt(stepperInput.textContent) - 1;
      if (itemIndex !== -1) {
        cartData[itemIndex].count = parseInt(stepperInput.textContent);
        cartData[itemIndex].total = (cartData[itemIndex].count)*(cartData[itemIndex].final_price);
          // save updated cartData to localStorage
        localStorage.setItem('cartData', JSON.stringify(cartData));
      }
    }

    displayPurchaseProduct();
}
  // create deleteProduct function
function deleteProduct(name){
    cartData = cartData.filter(function (element){
      return element.name !== name;
    });
    // draw products after filteration
    displayPurchaseProduct();
    localStorage.setItem("cartData", JSON.stringify(cartData));
    checkEmptyCart();
}
function checkEmptyCart(){
    let checkoutSubmitted = localStorage.getItem('checkoutSubmitted'); 
   if(checkoutSubmitted === 'false' && cartData.length>0){
      cartContent.style.display="block";
      emptyCart.style.display="none";
    }
    else if(cartData.length===0 || localStorage.getItem("cartData")===null){
      cartContent.style.display="none";
      emptyCart.style.display="block";
    } 
};
