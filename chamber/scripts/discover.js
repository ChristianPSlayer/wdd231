import { places } from "../data/discover.mjs";

const discoverGrid = document.querySelector("#discover-grid");

displayPlaces();

function displayPlaces() {

    places.forEach((place, index) => {

        const card = document.createElement("section");
        card.classList.add(`card${index + 1}`);

        const title = document.createElement("h2");

        const figure = document.createElement("figure");

        const image = document.createElement("img");

        const address = document.createElement("address");

        const description = document.createElement("p");

        const button = document.createElement("button");

        title.textContent = place.name;

        image.src = `imaArlington/${place.image}`;
        image.alt = place.name;
        image.loading = "lazy";
        image.width = 300;
        image.height = 200;

        address.textContent = place.address;

        description.textContent = place.description;

        button.textContent = "Learn More";

        figure.appendChild(image);

        card.append(
            title,
            figure,
            address,
            description,
            button
        );

        discoverGrid.appendChild(card);

    });

}