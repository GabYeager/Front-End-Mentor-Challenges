let spanFirstArrow = document.getElementsByClassName("span-share-icon")[0];
let spanSecondArrow = document.getElementsByClassName("hidden-div-share-icon")[0];
let firstArrow = document.getElementById("firstArrow");
let secondArrow = document.getElementById("secondArrow");
let sectionContainer = document.getElementsByClassName("section-container")[0];
let hiddenDiv = document.getElementsByClassName("hidden-div")[0];
let share = document.getElementsByClassName("share-text")[1];
let desktopShare = document.getElementsByClassName("share-text")[0];
let facebook = document.getElementById("facebook");
let desktopFacebook = document.getElementById("desktopFacebook");
let twitter = document.getElementById("twitter");
let desktopTwitter = document.getElementById("desktopTwitter");
let pinterest = document.getElementById("pinterest");
let desktopPinterest = document.getElementById("desktopPinterest");
let desktopArrow = document.getElementById("desktopArrow");
let desktopDiv = document.getElementsByClassName("desktop-div")[0];
let desktopShareIcon = document.getElementsByClassName("desktop-share-icon")[0];

function mostrar() {
    sectionContainer.style.transform = "scaleY(0)";
    hiddenDiv.style.transform = "scaleY(1)";
}

function esconder() {
    hiddenDiv.style.transform = "scaleY(0)";
    sectionContainer.style.transform = "scaleY(1)";
}

function mostrarDesktop() {
    if (desktopDiv.style.display == "" || desktopDiv.style.display == "none") {
        desktopDiv.style.display = "block";
        desktopArrow.style.filter = "brightness(4)";
        desktopShareIcon.style.backgroundColor = "var(--Very-Dark-Grayish-Blue)";
    } else {
        desktopDiv.style.display = "none";
        desktopArrow.style.filter = "";
        desktopShareIcon.style.backgroundColor = "var(--Light-Grayish-Blue)";
    }
}

spanFirstArrow.addEventListener("mouseenter", () => {
    spanFirstArrow.style.opacity = 0.8;
});
spanFirstArrow.addEventListener("mouseleave", () => {
    spanFirstArrow.style.opacity = 1;
});
spanSecondArrow.addEventListener("mouseenter", () => {
    spanSecondArrow.style.opacity = 0.8;
});
spanSecondArrow.addEventListener("mouseleave", () => {
    spanSecondArrow.style.opacity = 1;
});
spanFirstArrow.addEventListener("click", mostrar);
spanSecondArrow.addEventListener("click", esconder);
share.addEventListener("mouseenter", () => {
    share.style.color = "var(--Grayish-Blue)";
});
share.addEventListener("mouseleave", () => {
    share.style.color = "var(--Desaturated-Dark-Blue)";
});
facebook.addEventListener("mouseenter", () => {
    facebook.style.filter = "opacity(0.5) drop-shadow(0 0 0 #2e88f3) saturate(3)";
});
facebook.addEventListener("mouseleave", () => {
    facebook.style.filter = "";
});
twitter.addEventListener("mouseenter", () => {
    twitter.style.filter = "opacity(0.5) drop-shadow(0 0 0 #2e88f3) saturate(3)";
});
twitter.addEventListener("mouseleave", () => {
    twitter.style.filter = "";
});
pinterest.addEventListener("mouseenter", () => {
    pinterest.style.filter = "opacity(0.5) drop-shadow(0 0 0 red) saturate(3)";
});
pinterest.addEventListener("mouseleave", () => {
    pinterest.style.filter = "";
});
desktopShareIcon.addEventListener("click", mostrarDesktop);
desktopShareIcon.addEventListener("mouseenter", () => {
    desktopArrow.style.opacity = 0.8;
});
desktopShareIcon.addEventListener("mouseleave", () => {
    desktopArrow.style.opacity = 1;
});
desktopShare.addEventListener(
    "mouseenter",
    () => (desktopShare.style.color = "var(--Grayish-Blue)")
);
desktopShare.addEventListener(
    "mouseleave",
    () => (desktopShare.style.color = "var(--Desaturated-Dark-Blue)")
);
desktopFacebook.addEventListener("mouseenter", () => {
    desktopFacebook.style.filter =
        "opacity(0.5) drop-shadow(0 0 0 #2e88f3) saturate(3)";
});
desktopFacebook.addEventListener("mouseleave", () => {
    desktopFacebook.style.filter = "";
});
desktopTwitter.addEventListener("mouseenter", () => {
    desktopTwitter.style.filter =
        "opacity(0.5) drop-shadow(0 0 0 #2e88f3) saturate(3)";
});
desktopTwitter.addEventListener("mouseleave", () => {
    desktopTwitter.style.filter = "";
});
desktopPinterest.addEventListener("mouseenter", () => {
    desktopPinterest.style.filter =
        "opacity(0.5) drop-shadow(0 0 0 red) saturate(3)";
});
desktopPinterest.addEventListener("mouseleave", () => {
    desktopPinterest.style.filter = "";
});