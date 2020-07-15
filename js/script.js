{
    const showHidePhotoKacper = () => {
        const showHidePhotoKacperButton = document.querySelector(".js-showHidePhotoKacperButton");
        const photoKacper = document.querySelector(".js__photoKacper");
        photoKacper.classList.toggle("section__photoKacper--hidden");
        if (showHidePhotoKacperButton.innerText === "Ukryj zdjęcie") {
            showHidePhotoKacperButton.innerText = "Pokaż zdjęcie";
        } else {
            showHidePhotoKacperButton.innerText = "Ukryj zdjęcie";
        }
    };

    const showSwitchTextBox = () => {
        const showHideTextBoxButton = document.querySelector(".js-showHideTextBoxButton");
        const firstHiddenTextBox = document.querySelector(".js-firstHiddenTextBox");
        const secondHiddenTextBox = document.querySelector(".js-secondHiddenTextBox");
        firstHiddenTextBox.classList.toggle("section__textBox--shown");
        if (showHideTextBoxButton.innerText === "Nie znam") {
            showHideTextBoxButton.innerText = "Hmm... na pewno?";
        } else {
            showHideTextBoxButton.innerText = "Już na pewno znasz!";
            secondHiddenTextBox.classList.toggle("section__textBox--shown");
        }
    };

    const removeFewThings = () => {
        const secondHiddenTextBox = document.querySelector(".js-secondHiddenTextBox");
        const showHideTextBoxButton = document.querySelector(".js-showHideTextBoxButton");
        for (const video of document.querySelectorAll(".js-video")) {
            video.remove();
        }
        for (const videoCaption of document.querySelectorAll(".js-videoCaption")) {
            videoCaption.remove();
        }
        secondHiddenTextBox.remove();
        showHideTextBoxButton.remove();
    };

    const init = () => {
        const showHidePhotoKacperButton = document.querySelector(".js-showHidePhotoKacperButton");
        showHidePhotoKacperButton.addEventListener("click", showHidePhotoKacper);

        const showHideTextBoxButton = document.querySelector(".js-showHideTextBoxButton");
        showHideTextBoxButton.addEventListener("click", showSwitchTextBox);

        const removeFewThingsButton = document.querySelector(".js-removeFewThingsButton");
        removeFewThingsButton.addEventListener("click", removeFewThings);
    };

    init();
}