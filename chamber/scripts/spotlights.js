
const spotlightContainer = document.querySelector("#spotlight-container");
const membersURL = "data/members.json";

async function getSpotlights() {
    try {
        const response = await fetch(membersURL);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        const qualifiedMembers = data.filter(member =>
            member.membership === 2 || member.membership === 3
        );

        const randomMembers = qualifiedMembers.sort(() => 0.5 - Math.random());

        const spotlightMembers = randomMembers.slice(0, 3);

        spotlightMembers.forEach(member => {
            const card = document.createElement("section");

      card.innerHTML = `
    <img src="images/${member.image}" alt="${member.name} logo">

    <h3>${member.name}</h3>

    <p class="industry">${member.industry}</p>

    <p>${member.phone}</p>

    <a href="${member.website}" target="_blank">Visit Website</a>
`;

            spotlightContainer.appendChild(card);
        });

        console.log(spotlightMembers);



        //   console.log(data);

    } catch (error) {
        console.error(error);
    }
}

getSpotlights();