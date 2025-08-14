/* eslint-disable no-console */ /* eslint-disable max-len */ "use strict";
// slider
const images = [
    "https://lh3.googleusercontent.com/d/1sPJlW61n9nQP0AfMbfqIUk5xiIIZ3nTr",
    "https://lh3.googleusercontent.com/d/1VfQf1dNmw4zUjU8Aiaz6kf1HGy8wsPRZ",
    "https://lh3.googleusercontent.com/d/1YviBYagI3axTVK_EA8vSk1CT0nyTVYwe"
];
document.addEventListener("DOMContentLoaded", ()=>{
    const sliderImage = document.querySelector(".slider__image");
    const moveBack = document.querySelector(".slider__arrow-btn--left");
    const moveForward = document.querySelector(".slider__arrow-btn--right");
    console.log(sliderImage);
    let index = 0;
    function updateImage() {
        sliderImage.style.backgroundImage = `url(${images[index]})`;
    }
    moveBack.addEventListener("click", ()=>{
        index = (index - 1 + images.length) % images.length;
        updateImage();
        console.log(1);
    });
    moveForward.addEventListener("click", ()=>{
        index = (index + 1) % images.length;
        updateImage();
        console.log(2);
    });
    updateImage(index);
});
// dialog
const dialog = document.getElementById("tabletOverlay");
const showButton = document.getElementById("show");
const closeButton = document.getElementById("close");
const links = document.querySelectorAll(".tablet-overlay__link");
const closeDialog = ()=>{
    dialog.style.display = "none";
    document.body.classList.remove("hide");
    dialog.close();
};
showButton.addEventListener("click", ()=>{
    dialog.style.display = "block";
    document.body.classList.add("hide");
    dialog.showModal();
});
closeButton.addEventListener("click", ()=>closeDialog());
links.forEach((link)=>link.addEventListener("click", ()=>closeDialog()));
// From
const form = document.getElementById("ContactForm");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    form.reset();
});

//# sourceMappingURL=index.f75de5e1.js.map
