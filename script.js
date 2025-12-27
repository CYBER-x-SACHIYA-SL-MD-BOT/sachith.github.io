// Simple fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".container").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".container").style.transition = "1s";
    document.querySelector(".container").style.opacity = 1;
  }, 200);
});
