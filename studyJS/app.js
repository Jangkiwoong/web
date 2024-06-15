const h1 =  document.querySelector(".hello h1");
const h1s = document.querySelectorAll(".hello h1")

handleTitleClick = () => {
    h1.innerText = "tite was clicked!";
}

handleMouseEnter = () => {
    h1.innerText = "Mouse is here!"
}

handleMouseLeave = () => {
    h1.innerText = "Mouse is gone";
}

handleWindowResize = () => {
    document.body.style.backgroundColor = "tomato";
}

handleWindowCopy = () => {
    alert("copier!")
}
h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);