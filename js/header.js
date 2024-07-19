const header = document.getElementById("header");
function setActiveLink(){
    let lgLinks = document.querySelectorAll('.nav__bottom-content .nav__link');
    let smLinks = document.querySelectorAll('.offcanvas-body .nav-sm .nav__item');
console.log(lgLinks," smLinks")
    let currentPage = location.pathname.split('/').pop();
  console.log(currentPage)
    lgLinks.forEach(function(link){
      if (link.getAttribute('data-page') === currentPage){
        link.classList.add('nav--active');
        console.log(link,"  link")
      } else{
        link.classList.add('nav--hover');
      }
    });
   smLinks.forEach(function(link){
    if (link.getAttribute('data-page') === currentPage){
        link.classList.add('offcanvas-body', 'nav--active');
      } else{
        link.classList.remove('offcanvas-body', 'nav--active');
      }
  });
}
  function loadHeader(){
    // Load the header
    header.innerHTML=`
    <div class="d-none d-xl-block"><!--desktop-->
    <div class="header__item-right">
      <div class="header__content-right">
      <div class="header__upper-content header__upper-nav">
        <div class="header__upper-item">
          <div class="d-flex justify-content-center">
              <ul class="header__list-contact d-flex align-items-center">
                <li>
                  <div class="d-flex">
                    <div class="header__contact-icon">
                      <span class="icon fa fa-phone"></span>
                    </div>
                    <div class="header__contact-text">
                      <a class="phone" href="tel:#">+1 718-999-3939</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="header__contact-icon">
                      <span class="icon fa fa-location-dot"></span>
                    </div>
                    <div class="header__contact-text">
                      <a class="address" href="https://www.google.com/maps/dir/29.9088266,31.2790768/514+S+Magnolia+Ave,+Orlando,+FL+32801,+USA/@2.1120811,-111.2692968,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88e77b023a3f577b:0x3bced1a001a9d2e4!2m2!1d-81.3777585!2d28.5368238?entry=ttu">514 S. Magnolia St. Orlando, FL 32806</a>
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="header__list-social d-flex">
                <li><a class="icon fa-brands fa-facebook-f" href="https://www.facebook.com/login"></a></li>
                <li><a class="icon fa-brands fa-twitter" href="https://x.com/login"></a></li>
                <li><a class="icon fa-brands fa-instagram" href="https://www.instagram.com/accounts/login/?hl=en"></a></li>
                <li><a class="icon fa-brands fa-google-plus-g" href="https://www.google.com/accounts/login/?hl=en"></a></li>
              </ul>
            <!-- </div> -->
          </div>
        </div>
      </div>
      <div class="nav-lg">
      <nav class="nav__bottom-content">
      <ul class="nav__items">
      <li class="nav__item"><a href="index.html" class="nav__link" data-page="index.html">Home</a></li>
      <li class="nav__item dropdown"><a href="shop.html" class="nav__link "data-page="shop.html">Shop</a>
        <div class="dropdown-menu">
          <a href="cart.html"     class="dropdown-item"  data-page="cart.html">Cart</a>
          <a href="checkout.html" class="dropdown-item"   data-page="checkout.html">Checkout</a>
        </div>
      </li>      
      <li class="nav__item"><a href="contacts.html" class="nav__link" data-page="contacts.html">Contacts</a></li>      
      </ul>
     </nav>
      </div>
      </div>
    </div>
    <div class="container">
      <div class="header_content">
        <div class="d-flex position-relative">
          <div class="header__item-left">      
              <div class="header__logo">
                <a href="index.html">
                  <img src="img/logo-198x66.png" alt="brand-img">
                </a>
              </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
  <div class="header__sm d-xl-none">
    <div class="header__sm-content">
        <div class="header__sm-icon">
          <span class="fa fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></span>
        </div> 
        <div class="header__sm-logo">
          <div class="header__logo">
            <a href="index.html">
              <img src="img/logo-198x66.png" alt="brand-img">
            </a>
          </div>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="header__upper-content">
              <ul class="header__list-contact d-flex flex-column row-20 pe-3">
                <li>
                  <div class="d-flex">
                    <div class="header__contact-icon">
                      <span class="icon fa fa-phone"></span>
                    </div>
                    <div class="header__contact-text">
                      <a class="phone" href="tel:#">+1 718-999-3939</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div class="header__contact-icon">
                      <span class="icon fa fa-location-dot"></span>
                    </div>
                    <div class="header__contact-text">
                      <a class="address" href="https://www.google.com/maps/dir/29.9088266,31.2790768/514+S+Magnolia+Ave,+Orlando,+FL+32801,+USA/@2.1120811,-111.2692968,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88e77b023a3f577b:0x3bced1a001a9d2e4!2m2!1d-81.3777585!2d28.5368238?entry=ttu">514 S. Magnolia St. Orlando, FL 32806</a>
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="header__list-social d-flex justify-content-center">
                     <li><a class="icon fa-brands fa-facebook-f" href="https://www.facebook.com/login"></a></li>
                <li><a class="icon fa-brands fa-twitter" href="https://x.com/login"></a></li>
                <li><a class="icon fa-brands fa-instagram" href="https://www.instagram.com/accounts/login/?hl=en"></a></li>
                <li><a class="icon fa-brands fa-google-plus-g" href="https://www.google.com/accounts/login/?hl=en"></a></li>
              </ul>
            <!-- </div> -->
            </div>
            <div class="nav-sm">
            <nav class="nav__bottom-content">
            <ul class="nav__items">
            <li class="nav__item" data-page="index.html" ><a href="index.html" class="nav__link">Home</a></li>
            <li class="nav__item dropdown" data-page="shop.html"><a href="shop.html" class="nav__link" >Shop</a>
            <div class="dropdown-menu">
              <a href="cart.html"     class="dropdown-item"  data-page="cart.html">Cart</a>
              <a href="checkout.html" class="dropdown-item"   data-page="checkout.html">Checkout</a>
            </div>
          </li>   
            <li class="nav__item" data-page="contacts.html" ><a href="contacts.html" class="nav__link"  >Contacts</a></li>
            </ul>
        </nav>
          </div>
          </div>
        </div>
    </div>
    </div>
    `
    // Set the active class on the current page link
    setActiveLink();
  }
  loadHeader();
