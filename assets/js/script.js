// Game cards array

const cardsArray = [
    {
        name: 'brown Crewmate', img: 'assets/imgs/brownCrewmate.png',
    },
    {
        name: 'dead Crewmate', img: 'assets/imgs/deadCrewmate.png',
    },
    {
        name: 'green Crewmate', img: 'assets/imgs/greenCrewmate.png',
    },
    {
        name: 'lime Crewmate', img: 'assets/imgs/limeCrewmate.png',
    },
    {
        name: 'orange Crewmate', img: 'assets/imgs/orangeCrewmate.png',
    },
    {
        name: 'pink Crewmate', img: 'assets/imgs/pinkCrewmate.png',
    },
    {
        name: 'red Crewmate', img: 'assets/imgs/redCrewmate.png',
    },
    {
        name: 'teal Crewmate', img: 'assets/imgs/tealCrewmate.png',
    },
]


// Match function from http.

let gameArea = document.getElementById('gameArea');

let cardGrid = document.createElement('section');
cardGrid.setAttribute('class', 'cardGrid');

gameArea.appendChild(cardGrid);

gameGrid.forEach((item) => {
    // create div for card
    let gameCard = document.createElement('div');

    // Apply class to the div
    gameCard.classList.add('gameCard');

    // Set a dataset attribute to the div
    gameCard.dataset.name = item.name;

    // Apply img to card div
    gameCard.style.backgroundImage = `url(${item.img})`;

    // Append the div to the game card area
    cardGrid.appendChild(gameCard);
});
