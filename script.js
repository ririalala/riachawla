// script.js
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("animateBtn");
    
    button.addEventListener("click", function() {
        button.style.transform = "scale(1.2)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 300);
    });
});
