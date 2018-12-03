//create objects for each question

$(document).ready(function () {
   

    /* Global Variables 
    ==============================================================================================*/
    var intervalId;
    var clockRunning = false;          // prevents the clock from being sped up unnecessarily
    var currentIndex = 0;

    var questionPanel = $("<div class = 'q-panel'>");
    $("#buttons").append(questionPanel);
    var next = $('<button id = " next " > Next </button>');
    questionPanel.append(next);
    var reset = $('<button id = " reset " > Reset </button>');
    questionPanel.append(reset);
    var correctAnswerDiv = $("<p>");
    var wrongAnswerDiv = $("<p>");
    var displayDiv = $("<div id= 'display'>")
    /* Object 
    ==============================================================================================*/

    // Object : Stopwatch to count down the time
    var stopwatch = {
        time: 10,
        reset: function () {
            stopwatch.time = 10;
            $("#display").text("00:10");
        },
        start: function () {
            //Use setInterval to start the count here and set the clock to running.
            stopwatch.time = 10;
            $("#display").text("00:10");
            if (!clockRunning) {
                intervalId = setInterval(stopwatch.count, 1000);
                clockRunning = true;
            }
        },
        stop: function () {
            //Use clearInterval to stop the count here and set the clock to not be running.
            clearInterval(intervalId);
            clockRunning = false;
        },
        count: function () {
            stopwatch.time--;
            if (stopwatch.time === 0) {
                $("#display").text("Countdown Complete!");
                stopwatch.stop();
                displayNextQuestion();
                stopwatch.time = 14;
                stopwatch.start();
            }
            if (stopwatch.time < 10) {
                stopwatch.time = "0" + stopwatch.time;
              }
            $("#display").text("00" + ":" + stopwatch.time);
        },
    };

    /* Object : Questionare  */
    var questions = [
        {
            ques: "What does CSS stand for?",
            answer: [
                "a. Computer Style Sheets", 
                "b. Cascading Style Sheets", 
                "c. Creative Style Sheets"
            ],
            correctAnswer:  "b. Cascading Style Sheets",
            result: false
        },

        {
            ques: "What is the correct HTML for referring to an external style sheet?",
            answer: [
                "a. stylesheet>mystyle.css</stylesheet ",
                "b. link rel='stylesheet' type='text/css' href='mystyle.css'",
                "c. style src='mystyle.css'"
            ],
            correctAnswer:  "b. link rel='stylesheet' type='text/css' href='mystyle.css'",
            result: false
        },
        {
             ques: "How do you write 'Hello World' in an alert box?",   
             answer:[ 
                 "a. alertBox(Hello World)",  
                 "b. msg(Hello World)", 
                 "c. alert(Hello World);"
                ],
             correctAnswer:  "c. alert(Hello World);",
             result: false      
        },
        {
            ques: "How do you create a function in JavaScript? ",
            answer:[ "a.  function:myFunction()" , 
                     "b.  function = myFunction()",
                     "c.  function myFunction()"
                   ],
            correctAnswer: "b.  function = myFunction()",
            result: false   
        },
        {
            ques: " Which class provides a responsive fixed width container?",
            answer:[
                "a. .container",
                "b. .container-fixed",
                "c. .container-fluid"
            ],
            correctAnswer: "b. .container-fixed",
            result: false
        },
        {
            ques: " The external JavaScript file must contain the 'script' tag.",
            answer: [
                "a. True ",
                "b. False",
                "c. None of the above"
            ],
            correctAnswer: "b. False",
            result: false
        },
        {
            ques: " Which of the following is correct? ",
            answer: [
                 "a. jQuery is a JavaScript Library",
                 "b. jQuery is a JSON Library",
                 "c. None of the above"
            ],
            correctAnswer: "a. jQuery is a JavaScript Library",
            result: false
        }
    ];

    // console.log(questions);

    /* Functions 
    ============================================================================================== */

    // var animateHeading = function(){
    //     for(var i = 0; i< $('#heading').val(); i++){
    //         console.log($('#heading').charAt(i));
    //     }
    // }
    // animateHeading();

    //Function to display correct and wrong answers
    var corrWrongAns = function() {
        var rightAnswer = 0;
        var wrongAnswer = 0;
        questions.forEach(function(question) {
            if (question.result) {
                rightAnswer++;
            } else {
                wrongAnswer++;
            }
        });

        correctAnswerDiv.text("Correct Answer(s) : " + Number(rightAnswer));
        questionPanel.append(correctAnswerDiv);

        wrongAnswerDiv.text("Wrong Answer(s) : " + Number(wrongAnswer));
        console.log(wrongAnswer);
        questionPanel.append(wrongAnswerDiv);
        next.hide();
       // stopwatch.remove();
      
    }
    // Onclick event to select answers
    $("body").on("click", "p.answer", function () {
        
        $("#ans1").css('color', 'white');
        $("#ans2").css('color', 'white');
        $("#ans3").css('color', 'white');
        $(this).css('color', 'red');

        if ($(this).text() === questions[currentIndex].correctAnswer) {
            questions[currentIndex].result = true;
            // console.log(questions[currentIndex].correctAnswer);
        }
        else {
            questions[currentIndex].result = false;
            // console.log("Try again!");
        }
    });
    // reset button to start from the begining
    reset.on("click", function () {
        currentIndex = 0;
        stopwatch.reset();
        clearPrevQuestion();
        correctAnswerDiv.remove();
        wrongAnswerDiv.remove();
        displayQA();
        next.show();
        stopwatch.reset();
    });
    //Function to display next question, if all questions are answered it goes to the final page
    var displayNextQuestion = function() {
        clearPrevQuestion();
        currentIndex++;
        if (currentIndex >= questions.length) {
            corrWrongAns();
            stopwatch.stop();
            stopwatch.remove();
        } else {
            displayQA();
        }
    }
    // next button to move on to next question
    next.on("click", function () {
        displayNextQuestion();
    });
    
    // Function to clear the div before rendering new question
    var clearPrevQuestion = function () {
        $(".question").remove();
        $(".answer").remove();
    };
    // Function render questions in the question panel div
    var displayQA = function () {
        //console.log(currentIndex);
        questionPanel.append(`<p class = 'question'> ${questions[currentIndex].ques}</p>`);
        questionPanel.append(`<p class = 'answer' id='ans1' data-value = '0'>${questions[currentIndex].answer[0]}</p>`);
        questionPanel.append("<p class = 'answer' id='ans2' data-value = '1'>"+ questions[currentIndex].answer[1] +"</p>");
        questionPanel.append("<p class = 'answer' id='ans3' data-value = '2'>"+ questions[currentIndex].answer[2] +"</p>");
        questionPanel.append(displayDiv);

        stopwatch.start();
    };
    // Function to start the game 
    $("#start").on("click", function () {
        $("#start").hide();
        displayQA();
        animateHeading();
    });

});