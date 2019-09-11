//document ready
$(document).ready(function () {
    //create an array of objects for questions and answers
    var questions = [
        {
            question: "What is Charlie's favorite food?",
            //separate array for answer choices
            options: ["Cheese", "Fight Milk", "Milk Steak", "Sewage Crabs"],
            answer: 2,
            pic: "assets/images/ghouls.gif"
        },
        {
            question: "Who is the Real Father of Dee and Dennis?",
            //separate array for answer choices
            options: ["Bruce Mathis", "Frank Reynolds", "Mr. Mac", "Doyle McPoyle"],
            answer: 0,
            pic: "assets/images/frank.gif"
        },
        {
            question: "To Whom Does the Nightman Have to Pay a Toll to get to the Boy's Soul?",
            //separate array for answer choices
            options: ["Sweet Dee", "The Troll", "Bill Ponderosa", "Dayman"],
            answer: 1,
            pic: "assets/images/troll.gif"
        },
        {
            question: "What is Charlie's Designation Within the Gang?",
            //separate array for answer choices
            options: ["The Looks", "The Brains", "The Big Cheese", "The Wild Card"],
            answer: 3,
            pic: "assets/images/wild.gif"
        },
        {
            question: "What Kind of Man is Dennis?",
            //separate array for answer choices
            options: ["A One Star Man", "A Loser", "A FIVE STAR MAN", "Nice Guy"],
            answer: 2,
            pic: "assets/images/fivestar.gif"
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
    var intervalid;
    var index;




    console.log(questionCount);
    //hide the egg button
    $("#reset").hide();
    //create click event to start game
    $("#start").on("click", function () {
        $("#start").hide();
        questionDisplay();
        startTime();
        for (var i = 0; i < questions.length; i++) {
            gameArr.push(questions[i]);
        }
    })

    //create a function to start countdown
    function startTime() {
        if (!isTimerRunning) {
            intervalid = setInterval(decrement, 1000)
            isTimerRunning = true;
        }
    };
 //create a function to display questions on the page
 function questionDisplay() {
    //randomize questions
    index = Math.floor(Math.random() * questions.length);
    choice = questions[index];

    $(".questionsDisplay").html(choice.question);
    for (var i = 0; i < choice.options.length; i++) {
        var userGuess = $("<div>");
        userGuess.addClass("answerChosen");
        userGuess.html(choice.options[i]);
        userGuess.attr("data-guessvalue", i);
        $(".answers").append(userGuess);
    };

    

    //on click function for answers
    $(".answerChosen").on("click", function (){
        userChoice = parseInt($(this).attr("data-guessvalue"));

        if (userChoice === choice.answer) {
            stop();
            correct++;
            userChoice="";
            $(".answers").html("Nailed it!");
            hideGif();
        }

        else {
            stop();
            incorrect++;
            $(".answers").html("Loser!");
            hideGif();
        };
    });
    };
    //create a function to hide gifs
    function hideGif () {
        $(".answers").append("<img src" + questions.pic + ">");
        choiceArr.push(choice);
        questions.splice(index,1);

        var hidePicture = setTimeout(function() {
            $(".answers").empty();
            time = 30;

            //if all questions are answered, show scores
            if ((incorrect + correct) === questionCount) {
                $(".questionsDisplay").empty();
                $(".questionsDisplay").html("The End!");
                $(".answers").append("Correct: " + correct)
                $(".answers").append("Incorrect: " + incorrect)
                $("#reset").show();
                correct =0;
                incorrect =0;
            }
            //if there are more questions
            else {
                startTime();
                questionDisplay();
            };

        
        }, 3000)
    };
    //create decrementer function that displays time on page
    function decrement() {
        time--;
        $("#timer").html("Tick Tock! " + time );
        

        if (time === 0) {
            incorrect++;
            stop();
            $(".answers").html("<p> Loser! The Answer is: " + choice.questions.answer + "</p>");
            hideGif();
        }


    };

    //create function to stop the clock
    function stop() {
        isTimerRunning = false;
        clearInterval(intervalid);
    };

   

        

        $("#reset").on("click", function() {
            $("#reset").hide();
            $(".answers").empty();
            $(".questionsDisplay").empty();
            for (var i =0; i < gameArr.length; i++ ) {
                questions.push(gameArr[i]);
            }
            startTime();
            questionDisplay();

        });

    });

