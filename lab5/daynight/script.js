document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    const body = document.body;
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const paragraphs = document.querySelectorAll("p");

    button.addEventListener("click", function () {
        body.classList.toggle("night-mode");
        if (body.classList.contains("night-mode")) {
            h1.textContent = "GOOD NIGHT";
            h2.textContent = "This is night time!";
        } else {
            h1.textContent = "GOOD MORNING";
            h2.textContent = "This is day time!";
        }

        paragraphs.forEach(function (paragraph) {
            paragraph.style.color = p.classList.contains("night-mode") ? "blue" : "red";
        });
    });
});
