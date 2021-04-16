
//Get reference point for appending elements
const pageContainer = document.querySelector(".tennis-match-counter-main");

//Create containers
let mainDiv = document.createElement("div");
let imgSection = document.createElement("section");
let textSection = document.createElement("section");
let inputSection = document.createElement('section')
let textSectionDiv1 = document.createElement("div");
let textSectionDiv2 = document.createElement("div");

//Create the elements which will go into the containers
let img = document.createElement("img");
let scoreKeeper = document.createElement('p');
let scoreKeeperSeparation = document.createElement("span");
let scoreKeeperPlayer1 = document.createElement("span");
let scoreKeeperPlayer2 = document.createElement("span");
let instructionParagraph = document.createElement("p");
let playingToButton = document.createElement('label');
let matchCountSelect = document.createElement("select");
let player1IncreasePoints = document.createElement("button");
let player2IncreasePoints = document.createElement("button");
let resetScoreLogicButton = document.createElement("button");
let player1NameInput = document.createElement('input');
let player2NameInput = document.createElement('input');

//Define elements

//Define img
let imgAdress = 'https://nwscdn.com/media/wysiwyg/3kf/Bat-and-ball-included-in-the-set.jpg';
img.src = `${imgAdress}`;
img.alt = "Image of 2 table tennis rackets";

//Add id's to divs so they can be targeted
textSectionDiv1.id = 'textSectionDiv1';
textSectionDiv2.id = 'textSectionDiv2';

//variables for storing values/scores
let player1Score = 0;
let player2Score = 0;
let playingTo = 1;
let isGameFinished = false;
let player1Name = 'Player 1';
let player2Name = 'Player 2';

//Check if Localstorage of score exists
if (localStorage.getItem('player1')) {
    getStoredScore();
}

if (localStorage.getItem('Player1Name')) {
    getStoredNames();
}

//Define score keeper
scoreKeeperPlayer1.innerText = `${player1Score}`;
scoreKeeperPlayer1.classList.add('tennis-match-score-counter');

scoreKeeperSeparation.innerText = ' ; ';
scoreKeeperSeparation.classList.add('tennis-match-score-counter');

scoreKeeperPlayer2.innerText = `${player2Score}`;
scoreKeeperPlayer2.classList.add('tennis-match-score-counter');

//Define paragraph
instructionParagraph.innerText = "Use the buttons below to adjust the score.";

//Define label
playingToButton.innerText = 'Playing to';
playingToButton.name = 'playingTo';

//Define select, select options
matchCountSelect.id = 'tennis-match-counter-select';
for (let i = 1; i <= 10; i++) {
    let matchCountSelectOption = document.createElement('option');
    matchCountSelectOption.value = i;
    matchCountSelectOption.innerText = i;
    matchCountSelectOption.name = 'playingTo';
    matchCountSelect.appendChild(matchCountSelectOption)
}

//Define buttons
player1IncreasePoints.innerText = `${player1Name}: +1`;
player1IncreasePoints.id = 'player1-increase';

player2IncreasePoints.innerText = `${player2Name}: +1`;
player2IncreasePoints.id = 'player2-increase';

resetScoreLogicButton.innerText = 'Reset';
resetScoreLogicButton.id = 'reset';

//Define input
player1NameInput.type = 'text';
player1NameInput.classList.add('tennis-match-username');
player1NameInput.placeholder = 'Username';
player1NameInput.maxLength = 3;

player2NameInput.type = 'text';
player2NameInput.classList.add('tennis-match-username');
player2NameInput.placeholder = 'Username';
player2NameInput.maxLength = 3;


//Append elements to containers

//Append to scoreKeeperSeparation
scoreKeeper.appendChild(scoreKeeperPlayer1);
scoreKeeper.appendChild(scoreKeeperSeparation);
scoreKeeper.appendChild(scoreKeeperPlayer2);

//Append relevant elements to textSectionDiv1
textSectionDiv1.appendChild(scoreKeeper);
textSectionDiv1.appendChild(instructionParagraph);
textSectionDiv1.appendChild(playingToButton);
textSectionDiv1.appendChild(matchCountSelect);

//Append relevant elements to textSectionDiv2
textSectionDiv2.appendChild(player1IncreasePoints);
textSectionDiv2.appendChild(resetScoreLogicButton);
textSectionDiv2.appendChild(player2IncreasePoints);

//Append relevant elemets to inputSection
inputSection.appendChild(player1NameInput);
inputSection.appendChild(player2NameInput);

