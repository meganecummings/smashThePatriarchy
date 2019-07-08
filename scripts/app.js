console.log('SMASH IT');

// ------------------------- CONSTANTS ------------------------- // 

const playingCards = [
    {
        name: 'sexistAlexa',
        type: 'patriarchy',
        cardImage: 'assets/patriarchyCards/sexistAlexa.png',
    },
    {
        name: 'sexistScarlett',
        type: 'patriarchy',
        cardImage: 'assets/patriarchyCards/scarlettGoogle.png',
    },
    {
        name: 'momChanging',
        type: 'patriarchy',
        cardImage: 'assets/patriarchyCards/momChanging.png',
    },
    {
        name: 'tennisQuestions',
        type: 'patriarchy',
        cardImage: 'assets/patriarchyCards/tennis_outfit.jpeg',
    },
    {
        name: 'beachBody',
        type: 'patriarchy',
        cardImage: 'assets/patriarchyCards/beachBody.png',
    },
    {
        name: 'naughtyLeopard',
        type: 'patriarchy',
        cardImage: 'assets/patriarchyCards/naughtyleopard.jpeg',
    },
    {
        name: 'yorkiecandy',
        type: 'patriarchy',
        cardImage: 'assets/patriarchyCards/yorkieCandy.png',
    },
    {
        name: 'trumpHooters',
        type: 'patriarchy',
        cardImage: 'assets/patriarchyCards/trumpHooters.png',
    },
    {
        name: 'manPresents',
        type: 'patriarchy',
        cardImage: 'assets/patriarchyCards/man_presents.png',
    },
    {
        name: 'misspacman',
        type: 'patriarchy',
        cardImage: 'assets/patriarchyCards/mrspacman.png',
    },
    {
        name: 'femaleshopper',
        type: 'patriarchy',
        cardImage: 'assets/patriarchyCards/femaleshopper.png',
    },
    {
        name: 'siriNotSexist',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/siriNotSexist.jpeg',
    },
    {
        name: 'sushiRolls',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/sushiRolls.jpeg',
    },
    {
        name: 'allGender',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/allGender.jpeg',
    },
    {
        name: 'endPatriarchy',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/endPatriarchy.jpeg',
    },
    {
        name: 'beachBody',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/beachBody.png',
    },
    {
        name: 'firefighter',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/firefighternurse.png',
    },
    {
        name: 'boycook',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/boycook.png',
    },
    {
        name: 'barbies',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/barbie.png',
    },
    {
        name: 'nothot',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/hotnot.png',
    },
    {
        name: 'laundry',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/laundry.png',
    },
    {
        name: 'girlhandy',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/girlhandy.png',
    },
    {
        name: 'femaleathlete',
        type: 'notPatriarchy',
        cardImage: 'assets/notPatriarchyCards/femaleathlete.png',
    },
]

// ------------------------- STATE VARIABLES ------------------------- // 

// Establish Game Init Variables
let time = 20;
let round = 1;
let score = 0;
let highScore;
const $nameForm = $('#nameForm').val();

// ------------------------- CACHED DOM ELEMENTS ------------------------- // 

// track high score
let $highScore = $('.highScore');
// track player score
let $playerScore = $('.playerScore');
// Quit Button to Move to Quit Screen on Header
const $btnQuit = $('#quitBtn');
// Quit Button to Move to Quit Screen on Header
const $buttonQuit = $('#quitButton');
//Start Button Const Variable
const $highScorePage = $('#highScore');
//Start Button Const Variable
const $buttonStart = $('#startBtn');
// Button to Move to Game Start Screen
const $btnToGame = $('#btnToGame');
// Button to Move to Instructions Screen
const $btnToInstruct = $('#btnToInstruct');
// Track Names from Name Form
let $name = $('#nameForm');
// Button to Move to Next Round
const $playAgainBtn = $('#playAgainBtn');

// ------------------------- FUNCTIONS ------------------------- //

//Create Cards
const createCards = numberOfCards => {
    console.log('Make game!', numberOfCards);
    // create cards variable from class squares

    const $cards = $('.cards');
    // for loop through #of Cards...
    for (let i = 0; i <= numberOfCards; i++) {
        // to create a individual card variable (container for cards)
        const $card = $('<div/>');
        // add class to the card...
        $card.addClass('card');
        // trigger functions for card selection
        $card.css('background-image', applyRandomCard());
        // add cards to container! 
        $cards.append($card);
    };
    $('.cards').show();

};

const applyRandomCard = () => {
    const index = Math.floor(Math.random() * playingCards.length);
    return `url(${playingCards[index].cardImage})`;
}

