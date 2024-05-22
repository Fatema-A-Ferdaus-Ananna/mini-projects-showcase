const content_body_container = document.querySelector(".content-body-container");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".content-body-container .arrow");
const firstCardWidth = carousel.querySelector(".item-card").offsetWidth; //item-card width
const carouselCildrens = [...carousel.children];

// console.log(carouselCildrens);
// console.log(carousel.offsetWidth);

// prettier-ignore
let isDragging = false, startX, startScrollLeft, timeoutId;

//get the number of cards that fit in the carousel at once
let cardPerview = Math.round(carousel.offsetWidth / firstCardWidth);
console.log(cardPerview); // slice(start,  end)start will be inclusive, end will be exclusive

//insert copies of the last few cards to beginning of carousel for infinite scroll
// prettier-ignore
carouselCildrens.slice(-cardPerview).reverse().forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

//insert copies of the last few cards to end of carousel for infinite scroll
// prettier-ignore
carouselCildrens.slice(0, cardPerview).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

//add event listener for  the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(btn.id);
    // console.log(firstCardWidth);

    if (btn.id === "left") {
      carousel.scrollLeft -= firstCardWidth;
    } else {
      carousel.scrollLeft += firstCardWidth;
    }
    // carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (event) => {
  isDragging = true;
  carousel.classList.add("dragging");

  //records intial cursor and scroll position of the carousel
  startX = event.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (event) => {
  if (!isDragging) return; //if dragging is false return from here
  carousel.scrollLeft = startScrollLeft - (event.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const autoPlay = () => {
  // if (window.innerWidth < 800) return;
  // else {
  timeoutId = setTimeout(() => {
    carousel.scrollLeft += firstCardWidth;
  }, 1500);
  // }
};
autoPlay();

const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    console.log(`reached left end`);
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    console.log(`reached right end`);
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  //clear existing timeout and start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!content_body_container.matches(":hover")) autoPlay();
};

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
content_body_container.addEventListener("mouseenter", () => clearTimeout(timeoutId));
content_body_container.addEventListener("mouseleave", autoPlay);