function throttle(func, delay) {
  let timeoutId;
  let lastExecTime = 0;
  return function() {
    const context = this;
    const args = arguments;
    const elapsed = Date.now() - lastExecTime;
    if (elapsed > delay) {
      lastExecTime = Date.now();
      func.apply(context, args);
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastExecTime = Date.now();
        func.apply(context, args);
      }, delay - elapsed);
    }
  };
}
window.addEventListener(
  "scroll",
  throttle(() => {
    const upperNav = document.querySelector(".header__upper-nav");
    const bottomMainNav = document.querySelector(".nav__bottom-content");
    const header = document.querySelector("#header");
    const shrinkHeight = 91; // Set the height to shrink the header to here
    const scrollPos = window.scrollY;
    if (window.innerWidth >= 1200) {
      if (scrollPos >= 20) {
        upperNav.style.display = "none";
        header.style.transition = "height 0.3s ease-in-out";
        header.style.height = `${shrinkHeight}px`;
        bottomMainNav.style.transition = "margin 0.3s ease-in-out";
        bottomMainNav.style.marginBottom = "90px";
        bottomMainNav.style.marginTop = "53px";
      } else if (scrollPos < 20) {
        upperNav.style.display = "block";
        header.style.transition = "height 0.3s ease-in-out";
        header.style.height = "116px";
        bottomMainNav.style.transition = "margin 0.3s ease-in-out";
        bottomMainNav.style.marginBottom = "104px";
        bottomMainNav.style.marginTop = "20px";
      }
    }
  }, 100)
);
