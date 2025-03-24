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