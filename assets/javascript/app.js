//document ready
$(document).ready(function () {
    //create an array of objects for questions and answers
    var questions = [
        {
            question: "What is Charlie's favorite food?",
            //separate array for answer choices
            options: ["Cheese", "Fight Milk", "Milk Steak", "Sewage Crabs"],
            answer: 2,
            gif: "assets/images/ghouls.gif"
        },
        {
            question: "Who is the Real Father of Dee and Dennis?",
            //separate array for answer choices
            options: ["Bruce Mathis", "Frank Reynolds", "Mr. Mac", "Doyle McPoyle"],
            answer: 0,
            gif: "assets/images/frank.gif"
        },
        {
            question: "To Whom Does the Nightman Have to Pay a Toll to get to the Boy's Soul?",
            //separate array for answer choices
            options: ["Sweet Dee", "The Troll", "Bill Ponderosa", "Dayman"],
            answer: 1,
            gif: "assets/images/troll.gif"
        },
        {
            question: "What is Charlie's Designation Within the Gang?",
            //separate array for answer choices
            options: ["The Looks", "The Brains", "The Big Cheese", "The Wild Card"],
            answer: 3,
            gif: "assets/images/wild.gif"
        },
        {
            question: "What Kind of Man is Dennis?",
            //separate array for answer choices
            options: ["A One Star Man", "A Loser", "A FIVE STAR MAN", "Nice Guy"],
            answer: 2,
            gif: "assets/images/fivestar.gif"
        }
    ];
    //declare variables
    var time = 30;
    var correct = 0;
    var incorrect = 0;
    var userChoice = "";
    var choice;
    var choiceArr = [];
    var gameArr = [];
    var isTimerRunning = false;
    var questionCount = questions.length;



    console.log(questionCount);
    //hide the egg button
    $("#reset").hide();
    //create click event to start game
    $("#start").on("click", function () {
        $("#start").hide();
    })

    //create a function to start countdown
    function startTime () {
        if (isTimerRunning = false) {
            var intervalid = setInterval(decrement 1000)
        }
    }

});

