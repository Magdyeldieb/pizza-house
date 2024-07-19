
let allMenuList,
saladMenuList,
pizzaMenuList,
burgerMenuList,
dessertMenuList,
drinkMenuList,
seafoodMenuList,
lessThan500Cal,
sortedPriceList,
sortPopularAllList,
sortNewAllList;
const filterAll=document.getElementById("filterAll");
const filterPizza=document.getElementById("filterPizza");
const filterDrink=document.getElementById("filterDrink");
const filterBurger=document.getElementById("filterBurger");
const filterSeafood=document.getElementById("filterSeafood");
const filterSalads=document.getElementById("filterSalads");
const filterDesserts=document.getElementById("filterDesserts");
const filterCal=document.getElementById("filterCal");
async function getShopList(){
  let apiResponse=await fetch("js/fileAPI.json");
  let menu= await apiResponse.json();
  allMenuList=[].concat(...menu.map(item => item.menu_list));
  saladMenuList= menu.filter(item => item.menu_title === 'salad')[0].menu_list;
  pizzaMenuList= menu.filter(item => item.menu_title === 'pizza')[0].menu_list;
  burgerMenuList= menu.filter(item => item.menu_title === 'burger')[0].menu_list;
  dessertMenuList= menu.filter(item => item.menu_title === 'dessert')[0].menu_list;
  drinkMenuList= menu.filter(item => item.menu_title === 'drink')[0].menu_list;
  seafoodMenuList= menu.filter(item => item.menu_title === 'seafood')[0].menu_list;
  lessThan500Cal=allMenuList.filter(item =>{
      return (+item.calories.replace(" Cal", ""))<500;
    });
    lessThan500Cal.sort((a, b) => parseInt(a.calories.replace(' Cal', '')) - parseInt(b.calories.replace(' Cal', '')));
     let priceList = allMenuList.map((item) => {
      if (item.badge === "sale") {
        return {
          name: item.name,
          img_url: item.img_url,
          calories: item.calories,
          final_price: item.sale_price, 
          price: item.price, 
          sale_price:item.sale_price, 
          stars:item.stars, 
          badge:item.badge
        };
      } else {
        return {
          name: item.name,
          img_url: item.img_url,
          calories: item.calories,
          final_price: item.price,
          price: item.price, 
          sale_price:item.sale_price, 
          stars:item.stars, 
          badge:item.badge
        };
      }
    });
    sortedPriceList=priceList.sort((obj1, obj2) => {
      return obj1.final_price-obj2.final_price;
    });
     sortNewAllList=allMenuList.sort((a, b) => {
      if (a.badge === 'new' && b.badge !== 'new') {
        return -1; // a comes first
      } else if (a.badge !== 'new' && b.badge === 'new') {
        return 1; // b comes first
      } else {
        return 0; // no change in order
      }
    });
    sortPopularAllList= [...allMenuList]
    sortPopularAllList=sortPopularAllList.sort((a, b) => {
      if (a.badge === 'popular' && b.badge !== 'popular') {
        return -1; // a comes first
      } else if (a.badge !== 'popular' && b.badge === 'popular') {
        return 1; // b comes first
      } else {
        return 0; // no change in order
      }
    });
}
function endMenu(){
  console.log("You have reached the End of the Menu :)");
}
function textError(){
    console.log("Error loading the API data");
}
(async function displayMenu(){
try{
  await showShopList();
  endMenu();    
}
catch{
  textError();
}
}());//self-invoke function  


  
 async function showShopList(){
    await getShopList();
    displayPopularProduct();
    activeList();
    displayallList(allMenuList);
    filterAll.addEventListener("click", () => {
      displayallList(allMenuList);
    });
    filterPizza.addEventListener("click", () => {
      displayallList(pizzaMenuList);
    });
    filterDrink.addEventListener("click", () => {
      displayallList(drinkMenuList);
    });
    filterBurger.addEventListener("click",()=>{
      displayallList(burgerMenuList);
    });
    filterSeafood.addEventListener("click",()=>{
        displayallList(seafoodMenuList);
    });
    filterDesserts.addEventListener("click",()=>{
        displayallList(dessertMenuList);
    });

    filterCal.addEventListener("click",()=>{
      displayallList(lessThan500Cal);

    });
     filterSalads.addEventListener("click",()=>{
      displayallList(saladMenuList);
    });
function activeList(){
  let links=document.querySelectorAll('.aside__list li a');
  let activeElement=links[0];//All is colored by default;
  links[0].classList.add("aside--active");
  links.forEach(link => {
      link.addEventListener('click', function() {
        // Remove active class from previous active element
        if (activeElement !== null) {
          activeElement.classList.remove('aside--active');
        }
         // Add active class to the clicked element
        link.classList.add('aside--active');
        activeElement = link;
      });
    });
}
}

let product = document.querySelector('.product');//where you need to show your data

