import chefImageSrc from './images/chef.png';

function createHome() {
    const content = document.getElementById('content');
    const home = document.createElement('div'); // Corrected to use a valid HTML element
    home.classList.add('home'); // Add a class for styling
    content.appendChild(home);

    // Create and append the chef image

    // Add descriptive paragraphs
    home.appendChild(createParagraph("Best pizza in your country"));
    home.appendChild(createParagraph("Made with passion since 1908"));
    const chefImage = document.createElement('img');
    chefImage.src = chefImageSrc; // Use the imported image path
    chefImage.alt = 'Chef';
    home.appendChild(chefImage);
    home.appendChild(createParagraph("Order online or visit us!"));
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

export default createHome;
