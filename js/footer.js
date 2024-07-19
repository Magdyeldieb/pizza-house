function loadFooter() {
    let footer = document.getElementById("footer");
 // Load the footer
    footer.innerHTML = `
    <div class="footer__content position-overflow">
      <div class="footer--line section-padding-80">
        <div class="container">
          <div class="row row-30">
            <div class="col-lg-4 col-md-6">
                <h5 class="footer__title">what we offer</h5>
                <ul class="footer__list">
                  <li><a href="shop.html">Pizzas</a></li>
                  <li><a href="shop.html">Drinks</a></li>
                  <li><a href="shop.html">Burgers</a></li>
                  <li><a href="shop.html">Seafood</a></li>
                  <li><a href="shop.html">Salads</a></li>
                  <li><a href="shop.html">Desserts</a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="">
                <h5 class="footer__title">information</h5>
                <ul class="footer__list">
                  <li><a href="#">About Us</a></li> 
                  <li><a href="#">FAQ</a></li>
                  <li><a href="shop.html">Shop</a></li>
                  <li><a href="cart.html">View Cart</a></li>
                  <li><a href="menu.html">Our Menu</a></li>
                  <li><a href="contacts.html">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="">
                <h5 class="footer__title">newsletter</h5>
                <p>Sign up today for the latest news and updates.</p>
                <div>
                  <form action="#" class="">
                    <div class="d-flex">
                      <input type="email" name="" id="" placeholder="Your E-mail">
                      <div class="form__icon">
                        <button type="submit" name="" id="" class="button-primary"><span class="fa fa-paper-plane"></span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer--line-2">
        <div class="container">
          <div class="row row-30 align-items-center">
            <div class="col-sm-6 col-md-7 col-lg-4 col-xl-4">
              <div class="row row-30 align-items-center text-lg-center">
                <div class=" col-md-7 col-xl-6"><!-- col-lg-6 -->
                  <a class="footer__img" href="index.html"><img src="img/logo-198x66.png" alt=""></a>
                </div>
                <div class=" col-md-5 col-xl-6">
                  <div class="like__img d-flex align-items-center">
                    <span><img src="img/like-icon-58x25.png" alt=""></span>
                    <span class="like__text">9.4k</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-12 mt-3 col-lg-8 col-xl-8 position-overflow">
              <div class="row text-lg-center align-items-center justify-content-end">
                <div class="col-lg-4 ">
                  <div class="d-flex justify-content-lg-end justify-content-md-start mb-3  align-items-center">
                    <div class="footer__icon">
                      <span class="fa fa-phone"></span>
                    </div>
                    <div class="footer__contact">
                      <a class="phone" href="tel:#">+1 718-999-3939</a>
                    </div>           
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="d-flex justify-content-lg-center mb-3  align-items-center">
                    <div class="footer__icon">
                      <span class="fa fa-envelope"></span>
                    </div>
                    <div class="footer__contact">
                      <a class="mail" href="mailto:#">info@demolink.org</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="">
                    <ul class="footer__list-social d-flex align-items-end row-20">
                      <li><a class="icon fa-brands fa-facebook-f" href="#"></a></li>
                      <li><a class="icon fa-brands fa-twitter" href="#"></a></li>
                      <li><a class="icon fa-brands fa-instagram" href="#"></a></li>
                      <li><a class="icon fa-brands fa-google-plus-g" href="#"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer--line-3">
        <div class="container">
          <div class="row align-items-center row-20">
            <div class="col-lg-6">514 S. Magnolia St. Orlando, FL 32806</div>
            <div class="footer__capyright col-lg-6">© 2024. All Rights Reserved. Design by TemplateMonster Practiced by <a href="https://github.com/Magdyeldieb" class="github-link">Eng. Magdy Eldieb</a></div>
          </div>
        </div>
      </div>
    </div>
    <a class="scroll-to-top__icon fa fa-up-long"></a>

    `;
}
loadFooter();
upArrowScroll();
const upArrow = document.querySelector(".scroll-to-top__icon");

function upArrowScroll() {
  // Listen for the scroll event on the window object
  window.addEventListener('scroll', function() {
    // Check the current scroll position
    const scrollPosition = window.scrollY;      
    // If the scroll position is greater than or equal to 200px,
    if (scrollPosition> 300) {
      upArrow.style.display = "block";
    } else {
      upArrow.style.display = "none";
    }
  });
}
scrollToTop();
function scrollToTop(){
//when I click the up arrow go to top
upArrow.addEventListener("click",()=>{
  window.scrollTo(0,0);
});
}
