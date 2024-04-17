let randomAdvice = document.getElementById("advice");
let btn = document.getElementById("btn")
const url = "https://api.adviceslip.com/advice";

let newAdvice = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            randomAdvice.innerText = item.slip.advice;
        });
};
window.addEventListener("load", newAdvice)
btn.addEventListener("click", newAdvice);