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

// Duplicating cards for matching from http.
let gameGrid = cardsArray.concat(cardsArray);

// Shuffle cards function from http.
gameGrid.sort(() => 0.5 - Math.random());

// Global variables
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let timerStart = false;
let clickCounter = 0;


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

// Cards are a match fuction 
let cardsMatch = () => {
    var selected = document.querySelectorAll('.selected');
    selected.forEach((gameCard) => {
        gameCard.classList.add('cardMatch');
    });
}

let cardsNoMatch = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;

    var selected = document.querySelectorAll('.selected');
    selected.forEach((gameCard) => {
        gameCard.classList.remove('selected');
    });
}

// Add event listner to cards in game area

cardGrid.addEventListener('click', function(event) {
    let clicked = event.target;

    if (clicked.nodeName === 'SECTION' || clicked === previousTarget) {
        return;
    }

    // Add the selected class
    if (count < 2) {
        count++
        if (count === 1) {
            firstGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        } else {
            secondGuess = clicked.dataset.name;
            clicked.classList.add('selected');
        }

        if (firstGuess !== '' && secondGuess !== '') {
            if (firstGuess === secondGuess) {
                setTimeout(cardsMatch, delay);
                setTimeout(cardsNoMatch, delay);
            } else {
                setTimeout(cardsNoMatch, delay);
            }
        }

        previousTarget = clicked;
    }    
});

