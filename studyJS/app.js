const h1 =  document.querySelector(".hello h1");
const h1s = document.querySelectorAll(".hello h1")

handleTitleClick = () => {
    h1.classList.toggle("clicked")
    console.log(h1.classList)
}

h1.addEventListener("click", handleTitleClick);