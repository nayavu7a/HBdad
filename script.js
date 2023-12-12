const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "ТАК! Вітаю з днем народження!!";
  gif.src =
    "https://media.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif"; 
});

noBtn.addEventListener("click", () => {
 const wrapperRect = wrapper.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtn.offsetWidth;
  const maxY = 100 - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  const newLeft = Math.min(Math.max(randomX, 0), maxX);
  const newTop = Math.min(Math.max(randomY, 0), maxY);

  noBtn.style.left = newLeft + "px";
  noBtn.style.top = newTop + "px";
});