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

let imgIndex = 1;
const totalImages = landingBullets.length;

function changeBackground(direction) {
  if (direction === "next") {
    imgIndex = (imgIndex + 1) % totalImages;
  } else if (direction === "prev") {
    imgIndex = (imgIndex - 1 + totalImages) % totalImages;
  }

  landing.style.backgroundImage = `url(../images/landing-${imgIndex + 1}.jpg)`;

  // Remove 'active' class from all bullets
  landingBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });

  // Add 'active' class to the clicked bullet
  landingBullets[imgIndex].classList.add("active");
}

rightArrow.onclick = () => changeBackground("next");
leftArrow.onclick = () => changeBackground("prev");

for (let i = 0; i < landingBullets.length; i++) {
  landingBullets[i].addEventListener("click", function () {
    imgIndex = i;
    changeBackground();
  });
}

// Set default background image and active bullet
changeBackground();

// Portfolio functionality
const shuffleButtons = document.querySelectorAll(".portfolio .shuffle li");
const projects = document.querySelectorAll(".portfolio .imgs-container .box");

shuffleButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // Remove 'active' class from all buttons
    shuffleButtons.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    event.target.classList.add("active");

    // Show projects with matching category and hide others
    const selectedCategory = event.target.dataset.category;
    projects.forEach((project) => {
      project.style.display = project.classList.contains(selectedCategory)
        ? "block"
        : "none";
    });
  });
});

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

function startCount(num) {
  let goal = parseInt(num.dataset.num);
  let countUp = setInterval(() => {
    num.textContent++;
    if (num.textContent == goal) {
      clearInterval(countUp);
    }
  }, 2000 / goal);
}

// Testimonials functionality
const testBullets = document.querySelectorAll(".testimonials .bullets li");
const testTabs = document.querySelectorAll(".testimonials .test");

// Function to handle click event on bullet points
function handleBulletClick(event) {
  const selectedTab = event.target.dataset.tab;

  // Remove 'active' class from all bullets
  testBullets.forEach((bullet) => bullet.classList.remove("active"));

  // Add 'active' class to the clicked bullet
  event.currentTarget.classList.add("active");

  // Show/hide tabs based on selection
  testTabs.forEach((tab) => {
    tab.style.display = tab.classList.contains(selectedTab) ? "block" : "none";
  });
}

// Add click event listeners to bullet points
testBullets.forEach((bullet) => {
  bullet.addEventListener("click", handleBulletClick);
});

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
