// New feature: Toggle between light and dark themes
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = 'Toggle Theme';
// Append the button to the header for better visibility
document.querySelector('header').appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.querySelector('header').classList.toggle('dark-theme');
    document.querySelector('section').classList.toggle('dark-theme');
    document.querySelector('footer').classList.toggle('dark-theme');
    document.querySelector('.blog-grid').classList.toggle('dark-theme');
    document.querySelector('aside').classList.toggle('dark-theme');
    
    // Change button color based on theme
    if (document.body.classList.contains('dark-theme')) {
        toggleThemeButton.style.backgroundColor = '#716b71';
    } else {
        toggleThemeButton.style.backgroundColor = '#805b83';
    }
});
