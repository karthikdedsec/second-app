const hamburger = document.querySelector(".hamburger-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  sidebar.style.transform = `translateX(0)`;
  hamburger.style.display = "none";
  closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.transform = `translateX(-120%)`;
  hamburger.style.display = "inline-block";
  closeBtn.style.display = "none";
});
