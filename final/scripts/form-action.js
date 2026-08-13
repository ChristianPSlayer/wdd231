const results = document.querySelector("#form-results");

const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const email = params.get("email");
const bike = params.get("bike");
const experience = params.get("experience");
const comments = params.get("comments");

const priorities = params.getAll("priority");

results.innerHTML = `
    <h3>Submitted Information</h3>

    <p><strong>Name:</strong> ${name || "Not provided"}</p>

    <p><strong>Email:</strong> ${email || "Not provided"}</p>

    <p><strong>E-Bike Type:</strong> ${bike || "Not provided"}</p>

    <p><strong>Experience:</strong> ${experience || "Not provided"}</p>

    <p><strong>Priorities:</strong>
        ${priorities.length > 0 ? priorities.join(", ") : "None selected"}
    </p>

    <p><strong>Comments:</strong>
        ${comments || "No comments provided"}
    </p>
`;