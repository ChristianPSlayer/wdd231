const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        navigation.classList.remove("open");
        menuButton.classList.remove("open");
    }
});