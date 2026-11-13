// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// CLOSE MENU AFTER CLICKING A LINK

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {

        formMessage.textContent = "Please complete all fields.";

        return;

    }

    formMessage.textContent =
        "Demo form submitted! Connect a backend to receive messages.";

    contactForm.reset();

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".service-card, .process-card, .about-content, .developer-card, .stat-box"
);

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});