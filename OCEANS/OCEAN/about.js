// Add this at the end of your `ocean.js` or a new script tag at the bottom of the page
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / maxScroll;

    const depthLevels = [
        '#70c5ce', // Sunlight Zone
        '#4c9b94', // Twilight Zone
        '#3b7a7f', // Midnight Zone
        '#2f5855', // Abyssal Zone
        '#1f3830'  // Hadal Zone
    ];

    // Determine the sea level color based on scroll position
    const currentLevel = Math.min(Math.floor(scrollPercentage * (depthLevels.length - 1)), depthLevels.length - 1);
    document.querySelector('main').style.background = `linear-gradient(to bottom, ${depthLevels[currentLevel]}, #000000)`;
});
