let searchForm = document.querySelector(".search-form");
let search = document.querySelector("#search-btn");

search.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  Links.classList.remove("active");
  LoginForm.classList.remove("active");
  Product.classList.remove("active");
  signupform.classList.remove("active");
});

let Product = document.querySelector(".shopping-cart");
let Cart = document.querySelector("#cart-btn");

Cart.addEventListener("click", function () {
  Product.classList.toggle("active");
  Links.classList.remove("active");
  LoginForm.classList.remove("active");
  searchForm.classList.remove("active");
  signupform.classList.remove("active");
});

let LoginForm = document.querySelector(".login-form");
let Login = document.querySelector("#login-btn");

Login.addEventListener("click", function () {
  LoginForm.classList.toggle("active");
  Links.classList.remove("active");
  Product.classList.remove("active");
  searchForm.classList.remove("active");
  signupform.classList.remove("active");
});

let Signupbtn = document.querySelector(".signupbtn");
let signupform = document.querySelector("#signup");

Signupbtn.addEventListener("click", () => {
  event.preventDefault();
  signupform.classList.toggle("active");
  Links.classList.remove("active");
  Product.classList.remove("active");
  searchForm.classList.remove("active");
  LoginForm.classList.remove("active");
});

let Links = document.querySelector(".nav_links");
let Menu = document.querySelector("#mobile_menu");

Menu.addEventListener("click", function () {
  Links.classList.toggle("active");
  LoginForm.classList.remove("active");
  Product.classList.remove("active");
  searchForm.classList.remove("active");
  signupform.classList.remove("active");
});

window.onscroll = () => {
  Links.classList.remove("active");
  LoginForm.classList.remove("active");
  Product.classList.remove("active");
  searchForm.classList.remove("active");
  signupform.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
