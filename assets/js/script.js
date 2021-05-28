// The JavaScript to create the game made by following Tania Rascia
// (https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/)
// Game cards array
// jshint esversion: 6

const cardsArray = [
    {
        name: 'brown Crewmate', img: 'assets/imgs/brownCrewmate-min.jpg',
    },
    {
        name: 'dead Crewmate', img: 'assets/imgs/deadCrewmate-min.jpg',
    },
    {
        name: 'green Crewmate', img: 'assets/imgs/greenCrewmate-min.jpg',
    },
    {
        name: 'lime Crewmate', img: 'assets/imgs/limeCrewmate-min.jpg',
    },
    {
        name: 'orange Crewmate', img: 'assets/imgs/orangeCrewmate-min.jpg',
    },
    {
        name: 'pink Crewmate', img: 'assets/imgs/pinkCrewmate-min.jpg',
    },
    {
        name: 'red Crewmate', img: 'assets/imgs/redCrewmate-min.jpg',
    },
    {
        name: 'teal Crewmate', img: 'assets/imgs/tealCrewmate-min.jpg',
    },
];

const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

// Global variables
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let flips = 0;
let cardCount = 0;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

// Flips counter function
let counter = document.querySelector(".flips");
let totalFlips = document.querySelector('.totalFlips');
let quitFlips = document.querySelector('.quitFlips');

function flipsCounter() {
    flips++;    
    counter.innerHTML = flips;
    totalFlips.innerHTML = flips;
    quitFlips.innerHTML = flips;
}

// Victory modal popup
let victoryPopup = document.getElementById('victoryPopup');


function victory(flips) {
    setInterval(function() {
        victoryPopup.classList.remove('victory');
    }, 500);    
}



grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
      flipsCounter();
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
      flipsCounter();
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
          cardCount++;
          setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }

  if (cardCount === 8) {
      console.log(cardCount);
      victory();
  }

});


function restart() {
    document.location.href = "";
}