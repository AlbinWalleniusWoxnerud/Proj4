
//Get reference point for appending elements
const pageContainer = document.querySelector(".tennis-match-counter-main");

//Create containers
let mainDiv = document.createElement("div");
let imgSection = document.createElement("section");
let textSection = document.createElement("section");
let textSectionDiv1 = document.createElement("div");
let textSectionDiv2 = document.createElement("div");
let inputSection = document.createElement('section')
let resetSection = document.createElement('section')
let matchHistorySection = document.createElement('section');

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
let newMatchButton = document.createElement("button");
let player1NameInput = document.createElement('input');
let player2NameInput = document.createElement('input');
let reset = document.createElement('button');
let matchHistory = document.createElement('table');
let matchHistoryHead = document.createElement('thead');
let matchHistoryHeadRow = document.createElement('tr');
let matchHistoryHeadTag = document.createElement('th');
let matchHistoryBody = document.createElement('tbody');


//Define elements

//Add id's to containers so they can be targeted and differentiated
mainDiv.id = 'tennis-match-counter-main-div';
imgSection.id = 'tennis-match-counter-main-div-img-section';
textSection.id = 'tennis-match-counter-main-div-text-section';
textSectionDiv1.id = 'textSectionDiv1';
textSectionDiv2.id = 'textSectionDiv2';
inputSection.id = 'tennis-match-counter-main-div-input-section';
resetSection.id = 'tennis-match-counter-main-div-reset-section';
matchHistorySection.id = 'tennis-match-counter-main-div-matchhistory-section';

//Define img
let imgAdress = 'https://nwscdn.com/media/wysiwyg/3kf/Bat-and-ball-included-in-the-set.jpg';
img.src = `${imgAdress}`;
img.alt = "Image of 2 table tennis rackets";

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

newMatchButton.innerText = 'New Match';
newMatchButton.id = 'newMatch';

//Define input
player1NameInput.type = 'text';
player1NameInput.classList.add('tennis-match-username');
player1NameInput.placeholder = 'Username';
player1NameInput.maxLength = 3;

player2NameInput.type = 'text';
player2NameInput.classList.add('tennis-match-username');
player2NameInput.placeholder = 'Username';
player2NameInput.maxLength = 3;

//Define match history
matchHistoryHeadTag.innerText = 'Match History';

//Define reset
reset.innerText = 'Complete Reset';
reset.id = 'complete-reset';


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
textSectionDiv2.appendChild(newMatchButton);
textSectionDiv2.appendChild(player2IncreasePoints);

//Append relevant elemets to inputSection
inputSection.appendChild(player1NameInput);
inputSection.appendChild(player2NameInput);

//Append reset button to resetSection
resetSection.appendChild(reset);

//Append things to matchHistorySection
matchHistoryHeadRow.appendChild(matchHistoryHeadTag);
matchHistoryHead.appendChild(matchHistoryHeadRow);
matchHistory.appendChild(matchHistoryHead);
matchHistory.appendChild(matchHistoryBody);
matchHistorySection.appendChild(matchHistory);
 
//Append sub-sub-containers to textSection
textSection.appendChild(textSectionDiv1);
textSection.appendChild(textSectionDiv2);

//Append sub-sub-containers to imgSection
imgSection.appendChild(img);

//Append sub-containers to mainDiv
mainDiv.appendChild(imgSection);
mainDiv.appendChild(textSection);
mainDiv.appendChild(inputSection);
mainDiv.appendChild(resetSection);
mainDiv.appendChild(matchHistorySection);

//Append mainDiv to page
pageContainer.appendChild(mainDiv);


//Post page load check for localStorage
setDefaultSelect();


//actual thing/actual app

//const for buttons
const playingToGet = document.querySelector('#tennis-match-counter-select');
const player1IncreaseButton = document.querySelector('#player1-increase');
const player2IncreaseButton = document.querySelector('#player2-increase');
const newMatchButtonLogic = document.querySelector('#newMatch');
const player1NameInputGet = document.querySelectorAll('.tennis-match-username')[0];
const player2NameInputGet = document.querySelectorAll('.tennis-match-username')[1];
const resetButton = document.querySelector('#complete-reset');

