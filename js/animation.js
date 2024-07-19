const menuContents = document.querySelectorAll('.menu__content');
window.addEventListener('scroll', () => {
  // Loop through each element and calculate its trigger point
  menuContents.forEach(menuContent => {
    const menuContentTrigger = window.innerHeight-menuContent.offsetTop;
const animationName = menuContent.getAttribute('data-animation-name');
    // Get the current scroll position
    const scrollY = window.scrollY;
    // If the user has scrolled to the menu content trigger point
    if (scrollY >= menuContentTrigger) {
        menuContent.classList.add(animationName);
    }
    else {
        menuContent.classList.remove(animationName);
    }
  });
});
