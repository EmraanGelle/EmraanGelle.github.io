document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (e) {
        let rippleCount = 3; // Number of ripples to create
        let delay = 100; // Delay between each ripple (in milliseconds)
        let size = Math.max(window.innerWidth, window.innerHeight) * 0.15; // Ripple size
        let x = e.clientX - size / 2;
        let y = e.clientY - size / 2;

        for (let i = 0; i < rippleCount; i++) {
            setTimeout(function () {
                let ripple = document.createElement("span");
                ripple.classList.add("ripple");

                ripple.style.width = `${size}px`;
                ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;

                // Slightly adjust the size for each ripple for a more dynamic effect
                ripple.style.animationDelay = `${i * 0.2}s`; // Stagger the animation start

                document.body.appendChild(ripple);

                ripple.addEventListener("animationend", () => {
                    ripple.remove();
                });
            }, i * delay); // Delay between each ripple creation
        }
    });
});

$(document).ready(function () {
    $('body').ripples({
        resolution: 512,
        dropRadius: 15, // Ripple size for the jQuery effect
        perturbance: 0.02, // Slower effect for jQuery ripples
    });
});