// // HIGH SCORE SHEET from phaserjs.com
// function createHighScore(event) {
//     event.preventDefault();
//     const newName = {id: new Date().getTime(), name: $nameInput, score: score};
//     console.log(newName);
//     render(newName, $name);
//     highScore = Math.max(score, highScore);
//     localStorage.setItem(localStorageName, highScore);

// }

// function getNameTemplate(name) {
//     if (score > localStorage.getItem('highScore')) {
//         localStorage.setItem('highScore', score);
//     };
//     return `
//     <div class="col-md-3 offset-md-1 p-4 mb-4 bg-dark text-light" id="highScores">
//     <button data-nameid=${name.id} class='btn btn-sm btn-danger delete-name float-right'>&times;</button>
//     <h4>${name.name}</h4>
//     <p>${name.score}</p>
//     </div>
//     `
// }

// function render(dataObj, domElement) {
//     // first make a request to get a template, then cache it
//     // this getHighScore Template will return us a template string with all the data included in it
//     const template = getHighScoreTemplate(dataObj); 
//     // now lets append to the domElement!
//     domElement.append(template);
// }

const gameInit = () => {
    // Game starts with 6 cards showing back images. 
    $playerScore = 0;
    Round = 1;
    createCards();
}


const setTimer = () => {
    const timer = setInterval(() => {
        time--;
        if (time === 0) {
            if (round < 3) {
                $('.gameStart').empty();
                $('#mainHeader').hide();
                $('#cardContainer').hide();
                $('.cards').hide();
                $('.options').show();
            };
            if (time <= 0) {
                clearInterval(timer);
            };
            console.log('Out of time!');
            $('#mainHeader').hide();
            $('.options').show();
            if (round === 3) {
                $('.gameWin').show();
                $('.highScore').show();
                $('.options').hide();
                $('.cards').hide();
            }
        };
        updateTime();
    }, 1000);
};


// Build outcome for clicking on target card and cueing check of patriarchy type. 
const handleClick = event => {
    $(event.target).css('opacity', 0.3);
    const type = $(event.target).css('background-image');
    checkValidClick(type);
};

$('#scoreCard').text(`Score: ${score}`);

// Confirm a function to see if the card is valid for a point! 
const checkValidClick = type => {
    if (type.includes('/patriarchy')) {
        score++;
        $('#scoreCard').text(`Score: ${score}`);
    } else {
        score--;
        $('#scoreCard').text(`Score: ${score}`);
    }
}

//Create a Function to Update Timer Card
const updateTime = () => {
    $('#timer').text(`Timer: ${time}s`);
}

// Function to Set up Each Round & Cue Game Win state if Round > 3.
const setUpRound = timer => {
    //clear cards
    $('.cards').empty();
    $('#round').text(`Round: ${round}`);
    if (round === 1) {
        createCards(40);
        time = 5;
    } else if (round === 2) {
        createCards(40);
        time = 5;
    } else if (round === 3) {
        createCards(40);
        time = 5;
    } else {
        console.log(`GAME IS OVER`);
        $('.gameStart').empty();
        $('#mainHeader').empty();
        $('.gameWin').show();
    };
}


// ------------------------- EVENT LISTENERS ------------------------- // 

// button to change screen from Intro --> Instruction
$btnToInstruct.on('click', () => {
    // clear content from Intro
    $('.introHeader').empty();
    // show Instructions
    $('.instructHeader').show();
}
)

// Button to change screen from Instructions --> Game Start
$btnToGame.on('click', () => {
    $('.instructHeader').empty();
    $('#mainHeader').show();
    gameInit();
})

// $name.on('submit', gameStart);

// Start Button Click to Initiate Game
$buttonStart.on('click', () => {
    console.log('Start Game!');
    setUpRound();
    setTimer();
})

// Play Again Btn 
$playAgainBtn.on('click', () => {
    console.log('Next Round');
    $('.cards').empty();
    $('.options').hide();
    round++;
    setUpRound();
    setTimer();
    $('#mainHeader').show();
})

// Quit Button Click to Quit Screen
$btnQuit.on('click', () => {
    console.log('QUITTER!');
    $('.gameStart').empty();
    $('.cards').empty();
    $('#mainHeader').empty();
    $('.options').empty();
    $('.gameQuit').show();
})

// Quit Button Click to Quit Screen
$buttonQuit.on('click', () => {
    console.log('QUITTER!');
    $('.gameStart').empty();
    $('.cards').empty();
    $('.options').empty();
    $('#mainHeader').empty();
    $('.gameQuit').show();
})

// Quit Button Click to Quit Screen
$highScorePage.on('click', () => {
    $('.gameStart').empty();
    $('.cards').empty();
    $('.options').empty();
    $('#mainHeader').empty();
    $('.highScorePage').show();
})

//Event listener for Clicking on the Cards
$('.cards').on('click', '.card', event => {
    handleClick(event);
}
);

// $nameForm.on('submit', createHighScore());

