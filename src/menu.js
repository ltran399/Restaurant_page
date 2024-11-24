import salsicciaImg from './images/pizzas/salsiccia.png';

function createMenu() {
    const content = document.getElementById('content');
    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);

    // Add menu items
    const menuItems = [
        {imgScr:salsicciaImg,name: 'Salsiccia', description: "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"},
        {imgScr:'./images/pizzas/gamberi.png',name:'Gamberi', description: "Tomato sauce, Mozarella, Shrimps, Geta cheese, Olives, Basil"},
        {imgScr:'./images/pizzas/pepe.png',name:'Pepe', description:"Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"},
        {imgScr:'./images/pizzas/disgustoso.png',name:'Disgusto', description:"Tomato sauce, Bacon, Pineapple, Olives, Basil"},
        {imgScr:'./images/pizzas/colorato.png',name:'Colorato', description:"Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"},
        {imgScr:'./images/pizzas/pomodoro.png',name:'Pomodoro', description:"Tomoto sauce, Mozarella, Tomato, Onion, Feta Cheese, Chilli"},
        {imgScr:'./images/pizzas/crema.png', name:'Crema', description:"White sauce, Mozarella, Shrimps, Pineapple, Olives, Basil"},
        {imgScr:'./images/pizzas/carne.png', name:'Carne', description:"Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"}
    ]

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menu.appendChild(menuItem);

        const img = document.createElement('img');
        img.scr = item.imgScr;
        img.alt = item.name;
        menuItem.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = item.name;
        menuItem.appendChild(name);

        const description = document.createElement('p');
        description.textContent = item.description;
        menuItem.appendChild(description);
    });
}

export default createMenu;