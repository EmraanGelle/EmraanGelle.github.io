document.querySelectorAll('.card').forEach(card => {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'toggle-btn';
    toggleBtn.textContent = '▲ Hide';
    card.prepend(toggleBtn); 

    let isVisible = true;
    
    toggleBtn.addEventListener('click', () => {
        const content = card.querySelector('.card-content');
        content.classList.toggle('hidden');
        isVisible = !isVisible;
        toggleBtn.textContent = isVisible ? '▲ Hide' : '▼ Information';
    });
});

const style = document.createElement('style');
style.textContent = `
    .hidden { display: none; }
    .toggle-btn {
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 5px 10px;
        background: rgba(255,255,255,0.9);
        border: 1px solid blue;
        cursor: pointer;
        z-index: 2;
    }
    .card { position: relative; } 
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function () {
    const bubbleContainer = document.querySelector(".bubbles-container");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${3 + Math.random() * 5}s`; // 3s to 8s random duration

        // Set random size for the bubble
        const size = `${10 + Math.random() * 40}px`; // Bubble size between 10px and 50px
        bubble.style.width = size;
        bubble.style.height = size;

        bubbleContainer.appendChild(bubble);

        setTimeout(() => {
            bubble.remove(); // Remove bubble after animation ends
        }, 8000);
    }

    setInterval(createBubble, 500);
});

document.getElementById('explore-btn').addEventListener('click', function() {
    document.getElementById('cards-section').scrollIntoView({ behavior: 'smooth' });
});

