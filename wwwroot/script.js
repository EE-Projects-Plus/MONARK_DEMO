////// Ensure the function is defined in the global scope

window.toggleMenu = function () {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar"); // Properly defining the navbar variable

    if (menuIcon && navbar) {
        // Setting the click event handler for the menu icon
        menuIcon.onclick = function () {
            // Optional additional toggles if needed
            menuIcon.classList.toggle('bx-x'); // Changes the icon style
            navbar.classList.toggle('open'); // Controls the navbar visibility
        }
    } else {
        console.error('Menu icon or navbar not found in the DOM.');
    }
};


//Java script to transition content on screen by scrolling down
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// JavaScript to lazy load background images
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const options = {
        threshold: 0 // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bgImage = entry.target.getAttribute("data-bg-image");
                entry.target.style.backgroundImage = `url('${bgImage}')`;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
