let secTwo = document.querySelector(".our-skills");
let progSpan = document.querySelectorAll(".the-progress span");

let nums = document.querySelectorAll(".stats .number");
let sec = document.querySelector(".stats");
let started = false; // function started ? no

window.onscroll = function () {
  if (window.scrollY >= sec.offsetTop) {
    if (!started) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
  if (window.scrollY >= secTwo.offsetTop) {
    setTimeout(() => {
      progSpan.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }, 100);
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
