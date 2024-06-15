const h1 =  document.querySelector(".hello h1");
const h1s = document.querySelectorAll(".hello h1")

handleTitleClick = () => {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    console.log(h1.classList)
}

h1.addEventListener("click", handleTitleClick);