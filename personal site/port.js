/*function classToggle() {
    const navs = document.querySelectorAll('.navbar')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }

  document.querySelector('.Navbar-toggle')
    .addEventListener('click', classToggle);

   */
    
    var progressBar1 = document.getElementById("progress-bar1");
var progressPercentage1 = document.getElementById("progress-percentage1");

function updateProgress1(percentage) {
  progressBar1.style.width = percentage + "%";
  progressPercentage1.innerHTML = percentage + "%";
}

updateProgress1(85);

var progressBar2 = document.getElementById("progress-bar2");
var progressPercentage2 = document.getElementById("progress-percentage2");

function updateProgress2(percentage) {
  progressBar2.style.width = percentage + "%";
  progressPercentage2.innerHTML = percentage + "%";
}

updateProgress2(50);

var progressBar3 = document.getElementById("progress-bar3");
var progressPercentage3 = document.getElementById("progress-percentage3");

function updateProgress3(percentage) {
  progressBar3.style.width = percentage + "%";
  progressPercentage3.innerHTML = percentage + "%";
}

updateProgress3(75);


var progressBar4 = document.getElementById("progress-bar4");
var progressPercentage4 = document.getElementById("progress-percentage4");

function updateProgress4(percentage) {
  progressBar4.style.width = percentage + "%";
  progressPercentage4.innerHTML = percentage + "%";
}

updateProgress4(65);

const yearEl=document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear)
yearEl.textContent =currentYear;


//Make mobile Navigation work
const navBtnEl = document.querySelector(".mobile-btn");
const headerEl = document.querySelector(".section1");
navBtnEl.addEventListener("click", function () {
headerEl.classList.toggle("nav-open");
});




