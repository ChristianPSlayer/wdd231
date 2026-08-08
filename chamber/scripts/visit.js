const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const today = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const days = Math.floor(
        (today - Number(lastVisit)) / (1000 * 60 * 60 * 24)
    );

    if (days < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else if (days === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitMessage.textContent =
            `You last visited ${days} days ago.`;

    }

}

localStorage.setItem("lastVisit", today);