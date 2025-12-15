// optional JS
// ===============================
// BACK TO TOP – SMOOTH SCROLL
// ===============================
const backToTopLinks = document.querySelectorAll(".back-to-top");

backToTopLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// ===============================
// HIGHLIGHT CURRENT NAV PAGE
// ===============================
const navLinks = document.querySelectorAll(".navbar a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.textDecoration = "underline";
    }
});


// ===============================
// GREETING BUTTON (HOME PAGE)
// ===============================
const greetButton = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");

if (greetButton && greeting) {
    greetButton.addEventListener("click", function () {
        greeting.textContent = "Welcome! Thanks for checking out my website";
    });
}


// ===============================
// CHANGE BLUE ACCENT COLOR
// ===============================
const colorButton = document.getElementById("colorButton");
const headings = document.querySelectorAll("h1, h2, h3");

if (colorButton) {
    colorButton.addEventListener("click", function () {

        headings.forEach(function (heading) {
            if (heading.style.color === "red") {
                heading.style.color = "#1e88e5";
            } else {
                heading.style.color = "red";
            }
        });

    });
}