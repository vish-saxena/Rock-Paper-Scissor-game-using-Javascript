'use strict'

//Score Elements
const compScoreEl = document.getElementById('computer-score');
const userScoreEl =  document.getElementById('user-score');

//Weapon Elements Detail in html
const userChoiceEl =  document.getElementById('user-choice');
const compChoiceEl =  document.getElementById('computer-choice');

const resultEl =  document.getElementById('result');

//variables
let [computerScore, userScore] = [0, 0];

const choices = ['rock', 'paper', 'scissor'];

    //Games win or lose conditions
const gameRules = {
    //user choice case
    rock: {
        //computer choice and result
        rock : 'draw',
        paper : 'lose',
        scissor : 'win',
    },
    paper : {
        rock : 'win',
        paper :'draw',
        scissor : 'lose',
    },
    scissor : {
        rock : 'lose',
        paper :'win',
        scissor : 'draw',
    },
};

//console.log(gamerules.rock) 
      //will give u objects inside rock

//console.log(gamerules.rock.rock)
      //will give u win        


//funtions

const showResult = function(result, bgColor, textColor) {
    resultEl.innerText = result;
    resultEl.style.cssText = `background-color:${bgColor}; color: ${textColor} `;
};

function game(input) {
    let randomChoice = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomChoice];

    let userChoice = input;

    compChoiceEl.innerHTML = `Computer choose <span> ${computerChoice} </span>`;
    userChoiceEl.innerHTML = `You choose <span>${userChoice}</span>`;


    switch (gameRules[userChoice][computerChoice]) {
        case 'win':
            showResult('You Won', '#87CEEB', '#fff');
            userScore++;
            break;
        case 'lose':
            showResult('Computer Won', '#87CEEB', '#d32f2f');
            computerScore++;
            break;
        case 'draw':
            showResult('Game Draw', '#87CEEB', '#5C4033');
            break;
    }

    userScoreEl.innerText = userScore;
    compScoreEl.innerText = computerScore;
}