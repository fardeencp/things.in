const starContainer = document.querySelector(".stars");

for (let i = 0; i < 40; i++) {
  const star = document.createElement("span");
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = (15 + Math.random() * 15) + "s";
  starContainer.appendChild(star);
}
