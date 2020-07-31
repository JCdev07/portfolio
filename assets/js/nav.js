// function to select element
const selectBurgerIcon = (element) => document.querySelector(element);

selectBurgerIcon('.header__hamburger').addEventListener('click', () => {
   selectBurgerIcon('.header__hamburger').classList.toggle('active');
   selectBurgerIcon('.header__nav-list').classList.toggle('active');
})