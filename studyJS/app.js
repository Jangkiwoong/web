const title =  document.querySelector(".hello h1");
const titles = document.querySelectorAll(".hello h1")

handleTitleClick = () => {
    console.log("tite was clicked!");
}

title.addEventListener("click", handleTitleClick);