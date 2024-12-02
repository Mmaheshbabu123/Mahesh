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
  {
    item: "./logo//nextjs-icon.png",
    name: "NEXT JS",
    data: "Used to devolop reusable components in html and SSR ",
  },
];




function startAnimation() {
  // Animate <h1>
  const typedH1 = new Typed("#animated-h1", {
    strings: ["Hello, My Name Is"], // Text for <h1>
    typeSpeed: 100, // Typing speed
    backSpeed: 50, // Erasing speed
    backDelay: 1000, // Delay after typing
    showCursor: false, // Hide cursor after typing
    onComplete: () => {
      // Animate <h2> after <h1>
      const typedH2 = new Typed("#animated-h2", {
        strings: ["Mahesh Babu Manikanti"], // Text for <h2>
        typeSpeed: 100, // Typing speed
        backSpeed: 50, // Erasing speed
        backDelay: 1000, // Delay after typing
        showCursor: false, // Hide cursor after typing
        loop: false, // Manually loop by restarting animation
        onComplete: () => {
          // Restart the animation after <h2> finishes
          setTimeout(() => {
            document.getElementById("animated-h1").textContent = ""; // Clear <h1>
            document.getElementById("animated-h2").textContent = ""; // Clear <h2>
            startAnimation(); // Restart the animation
          }, 1000); // Add a delay before restarting
        },
      });
    },
  });
}

// Start the animation
startAnimation();

window.addEventListener("load", function () {
  let x = technalogies.map(
    (item) => `<div class="col-md-2 col m-2 p-4 div-boarder">
      <div class="technologies m-auto">
        <img class="technologies-img" src="${item.item}" alt="${item.name}">
      </div>
      <div class="d-flex justify-content-center">
        <strong class="fs-5 mt-3">${item.name}</strong>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <span>${item.data}</span>
      </div>
    </div>`
  );

  // Join the array into a single string without commas and assign it to innerHTML
  this.document.getElementById("array").innerHTML = x.join("");
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
document.getElementById("aboutLink").addEventListener("click", function(event) {
event.preventDefault();
const aboutSection = document.getElementById("aboutus");
aboutSection.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
});
});
document.getElementById("skillLink").addEventListener("click", function(event) {
event.preventDefault();
const aboutSection = document.getElementById("skilll-sections");
aboutSection.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
});
});

document.getElementById("homeLink").addEventListener("click", function(event) {
event.preventDefault();
const aboutSection = document.getElementById("home");
aboutSection.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
});
});
