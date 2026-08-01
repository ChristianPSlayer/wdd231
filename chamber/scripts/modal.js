const modalLinks = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll(".close-btn");

modalLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const modal = document.querySelector(`#${link.dataset.modal}`);

        modal.showModal();

    });

});

closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.closest("dialog").close();

    });

});