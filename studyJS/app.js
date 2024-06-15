const h1 =  document.querySelector(".hello h1");
const h1s = document.querySelectorAll(".hello h1")

handleTitleClick = () => {
    const currentColor = h1.style.color;
    h1.innerText = "tite was clicked!";
    if (currentColor === "blue") {h1.style.color = "tomato";}
    else {h1.style.color = "blue";}
}

h1.addEventListener("click", handleTitleClick);