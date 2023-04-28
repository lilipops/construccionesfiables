const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const indicators = document.querySelectorAll(".indicator");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(-${size * counter}px)`;

function slideNext() {
  if (counter >= carouselImages.length - 1) {
    carouselSlide.style.transition = "none";
    counter = 0;
    carouselSlide.style.transform = `translateX(-${size * counter}px)`;
  } else {
    counter++;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = `translateX(-${size * counter}px)`;
  }
  updateIndicators();
}

function slidePrev() {
  if (counter <= 0) {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length;
    carouselSlide.style.transform = `translateX(-${size * counter}px)`;
  } else {
    counter--;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = `translateX(-${size * counter}px)`;
  }
  updateIndicators();
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === counter - 1) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

let intervalId = setInterval(slideNext, 4000);

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(slideNext, 4000);
}

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "last-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(-${size * counter}px)`;
  }
  if (carouselImages[counter].id === "first-clone") {
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = `translateX(-${size * counter}px)`;
  }
  updateIndicators();
  resetInterval();
});

nextBtn.addEventListener("click", () => {
  slideNext();
  resetInterval();
});

prevBtn.addEventListener("click", () => {
  slidePrev();
  resetInterval();
});
