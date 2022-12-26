const btnFade = document.querySelector("#btnFade");
const btnFadeLeft = document.querySelector("#btnFadeLeft");
const btnGrow = document.querySelector("#btnGrow");

const firkant = document.querySelector("#firkant");

btnFade.onclick = () => firkant.className = "fadeUt"; 
btnFadeLeft.onclick = () => firkant.className = "fadeLeft"; 
btnGrow.onclick = () => firkant.className = "zoom"; 