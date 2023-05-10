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
let countDownDate = new Date("Dec 31 , 2023 23:59:59").getTime();

let counter = setInterval(() => {
  // get date now
  let dateNow = new Date().getTime();

  //find the date diffrance between now and countdown date
  let dateDif = countDownDate - dateNow;

  // get time units
  let days = Math.floor(dateDif / (1000 * 60 * 60 * 24));

  let hours = Math.floor((dateDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((dateDif % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((dateDif % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 100 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if ((dateDif = 0)) {
    clearInterval(counter);
  }
}, 1000);
