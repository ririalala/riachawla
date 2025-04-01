// script.js

// Function to animate the body on load
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
    document.body.style.transform = "translateY(0)";
});

document.addEventListener("DOMContentLoaded", () => {
    // Function to animate each button
    const animateButton = (buttonId, delay) => {
        const button = document.getElementById(buttonId);
        button.style.opacity = "0";
        button.style.transform = "translateX(-100px)";
        button.style.transition = "opacity .5s ease-out, transform .5s ease-out";
        
        setTimeout(() => {
            button.style.opacity = "1";
            button.style.transform = "translateX(0)";
        }, delay);
    };

    // Call the function for each button with staggered delays
    animateButton("work", 100);       // "work" button appears after 0.1 sec
    animateButton("research", 400);   // "research" button appears after 0.6 sec
    animateButton("art", 700);       // "art" button appears after 1.1 sec
    animateButton("about", 1000);     // "about" button appears after 1.6 sec
    animateButton("resume", 1300);    // "resume" button appears after 2.1 sec
});
