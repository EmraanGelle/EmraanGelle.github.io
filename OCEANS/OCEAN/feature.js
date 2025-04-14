document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); 
        const card = button.closest('.education-card');
        const paragraph = card.querySelector('p');

        if (paragraph.classList.contains('hidden')) {
            paragraph.classList.remove('hidden');
            button.textContent = 'Hide Content';
        } else {
            paragraph.classList.add('hidden');
            button.textContent = 'Learn More';
        }
    });
});