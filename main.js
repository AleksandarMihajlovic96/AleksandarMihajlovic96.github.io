const cursor = document.querySelector(".cursor-inner");
const cursor2 = document.querySelector(".cursor-middle");
const cursor3 = document.querySelector(".cursor-outter");
const navlinks = document.querySelectorAll("nav ul li");

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX + 4;
    let topPosition = e.pageY + 4;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
    cursor2.style.left = leftPosition + "px";
    cursor2.style.top = topPosition + "px";
    cursor3.style.left = leftPosition + "px";
    cursor3.style.top = topPosition + "px";
})

// Animation

navlinks.forEach((li, i) => {
    li.style.animationDelay = 0 + i * 140 + "ms";
})