// Menu functionality
document.addEventListener("click", function (event) {
  const toggleMenu = document.querySelector(".toggle-menu");
  const menuItems = document.querySelector("header nav .toggle-menu + ul");

  if (toggleMenu.contains(event.target)) {
    menuItems.classList.toggle("show");
  } else {
    menuItems.classList.remove("show");
  }
});

// Landing image functionality
const landing = document.querySelector(".landing");
const rightArrow = document.querySelector(".landing .fa-angle-right");
const leftArrow = document.querySelector(".landing .fa-angle-left");
const landingBullets = document.querySelectorAll(".landing .bullets li");
const totalImages = 3;

let imgIndex = 0;

function changeBackground(direction) {
  if (direction === "next" || direction === "prev") {
    imgIndex =
      direction === "next"
        ? (imgIndex + 1) % totalImages
        : (imgIndex - 1 + totalImages) % totalImages;
  } else {
    imgIndex = Array.from(landingBullets).indexOf(event.target);
  }

  landing.style.backgroundImage = `url(../images/landing-${imgIndex + 1}.jpg)`;

  landingBullets.forEach((bullet) => bullet.classList.remove("active"));
  landingBullets[imgIndex].classList.add("active");
}

rightArrow.onclick = () => changeBackground("next");
leftArrow.onclick = () => changeBackground("prev");

landingBullets.forEach((bullet) =>
  bullet.addEventListener("click", changeBackground)
);

// Portfolio functionality
const shuffleButtons = document.querySelectorAll(".portfolio .shuffle li");
const projects = document.querySelectorAll(".portfolio .imgs-container .box");

shuffleButtons.forEach((button) =>
  button.addEventListener("click", function (event) {
    const selectedCategory = event.target.dataset.category;

    shuffleButtons.forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");

    projects.forEach((project) => {
      project.style.display = project.classList.contains(selectedCategory)
        ? "block"
        : "none";
    });
  })
);

// Stats functionality
const stats = document.querySelector(".stats");
const nums = document.querySelectorAll(".stats .box .number");
let started = false;

window.addEventListener("scroll", function () {
  if (scrollY >= stats.offsetTop - 100 && !started) {
    nums.forEach((num) => startCount(num));
    started = true;
  }
});

function startCount(num) {
  let goal = num.dataset.num;
  let countUp = setInterval(() => {
    num.textContent++;
    if (num.textContent == goal) clearInterval(countUp);
  }, 2000 / goal);
}

// Testimonials functionality
const testBullets = document.querySelectorAll(".testimonials .bullets li");
const testTabs = document.querySelectorAll(".testimonials .test");

function handleBulletClick(event) {
  const selectedTab = event.target.dataset.tab;

  testBullets.forEach((bullet) => bullet.classList.remove("active"));
  event.currentTarget.classList.add("active");

  testTabs.forEach((tab) => {
    tab.style.display = tab.classList.contains(selectedTab) ? "block" : "none";
  });
}

testBullets.forEach((bullet) =>
  bullet.addEventListener("click", handleBulletClick)
);

// Skill animation functionality
const skillSection = document.querySelector(".our-skills .skill");
const progressSpans = document.querySelectorAll(
  ".our-skills .skill .prog span"
);

window.addEventListener("scroll", function () {
  if (scrollY >= skillSection.offsetTop - 100) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
      span.classList.add("modified");
    });
  }
});
