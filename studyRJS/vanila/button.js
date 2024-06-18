const button = document.querySelector("#button");
const count = document.querySelector("#totalClick")

let countNumber = 0;

handleClick = () => {
    console.log("I have been clicked")
    countNumber += 1;
    count.innerText = "Total clicks: "+`${countNumber}`;
}

button.addEventListener("click", handleClick);

