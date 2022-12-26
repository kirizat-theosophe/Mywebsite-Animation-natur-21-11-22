const bilde = document.querySelector("#bilde");

const bilder = [
    "./img/green.jpg",
    "./img/green-1.jpg",
    "./img/nature-images-6.jpg",
    "./img/green-nature-blue-sky.jpg"
];

let indeks = 1;

function byttBilde (){
    const nyttBilde = bilder[indeks];
    bilde.src = nyttBilde;

    indeks++;
    if(indeks >= bilder.length){
        indeks = 0;
    }
    
}

bilde.addEventListener("animationiteration", byttBilde);
