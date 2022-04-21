const divider = document.querySelector(".divider");
setInterval(() => {
    if (window.matchMedia("(min-width: 522px)").matches) {
        divider.src = "https://github.com/huyuehhsuan/frontend-mentor/raw/gh-pages/advice-generator-app-main/images/pattern-divider-desktop.svg";
    } else {
        divider.src = "https://github.com/huyuehhsuan/frontend-mentor/raw/gh-pages/advice-generator-app-main/images/pattern-divider-mobile.svg"
    }
}, 500);

async function getAdvice() {
    let advice = await fetch("https://api.adviceslip.com/advice");
    return advice.json();

}
async function setAdvice() {
    let myAdvice = await getAdvice();
    document.querySelector(".advice-id").innerHTML = "#" + myAdvice.slip.id;
    document.querySelector(".advice").innerHTML = '"' + myAdvice.slip.advice + '"';
}
setAdvice()