console.log("Cześć! Miło, że tutaj zajrzałeś!");

let photoKacper = document.querySelector(".js__photoKacper");
let showHidePhotoKacperButton = document.querySelector(".js-showHidePhotoKacperButton");
let firstHiddenTextBox = document.querySelector(".js-firstHiddenTextBox");
let secondHiddenTextBox = document.querySelector(".js-secondHiddenTextBox");
let showHideTextBoxButton = document.querySelector(".js-showHideTextBoxButton");
let removeFewThingsButton = document.querySelector(".js-removeFewThingsButton");

showHidePhotoKacperButton.addEventListener("click", () => {
    photoKacper.classList.toggle("section__photoKacper--hidden");
    if (showHidePhotoKacperButton.innerText === "Ukryj zdjęcie") {
        showHidePhotoKacperButton.innerText = "Pokaż zdjęcie";
    } else {
        showHidePhotoKacperButton.innerText = "Ukryj zdjęcie";
    }
});

showHideTextBoxButton.addEventListener("click", () => {
    firstHiddenTextBox.classList.toggle("section__textBox--shown");
    if (showHideTextBoxButton.innerText === "Nie znam") {
        showHideTextBoxButton.innerText = "Hmm... na pewno?";
    } else {
        showHideTextBoxButton.innerText = "Już na pewno znasz!";
        secondHiddenTextBox.classList.toggle("section__textBox--shown");
    }
});

removeFewThingsButton.addEventListener("click", () => {
    for (const video of document.querySelectorAll(".js-video")) {
        video.remove();
    }
    for (const videoCaption of document.querySelectorAll(".js-videoCaption")) {
        videoCaption.remove();
    }
    secondHiddenTextBox.remove();
    showHideTextBoxButton.remove();
});