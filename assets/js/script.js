// Wait for the DOm to fininh loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () { //when the page is finished loading, the code within the code block will execute
    let buttons = document.getElementsByTagName("button");  //returns all the buttons on the page as an array, and we can iterate throught the array

    for (let button of buttons) {  //more modern syntax of for(let i=0; i< buttons.length; i++)
        //go through buttons array and return each element which will be stored in the variable"button" on each itertion
        button.addEventListener("click", function () { // add event listner to buttons (listenes for button to be clicked, and when clicked the code in this block will be executed)
            if (this.getAttribute("data-type") === "submit") { // "this" refers to the button that was just clicked
                alert("You clicked Submit!"); //check the attribute of the data type to see what its value is, if its submit we are going to display an alert
                //We then use the reference to  that button to call its get attribute method and check the contents  of our data type custom attribute. 
                //If it is equal to submit then we're going to display  an alert to tell the user, "you clicked submit". Otherwise, we're going to set the game  
                //type to the value of that attribute.  And this will tell us what  game type we're wanting to run.
                //Right now, we'll just use an alert that says, "you clicked" and then displays the game type.  
            } else {
                let gameType = this.getAttribute("data-type");
                //So we're going to go run game and then  the parameter is going to be the game type.
                runGame(gameType);
            }
        });
    }

    runGame("addition"); //The first thing is that we want an addition  game to start as soon as the page is loaded.  
    //It's going to be our default game. So we need to  add that to our dom content loaded event listener.So inside that event listener  but outside of the for loop,  
});


// JS doc string

/**
 * The main game "loop" called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {  //need to supply the parameters that the function  is going to accept. And that is game type.


    //creates 2 random numbers between 1 & 25
    let num1=Math.floor(Math.random() * 25) + 1;
    let num2=Math.floor(Math.random() * 25) + 1;
    

    //What we just need to do is check which game  type we're running with an if statement.
    //And call the appropriate function to display  the question. So let's put that in here,  

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }


}




function checkAnswer() {

}

function calculatecorrectAnswer() {

}

function incermentScore() {

}

function incrementWrongAnswer() {

}
//The two arguments that its going to accept are  going to be called operand 1 and operand 2.
function displayAdditionQuestion(operand1, operand2) {
    //And we're going to interrogate our HTML, we're going  to get the element that has the ID of operand 1,  
    //and we're going to set its  text content to our number.  
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";


}

function dispalaySubtractQuestion() {

}

function displayMultiplyQuestion()
 {

}

