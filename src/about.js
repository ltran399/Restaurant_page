import locationImgPath from './images/restaurant-location.png';
function createAbout(){
    const content = document.getElementById('content');
    const about = document.createElement('div');
    about.classList.add('about');
    content.appendChild(about);

    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent = "This is a restaurant that serves delicious pizza. We are open from 10 AM to 10 PM every day. Feel free to visit!";
    about.appendChild(aboutParagraph);

    const locationImg = document.createElement('img');
    locationImg.src =locationImgPath;
    locationImg.alt = 'location';
    about.appendChild(locationImg);
}

export default createAbout;