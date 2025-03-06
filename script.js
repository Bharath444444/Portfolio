// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get navbar height dynamically
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight, // Adjust scroll position
                behavior: 'smooth'
            });
        }
    });
});


// Highlight active section in the navbar
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-links a");

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove("active")); // Remove active class
            let activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active"); // Highlight current section
            }
        }
    });
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

const typingText = ["Web Developer", "Frontend Engineer", "Tech Enthusiast"];
let index = 0, charIndex = 0;
const typingElement = document.querySelector('.typing');

function typeEffect() {
    if (!typingElement) return; // Prevent errors if element doesn't exist
    typingElement.textContent = typingText[index].substring(0, charIndex);
    
    if (charIndex < typingText[index].length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (!typingElement) return;
    typingElement.textContent = typingText[index].substring(0, charIndex);
    
    if (charIndex > 0) {
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % typingText.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typingElement.textContent = ""; // Ensures empty text at start
    typeEffect();
});
