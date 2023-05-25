// Wait for the DOm to fininh loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() { //when the page is finished loading, the code within the code block will execute
    let buttons = document.getElementsByTagName("button");  //returns all the buttons on the page as an array, and we can iterate throught the array

    for (let button of buttons){  //more modern syntax of for(let i=0; i< buttons.length; i++)
        //go through buttons array and return each element wwhich will be stored in the variable"button" on each itertion
        button.addEventListener("click", function(){ // add event listner to buttons (listenes for button to be clicked, and when clicked the code in this block will be executed)
            if(this.getAttribute("data-type")==="submit"){ // "this" refers to the button that was just clicked
                alert("You clicked Submit!"); //check the attribute of the data type to see what its value is, if its submit we are going to display an alert
                //We then use the reference to  that button to call its get attribute method and check the contents  of our data type custom attribute. 
                //If it is equal to submit then we're going to display  an alert to tell the user, "you clicked submit". Otherwise, we're going to set the game  
                //type to the value of that attribute.  And this will tell us what  game type we're wanting to run.
                //Right now, we'll just use an alert that says, "you clicked" and then displays the game type.  
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
         })
    }

    runGame("addition")
})


// JS doc string

/**
 * The main game "loop" called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    //creates 2 random numbers between 1 & 25
let num1=Math.floor(Math.random() * 25) + 1;
let num2=Math.floor(Math.random() * 25) + 1;



}

function checkAnswer() {

}

function calculatecorrectAnswer() {

}

function incermentScore() {

}

function incrementWrongAnswer() {

}

function displatAdditionQuestion() {

}

function dispalaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

