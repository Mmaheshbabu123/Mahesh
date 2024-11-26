const technalogies = [
  {
    item: "./logo/react-removebg-preview.png",
    name: "REACT",
    data: "Used to devolop reusable components in html",
  },
  {
    item: "./logo/laravel-removebg-preview.png",
    name: "LARAVEL",
    data: "Backend php framework",
  },
  {
    item: "./logo/php-removebg-preview.png",
    name: "php",
    data: "A famous backend script to interact with database",
  },
  {
    item: "./logo/linux-removebg-preview.png",
    name: "LINUX",
    data: "Famous OS for devolopers",
  },
  {
    item: "./logo/mysql-removebg-preview.png",
    name: "MYSQL",
    data: "TO store data we use MYSQL",
  },
  {
    item: "./logo/JavaScript-removebg-preview.png",
    name: "Javascript",
    data: "Makes dynamic web pages",
  },
  {
    item: "./logo/html-removebg-preview.png",
    name: "Html",
    data: "For devolop frontend static web pages",
  },
  {
    item: "./logo/css-removebg-preview.png",
    name: "Css",
    data: "For beautify user interfaces we use these",
  },
  {
    item: "./logo/bootstrap-removebg-preview.png",
    name: "Bootstrap",
    data: "A front-end framework for building web pages",
  },
]; 
const typed1 = new Typed(".name-text", {
  strings: ["Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
window.addEventListener("load", function () {
  let x = technalogies.map(
    (item) => `<div class="col-md-2 col m-2 p-4 div-boarder">
  <div class="technologies m-auto">
    <img class="technologies-img" src="${item.item}" alt="${item.name}">
  </div>
  <div class="d-flex justify-content-center">
    <strong class="fs-5 mt-3 ">${item.name}</strong>
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <span class="">${item.data}</span>
  </div>
</div>`
  );
  this.document.getElementById("array").innerHTML = x;
  // JavaScript to add the 'scrolled' class on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("scroll");
    const threshold = 200;

    if (window.scrollY > threshold) {
      navbar.classList.add("animation--down");
    } else {
      navbar.classList.remove("animation--down");
    }
  });
});
