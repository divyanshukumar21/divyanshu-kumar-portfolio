document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact-form");
    const status = document.querySelector("#form-status");

    if (form && status) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            status.textContent =
                "Thank you! Your message has been recorded for this portfolio demonstration.";

            form.reset();
        });
    }
});
