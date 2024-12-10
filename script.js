// New feature: Toggle between light and dark themes
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = 'Toggle Dark Mode';
document.querySelector('header').appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.querySelector('header').classList.toggle('dark-theme');
    document.querySelector('section').classList.toggle('dark-theme');
    document.querySelector('footer').classList.toggle('dark-theme');
    document.querySelector('.blog-grid').classList.toggle('dark-theme');
    document.querySelector('aside').classList.toggle('dark-theme');
    
    // Change button color and icon based on theme
    if (document.body.classList.contains('dark-theme')) {
        toggleThemeButton.style.backgroundColor = '#716b71';
        toggleThemeButton.style.backgroundImage = "url('/images/sun.png')";
        toggleThemeButton.textContent = 'Toggle Light Mode';
    } else {
        toggleThemeButton.style.backgroundColor = '#805b83';
        toggleThemeButton.style.backgroundImage = "url('/images/moon.png')";
    }
});
