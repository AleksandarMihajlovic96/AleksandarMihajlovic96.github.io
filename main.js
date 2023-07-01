const cursor = document.querySelector(".cursor-inner");
const cursor2 = document.querySelector(".cursor-middle");
const cursor3 = document.querySelector(".cursor-outter");
const navlinks = document.querySelectorAll("nav ul li");

document.addEventListener("mousemove", updateCursorPositions);
document.addEventListener("scroll", updateCursorPositions);

function updateCursorPositions(e) {
  requestAnimationFrame(() => {
    let leftPosition = e.pageX + 4 - window.scrollX;
    let topPosition = e.pageY + 4 - window.scrollY;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
    cursor2.style.left = leftPosition + "px";
    cursor2.style.top = topPosition + "px";
    cursor3.style.left = leftPosition + "px";
    cursor3.style.top = topPosition + "px";
  });
}

// Animation

navlinks.forEach((li, i) => {
  li.style.animationDelay = 0 + i * 140 + "ms";
});

let buttonText = document.getElementById("textButton");
buttonText.addEventListener("click", function () {
  let showMoreText = document.getElementById("showMore");

  if (showMoreText.style.display === "flex") {
    showMoreText.style.display = "none";
    buttonText.innerHTML = "Show More &#8595";
  } else {
    showMoreText.style.display = "flex";
    buttonText.innerHTML = "Show Less &#8593";
  }
});
