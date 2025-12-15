//https://www.w3schools.com/jsref/met_document_queryselector.asp this website was refernced for document.querySelectorAll

// smooth scroll back to the top
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

// underline current page selection in nav bar
const navLinks = document.querySelectorAll(".navbar a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.textDecoration = "underline";
    }
});

// greet button function
const greetButton = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");

if (greetButton && greeting) {
    greetButton.addEventListener("click", function () {
        greeting.textContent = "Welcome! Thanks for checking out my website";
    });
}

// changing accent color
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

//Making a picture galory of my pets
function pageSetup() {
    document.getElementById("itemIzzy").style.display = 'block';
    document.getElementById("itemKumar").style.display = 'none';
    document.getElementById("itemGizmo").style.display = 'none';
}

function getNext() {
    let Izzy = document.getElementById("itemIzzy");
    let Kumar = document.getElementById("itemKumar");
    let Gizmo = document.getElementById("itemGizmo");

    if (Izzy.style.display == 'block') {
        Izzy.style.display = 'none';
        Kumar.style.display = 'block';
    } 
    else if (Kumar.style.display == 'block') {
        Kumar.style.display = 'none';
        Gizmo.style.display = 'block';
    }
}

function getPrevious() {
    let Izzy = document.getElementById("itemIzzy");
    let Kumar = document.getElementById("itemKumar");
    let Gizmo = document.getElementById("itemGizmo");

    if (Gizmo.style.display === 'block') {
        Gizmo.style.display = 'none';
        Kumar.style.display = 'block';
    } 
    else if (Kumar.style.display === 'block') {
        Kumar.style.display = 'none';
        Izzy.style.display = 'block';
    }
}

pageSetup();
