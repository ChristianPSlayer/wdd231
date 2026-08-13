const equipmentGrid = document.querySelector("#equipment-grid");
const filterSelect = document.querySelector("#equipment-filter");

const modal = document.querySelector("#equipment-modal");
const modalContent = document.querySelector("#modal-content");
const modalClose = document.querySelector("#modal-close");

let equipmentData = [];


async function getEquipment() {

    try {

        const response = await fetch("data/equipment.json");

        if (!response.ok) {
            throw new Error("Unable to load equipment data.");
        }

        equipmentData = await response.json();

        displayEquipment(equipmentData);
        createFilterOptions(equipmentData);

    } catch (error) {

        console.error("Error loading equipment:", error);

        equipmentGrid.innerHTML = `
            <p>
                Sorry, the equipment information could not be loaded.
            </p>
        `;
    }
}


function displayEquipment(items) {

    equipmentGrid.innerHTML = "";

    items.forEach((item) => {

        const card = document.createElement("article");

        card.classList.add("equipment-card");

        card.innerHTML = `
            <h2>${item.name}</h2>

            <p class="equipment-category">
                ${item.category}
            </p>

            <p>
                ${item.description}
            </p>

            <p>
                <strong>Price:</strong> $${item.price}
            </p>

            <p>
                <strong>Rating:</strong> ${item.rating}/5
            </p>

            <button class="learn-more" data-id="${item.id}">
                Learn More
            </button>
        `;

        equipmentGrid.appendChild(card);
    });

    addModalEvents();
}


function createFilterOptions(items) {

    const categories = [
        ...new Set(items.map((item) => item.category))
    ];

    categories.forEach((category) => {

        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        filterSelect.appendChild(option);
    });
}


function addModalEvents() {

    const buttons = document.querySelectorAll(".learn-more");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const item = equipmentData.find(
                (equipment) => equipment.id === id
            );

            if (item) {
                showModal(item);
            }
        });
    });
}


function showModal(item) {

    modalContent.innerHTML = `
        <h2>${item.name}</h2>

        <p>
            <strong>Category:</strong>
            ${item.category}
        </p>

        <p>
            <strong>Price:</strong>
            $${item.price}
        </p>

        <p>
            <strong>Rating:</strong>
            ${item.rating}/5
        </p>

        <p>
            ${item.description}
        </p>
    `;

    modal.showModal();
}


modalClose.addEventListener("click", () => {
    modal.close();
});


modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.close();
    }

});


filterSelect.addEventListener("change", () => {

    const selectedCategory = filterSelect.value;

    if (selectedCategory === "all") {

        displayEquipment(equipmentData);

    } else {

        const filteredEquipment = equipmentData.filter(
            (item) => item.category === selectedCategory
        );

        displayEquipment(filteredEquipment);
    }
});


getEquipment();