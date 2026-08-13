const safetyGrid = document.querySelector("#safety-grid");
const favoriteTip = document.querySelector("#favorite-tip");
const savedPreference = document.querySelector("#saved-preference");


async function getSafetyTips() {

    try {

        const response = await fetch("data/safety.json");

        if (!response.ok) {
            throw new Error("Unable to load safety information.");
        }

        const safetyTips = await response.json();

        displaySafetyTips(safetyTips);

    } catch (error) {

        console.error("Error loading safety tips:", error);

        safetyGrid.innerHTML = `
            <p>
                Sorry, the safety information could not be loaded.
            </p>
        `;
    }
}


function displaySafetyTips(tips) {

    safetyGrid.innerHTML = "";

    tips.forEach((tip) => {

        const card = document.createElement("article");

        card.classList.add("safety-card");

        card.innerHTML = `
            <h2>${tip.title}</h2>

            <p class="safety-category">
                ${tip.category}
            </p>

            <p>
                ${tip.tip}
            </p>

            <p>
                <strong>Importance:</strong>
                ${tip.importance}
            </p>
        `;

        safetyGrid.appendChild(card);
    });
}


function savePreference() {

    const selectedTip = favoriteTip.value;

    if (selectedTip === "") {
        return;
    }

    localStorage.setItem("favoriteSafetyTip", selectedTip);

    displaySavedPreference(selectedTip);
}


function displaySavedPreference(preference) {

    const formattedPreference = preference
        .replace("-", " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());

    savedPreference.textContent =
        `Your favorite safety topic is: ${formattedPreference}.`;
}


function loadPreference() {

    const savedTip = localStorage.getItem("favoriteSafetyTip");

    if (savedTip) {

        favoriteTip.value = savedTip;

        displaySavedPreference(savedTip);
    }
}


favoriteTip.addEventListener("change", savePreference);

getSafetyTips();

loadPreference();