//Append sub-sub-containers to textSection
textSection.appendChild(textSectionDiv1);
textSection.appendChild(textSectionDiv2);

//Append sub-sub-containers to imgSection
imgSection.appendChild(img);

//Append sub-containers to mainDiv
mainDiv.appendChild(imgSection);
mainDiv.appendChild(textSection);
mainDiv.appendChild(inputSection);

//Append mainDiv to page
pageContainer.appendChild(mainDiv);


//Post page load check for localStorage
setDefaultSelect();

//actual thing

//const for buttons
const playingToGet = document.querySelector('#tennis-match-counter-select');
const player1IncreaseButton = document.querySelector('#player1-increase');
const player2IncreaseButton = document.querySelector('#player2-increase');
const resetButton = document.querySelector('#reset');
const player1NameInputGet = document.querySelectorAll('.tennis-match-username')[0];
const player2NameInputGet = document.querySelectorAll('.tennis-match-username')[1];

//eventlistener to trigger relevant function
player1IncreaseButton.addEventListener('click', () => { changeScore(1) });
player2IncreaseButton.addEventListener('click', () => { changeScore(2) });
resetButton.addEventListener('click', () => { resetScoreLogic() });
player1NameInputGet.addEventListener('input', () => changeName(1))
player2NameInputGet.addEventListener('input', () => changeName(2))

//Update the players score, input = players score to update
function changeScore(input) {
    if (input == 1) {
        player1Score++;
    }
    else if (input==2) {
        player2Score++;
    }
    scoreKeeperPlayer1.innerText = `${player1Score}`;
    scoreKeeperPlayer2.innerText = `${player2Score}`;

    //Update the playing to score every iteration to allow change while playing
    playingTo = playingToGet.value;

    //Stores current scores in localStorage
    storeScore();

    //Check if the game is over
    reachedMaxScore();
}

//Reset score logic
function resetScoreLogic() {
    //If the game isn't finished ask for confirmation to reset score
    if (isGameFinished == false) {
        let confirmation = confirm('Are you sure?');
        if (confirmation == true) {
            resetScore();
        }
    }
    //If the game is finished, reset without asking for confirmation
    else {
        resetScore();
    }
}

//Reset score - reset playerScore, un-disable buttons
function resetScore() {
    player1Score = 0;
    player2Score = 0;
    player1Name = 'Player 1';
    player2Name = 'Player 2';
    scoreKeeperPlayer1.innerText = `${player1Score}`;
    scoreKeeperPlayer2.innerText = `${player2Score}`;
    player1IncreaseButton.innerText = `${player1Name}: +1`;
    player2IncreaseButton.innerText = `${player2Name}: +1`;
    document.querySelector('#player1-increase').disabled = false;
    document.querySelector('#player2-increase').disabled = false;

    //Reset localStorage with the exception of playingTo
    storeScore();

    //New game --> reset gameFinish logic
    isGameFinished = false;
}

//Change the name of the players, input - 1 = player1, 2 = player2
function changeName(input) {
    if (input == 1) {
        player1Name = player1NameInputGet.value;
        player1IncreaseButton.innerText = `${player1Name}: +1`;
    }
    else {
        player2Name = player2NameInputGet.value;
        player2IncreaseButton.innerText = `${player2Name}: +1`;
    }
}

//Is the game over - disable buttons
function reachedMaxScore() {
    if (playingTo == player1Score || playingTo == player2Score) {
        document.querySelector('#player1-increase').disabled = true;
        document.querySelector('#player2-increase').disabled = true;
        isGameFinished = true;
    }
}


//Localstorage

//If localStorage exists get scores from localStorage
function getStoredScore() {
    player1Score = localStorage.getItem('player1');
    player2Score = localStorage.getItem('player2');
    playingTo = localStorage.getItem('playingTo');
}

//If localStorage of names exists get playerName from localStorage
function getStoredNames() {
    player1Name = localStorage.getItem('Player1Name');
    player2Name = localStorage.getItem('Player2Name');
}

//Set the default select option to the stored value
function setDefaultSelect() {
    const defaultSelect = document.querySelector(`div#textSectionDiv1 option[value='${playingTo}']`);
    defaultSelect.selected = "selected";
}

//Store currents scores in localStorage
function storeScore() {
    localStorage.setItem('player1', player1Score);
    localStorage.setItem('player2', player2Score);
    localStorage.setItem('playingTo', playingTo);
    localStorage.setItem('Player1Name', player1Name);
    localStorage.setItem('Player2Name', player2Name);
}