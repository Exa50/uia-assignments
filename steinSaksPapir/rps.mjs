
//#region 
import * as readlinePromises from 'node:readline/promises';
const rl = readlinePromises.createInterface({ input: process.stdin, output: process.stdout });
//#endregion

import { print } from './lib/output.mjs';
import { ANSI } from './lib/ansi.mjs';
import { getRandomItemFromArray } from './lib/random.mjs';
import GAME_DICTIONARY from './dictionary.mjs';
import { title } from 'process';

const CHOICES = { rock: 1, paper: 2, scissors: 3 };
const LIST_OF_CHOICES = [CHOICES.rock, CHOICES.paper, CHOICES.scissors];

let language = GAME_DICTIONARY.no;


let isPlaying = true;
print("Når begynner vi og spille!");

//ny

print(title, ANSI.COLOR.GREEN);

function playgame(){




setTimeout(playgame, 3000);  //
while(isPlaying == true) //
async function name(params) { //
    
print(ANSI.CLEAR_SCREEN);
print(launguage.title, ANSI.COLOR.RED);

let player = await askForPlayerChoice();
let npc = makeAIChoice();
}//

print(`${launguage.youPicked} ${getDesc(player)} ${launguage.aiPicked} ${getDesc(npc)}`);
print(launguage.winner + evaluateWinner(player, npc));

print("Vil du spille igjen? (y/n)");
let replayAnswer = await rl.question("");

if(replayAnswer == "n"){ 
    isPlaying = false;
}
//ny///////////////////////////////
let answer = await askPlayer("Play again? (y)es/(n)0:");
if (answer.includes(launguage.confirm)){
playgame();    
} else {
    process.exit();
}

//ny///////////////////////////////
// ---- Game functions etc..

function clearAndResetScreen(){
    print(ANSI.CLEAR_SCREEN);
print(ANSI.CURSOR_HOME);
}

function evaluateWinner(p1Ch, p2Ch) {
    // Vi går ut i fra at spiller 2 vinner :)
    let result = launguage.player2;

    // Men vi må sjekke om noe annet skjedde.
    if (p1Ch == p2Ch) {
        result = launguage.draw;
    } else if (p1Ch == CHOICES.rock) {
        if (p2Ch == CHOICES.scissors) {
            result = launguage.player1;
        }
    } else if (p1Ch == CHOICES.paper) {
        if (p2Ch == CHOICES.rock) {
            result = launguage.player1;
        }
    } else if (p1Ch == CHOICES.scissors) {
        if (p2Ch == CHOICES .paper) {
            result = launguage.player1;
        }
    }

    return result;
}

function makeAIChoice() {
    return getRandomItemFromArray(LIST_OF_CHOICES);
}

function getDesc(choice) {
    return launguage.choices[choice - 1]
}


}
async function askForPlayerChoice() {

    let choice = null;

    do { //spør spilleren om å velge
        print(launguage.selectionQuestion);
        let rawChocie = await rl.question("");
        rawChocie = rawChocie.toUpperCase();
        choice = evaluatePlayerChoice(rawChocie);
    } while (choice == null) //Kommer til å spørre helt til den er fornøyd

    return choice;



function evaluatePlayerChoice(rawChocie) {
    let choice = null;

    if (rawChocie == launguage.rock) {
        choice = CHOICES.rock;
    } else if (rawChocie == launguage.paper) {
        choice = CHOICES.paper;
    } else if (rawChocie == launguage.scissors) {
        choice = CHOICES.scissors;
    }
    return choice;
}


print("Når slutter vi og spille!");