function displayallList(allList){
  let allListBox=``;
  for(let index=0; index <allList.length; index++){
    let starsHTML = "";
    for(let i = 0; i < 5; i++) {
      if(i < allList[index].stars) {
        starsHTML += '<span class="fa fa-star star--color"></span>';
      } else {
        starsHTML += '<span class="fa fa-star"></span>';
      }
    }
    let badgeCard="";
    let finalPrice=`<span class="popular__products-price">$${allList[index].price}</span>`
      if(allList[index].badge==="sale"){
        badgeCard ='<div class="product--badge sale-badge">sale</div>';
        finalPrice=`<span class="popular__products-price"><del class="product--price-marked">$${allList[index].price}</del></span>
        <span class="popular__products-price"> $${allList[index].sale_price}</span>`
      }
      else if(allList[index].badge==="popular")
        badgeCard = '<div class="product--badge popular-badge">popular</div>';
      else if(allList[index].badge==="new")
        badgeCard ='<div class="product--badge new-badge">new</div>'; 
    allListBox+= `
    <div class="col-lg-4 col-md-6">              
              <div class="product__content">
                <div class="card">
                    <div class="product__img mb-3">
                      <img src="${allList[index].img_url}" alt="">
                    </div>
                    <div class="product__stars-rate mb-3 ">
                      ${starsHTML}
                    </div>
                    <div class="popular__products-info">
                      <h5 class="popular__products-title mb-2">${allList[index].name}</h5>
                      <div class="popular__products-price">${finalPrice}</div>
                      <div class="popular__products-cal">${allList[index].calories}</div>

                    </div>
                </div>
                <div class="product--overlay-white">
                  <div class="d-flex justify-content-center align-items-center h-100">
                  <a href="#" id="addToCartBtn${index}" class="btn-fixed btn-change button-shadow button-primary fadeInRight">add to cart</a>
                  </div>
                </div>
                  ${badgeCard}  
              </div>
          </div>
    `
  }
      product.innerHTML = allListBox;
      const addToCartBtns = document.querySelectorAll(`[id^="addToCartBtn"]`);
      for (let i = 0; i < addToCartBtns.length; i++) {
        addToCartBtns[i].addEventListener("click", function(e) {
          e.preventDefault();
          addToCart(e,allList[i].name, allList[i].img_url, allList[i].badge, allList[i].price, allList[i].sale_price);
        });
      }
    }
function addToCart(event,name,image,badge,price,sale_price){
  let final_price="";
  if(badge==="sale")
    final_price=sale_price;
  else
  final_price=price;
 // Store data in localStorage
 let cartData = JSON.parse(localStorage.getItem('cartData')) || [];
 let newItem = {name, image, badge, price, sale_price,final_price,count:1, total: 1*final_price };
 cartData.push(newItem);
 localStorage.setItem('cartData', JSON.stringify(cartData));
 window.location.href = 'cart.html';
}
function displayPopularProduct(){
  let popularProduct="";
for(let i=0; i<sortPopularAllList.length;i++){
  if(sortPopularAllList[i].badge==="popular"){
  popularProduct+=`
  <div class="row align-items-center row-20">
  <div class="col-6">
    <div class="popular__products-img">
      <img src="${sortPopularAllList[i].img_url}" alt="">
    </div>
  </div>
  <div class="col-6">
    <div class="popular__products-info">
      <h5 class="popular__products-title">${sortPopularAllList[i].name}</h5>
      <span class="popular__products-price">$${sortPopularAllList[i].price}</span>
    </div>
  </div>
</div> 
  `
  }
  else break;
}
document.querySelector(".popular__products-items").innerHTML=popularProduct;
};
trigerSearchBar()
function trigerSearchBar(){
const searchIcon = document.getElementById("searchIcon");
const inputSearch = document.getElementById("inputSearch");
searchIcon.addEventListener("click", function (event) {
  event.preventDefault();
  // set the value of inputSearch input to variable and change it to toLowerCase
  let searchInputValue = inputSearch.value.toLowerCase();
  // call searchInRecipes function and passing searchInputValue element
  searchForCards(searchInputValue);
});

}
// create search Function
function searchForCards(searchQuery) {
  let newCardsList = allMenuList.filter(function (element) {    
    return (
      element.name.toLowerCase().includes(searchQuery)
      );
  });
  displayallList(newCardsList);
}
selectBySorting();
function selectBySorting(){
const sortChoice = document.getElementById('sortChoice');
sortChoice.addEventListener("click",(e)=>{
if(e.target.value==="1")
displayallList(sortNewAllList);
else if(e.target.value==="2"){
displayallList(sortedPriceList);
}
else if(e.target.value==="3")
displayallList(sortPopularAllList);
});
}
filterPriceRange()
function filterPriceRange(){
  let priceFrom = document.querySelector(".price-from__value");
  let priceTo = document.querySelector(".price-to__value");
  let filterBtn=document.getElementById("filterBtn");
  filterBtn.addEventListener("click",()=>{
  const filterSortedPriceList=sortedPriceList.filter(price=> parseInt(price.final_price)>=parseInt(priceFrom.textContent)  &&  parseInt(price.final_price)<=parseInt(priceTo.textContent));
if(filterSortedPriceList.length!==0)
  displayallList(filterSortedPriceList);
  });
}