//eventlistener to trigger relevant function
player1IncreaseButton.addEventListener('click', () => { changeScore(1) });
player2IncreaseButton.addEventListener('click', () => { changeScore(2) });
newMatchButtonLogic.addEventListener('click', () => { newMatchLogic() });
player1NameInputGet.addEventListener('input', () => {changeName(1) })
player2NameInputGet.addEventListener('input', () => { changeName(2) })
resetButton.addEventListener('click', () => { Reset() });

//Update the players score, input = players score to update
function changeScore(input) {
    switch (input) {
        case 1:
            player1Score++;
            break;
        case 2:
            player2Score++;
            break;
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

//new matcc logic
function newMatchLogic() {
    //If the match isn't finished ask for confirmation to Reset score and start new match
    if (isGameFinished == false) {
        let confirmation = confirm('Are you sure?');
        if (confirmation == true) {
            ResetScore();
        }
    }
    //If the match is finished, Reset without asking for confirmation and start new match
    else {
        ResetScore();
    }
}

//Reset score - Reset playerScore, un-disable buttons
function ResetScore() {
    player1Score = 0;
    player2Score = 0;
    scoreKeeperPlayer1.innerText = `${player1Score}`;
    scoreKeeperPlayer2.innerText = `${player2Score}`;
    player1NameInputGet.value = '';
    player2NameInputGet.value = '';
    document.querySelector('#player1-increase').disabled = false;
    document.querySelector('#player2-increase').disabled = false;

    //Reset localStorage with the exception of playingTo
    storeScore();

    //New game --> Reset gameFinish logic
    isGameFinished = false;
}

//Change the name of the players, input - 1 = player1, 2 = player2
function changeName(input) {
    switch (input) {
        case 1:
            if (player1NameInputGet.value !== '') {
                player1Name = player1NameInputGet.value;
                player1IncreaseButton.innerText = `${player1Name}: +1`;
            }
            else {
                player1Name = 'Player 1';
                player1IncreaseButton.innerText = `${player1Name}: +1`;
            }
            break;
        case 2:
            if (player2NameInputGet.value !== '') {
                player2Name = player2NameInputGet.value;
                player2IncreaseButton.innerText = `${player2Name}: +1`;
            }
            else {
                player2Name = 'Player 2';
                player2IncreaseButton.innerText = `${player2Name}: +1`;
            }
            break;
    }
}

//Is the game over
function reachedMaxScore() {
    if (playingTo == player1Score) {
        //Match is over, disable buttons
        gameOver();
        //Add match to match history
        addToMatchHistory(1);
    }
    else if (playingTo == player2Score) {
        //Match is over, disable buttons
        gameOver();
        //Add match to match history
        addToMatchHistory(2);
    }
}

function gameOver() {
    document.querySelector('#player1-increase').disabled = true;
    document.querySelector('#player2-increase').disabled = true;
    isGameFinished = true;
}

function addToMatchHistory(input) {
    let matchHistoryBodyRow = document.createElement('tr');
    let matchHistoryBodyTdWinner = document.createElement('td');
    let matchHistoryBodyTdScore = document.createElement('td');
    switch (input) {
        case 1:
            matchHistoryBodyTdWinner.innerText = `${player1Name}`;
            matchHistoryBodyTdScore.innerText = `${player1Score} to ${player2Score}`
            break;
        case 2:
            matchHistoryBodyTdWinner.innerText = `${player2Name}`;
            matchHistoryBodyTdScore.innerText = `${player2Score} to ${player1Score}`
            break;
    }
    matchHistoryBodyRow.appendChild(matchHistoryBodyTdWinner);
    matchHistoryBodyRow.appendChild(matchHistoryBodyTdScore);
    matchHistoryBody.appendChild(matchHistoryBodyRow);
}

function Reset() {
    let confirmation = confirm('Are you sure you want a completely reset?');
        if (confirmation == true) {
            localStorage.clear();
            location.reload();
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