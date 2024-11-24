import createHome from './homePage.js';
import createMenu from './menu.js';
import createAbout from './about.js'; // Assuming there's an about page module
import './styles.css';

// Initialize the default view on page load
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    // Function to clear and render new content
    const renderPage = (createFunction) => {
        content.innerHTML = ''; // Clear previous content
        createFunction();
    };

    // Event listeners for navigation buttons
    const homeButton = document.getElementById('home');
    homeButton.addEventListener('click', () => renderPage(createHome));

    const menuButton = document.getElementById('menu');
    menuButton.addEventListener('click', () => renderPage(createMenu));

    const aboutButton = document.getElementById('about');
    aboutButton.addEventListener('click', () => renderPage(createAbout));

    // Render Home by default
    renderPage(createHome);
});
