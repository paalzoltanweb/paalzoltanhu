const emGiftContainer = document.querySelector("#gift_container");
const emGiftIcon = document.querySelector("#gift_container svg");
const emBody = document.querySelector("body");
const emTitle = document.querySelector("h1");
const emTip = document.querySelector("#gift_tip")

function giftClicked() {
    emGiftIcon.style.animation = "none";
    emGiftContainer.style.filter = "grayscale(1)";

    emTitle.style.transition = "opacity 0.25s";
    emTitle.style.opacity = 0;

    emTip.style.transition = "opacity 0.25s";
    emTip.style.opacity = 0;

    emBody.style.transition = "background-color 1s";
    emBody.style.backgroundColor = "gray";

    emGiftContainer.style.transition = "transform 0.5s, opacity 0.5s";
    emGiftContainer.style.transform = "scale(2)";
    emGiftContainer.style.opacity = 0;
}
