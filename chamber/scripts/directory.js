const url = "data/members.json";
const cards = document.querySelector("#members");

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data);

    cards.classList.add("grid-view");
}

getMembers();

function displayMembers(members) {

    members.forEach((member) => {

        const card = document.createElement("section");
        const name = document.createElement("h3");
        const image = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const membership = document.createElement("p");

        name.textContent = member.name;

        image.src = `images/${member.image}`;
        image.alt = `${member.name} logo`;
        image.loading = "lazy";

        address.textContent = member.address;
        phone.textContent = member.phone;

        website.textContent = "Visit Website";
        website.href = member.website;
        website.target = "_blank";

        membership.textContent = `Membership Level: ${member.membership}`;

        card.append(name, image, address, phone, website, membership);

        cards.appendChild(card);

    });

}

gridButton.addEventListener("click", () => {
    cards.classList.remove("list-view");
    cards.classList.add("grid-view");
});

listButton.addEventListener("click", () => {
    cards.classList.remove("grid-view");
    cards.classList.add("list-view");
});

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});