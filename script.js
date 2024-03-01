const stars = document.querySelectorAll(".star");
const emojiEl = document.querySelector(".emoji");
const statusEl = document.querySelector(".status");
const defaultRating = 0;
let currentRating = 0;

const ratings = [
  { emoji: "", name: "Give us rating" },
  { emoji: "😫", name: "Very Bad" },
  { emoji: "😣", name: "Bad" },
  { emoji: "🙂", name: "Good" },
  { emoji: "🤩", name: "Very Good" },
  { emoji: "🥰", name: "Excellent" }
];

const checkSelectedStar = (star) => {
  if (parseInt(star.getAttribute("data-rate")) === currentRating) {
    return true;
  } else {
    return false;
  }
};

const setRating = (index) => {
  stars.forEach((star) => star.classList.remove("selected"));
  if (index > 0 && index <= stars.length) {
    document
      .querySelector('[data-rate="' + index + '"]')
      .classList.add("selected");
  }
  emojiEl.innerHTML = ratings[index].emoji;
  statusEl.innerHTML = ratings[index].name;
};

const resetRating = () => {
  currentRating = defaultRating;
  setRating(defaultRating);
};

stars.forEach((star) => {
  star.addEventListener("click", function () {
    if (checkSelectedStar(star)) {
      resetRating();
      return;
    }
    const index = parseInt(star.getAttribute("data-rate"));
    currentRating = index;
    setRating(index);
  });

  star.addEventListener("mouseover", function () {
    const index = parseInt(star.getAttribute("data-rate"));
    setRating(index);
  });

  star.addEventListener("mouseout", function () {
    setRating(currentRating);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  setRating(defaultRating);
});
