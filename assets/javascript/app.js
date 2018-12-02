//create objects for each question
//onclick function to the start button
// Inside start button write the timer function 
//display time left
//display question 
//display the possible answers
//onclick function for the correct answer
//if all the questions answered in 30 secs, alert win
// if not then alert loose

$(document).ready(function () {
    console.log("hello");

    /* Global Variables 
    ==============================================================================================*/
    var intervalId;
    var clockRunning = false;          // prevents the clock from being sped up unnecessarily
    var rightAnswer;
    var wrongAnswer;
    var currentIndex = 0;

    var questionPanel = $("<div class = 'q-panel'>");
    $("#buttons").append(questionPanel);
    var next = $('<button id = " next " > Next </button>');
    questionPanel.append(next);
    var reset = $('<button id = " reset " > Reset </button>');
    questionPanel.append(reset);

    /* Object 
    ==============================================================================================*/

    // Object : Stopwatch to count down the time
    var stopwatch = {
        time: 14,
        reset: function () {
            stopwatch.time = 0;
            $("#display").text(stopwatch.time + "secs remaining..");
        },
        start: function () {
            //Use setInterval to start the count here and set the clock to running.
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
            }
            $("#display").text(stopwatch.time + " secs remaining..");
            $("#display").css({
                "margin-left": `${30}%`,
                "font-size": `${120}%`,
            });
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
            correctAnswer:  "b. Cascading Style Sheets"
        },

        {
            ques: "What is the correct HTML for referring to an external style sheet?",
            answer: [
                "a. stylesheet>mystyle.css</stylesheet ",
                "b. link rel='stylesheet' type='text/css' href='mystyle.css'",
                "c. style src='mystyle.css'"
            ],
            correctAnswer:  "b. link rel='stylesheet' type='text/css' href='mystyle.css'"
        },
        {
             ques: "How do you write 'Hello World' in an alert box?",   
             answer:[ 
                 "a. alertBox(Hello World)",  
                 "b. msg(Hello World)", 
                 "c. alert(Hello World);"
                ],
             correctAnswer:  "c. alert(Hello World);"      
        },
        {
            ques: "How do you create a function in JavaScript? ",
            answer:[ "a.  function:myFunction()" , 
                     "b.  function = myFunction()",
                     "c.  function myFunction()"
                   ],
            correctAnswer: "b.  function = myFunction()"     
        },
        {
            ques: " Which class provides a responsive fixed width container?",
            answer:[
                "a. .container",
                "b. .container-fixed",
                "c. .container-fluid"
            ],
            correctAnswer: "b. .container-fixed"
        },
        {
            ques: " The external JavaScript file must contain the 'script' tag.",
            answer: [
                "a. True ",
                "b. False",
                "c. None of the above"
            ],
            correctAnswer: "b. False"
        },
        {
            ques: " Which of the following is correct? ",
            answer: [
                 "a. jQuery is a JavaScript Library",
                 "b. jQuery is a JSON Library",
                 "c. None of the above"
            ],
            correctAnswer: "a. jQuery is a JavaScript Library"
        }
    ];

    console.log(questions);
    /* test */
    // questions.forEach(function(question) {
    //     console.log(question.ques);
    //     console.log(question.answer);

    //     question.answer.forEach(function(answer) {
    //         console.log(answer.a);
    //     });

    // });

    /* Functions 
    ============================================================================================== */
//     correctAnswerArr = ["b. Cascading Style Sheets ",
//                         "b. link rel='stylesheet' type='text/css' href='mystyle.css'",
//                         "c. alert(Hello World);",
//                         "c. function myFunction()",
//                         "b. .container-fixed",
//                         "b. False",
//                         "a. jQuery is a JavaScript Library",
// ];


    $("body").on("click", "p.answer", function () {
        //console.log("click the correct answer.")
        console.log($(this).text());
        console.log(questions[currentIndex].correctAnswer);

        if ($(this).text() === questions[currentIndex].correctAnswer) {
            rightAnswer++;
            console.log(questions[currentIndex].correctAnswer);
        }
        else {
            wrongAnswer++;
            console.log("Try again!");
        }
        currentIndex++;
    });

    var resetGame = reset.click(function () {
        alert('hi');
    });

    next.on("click", function () {
        currentIndex++;
        clearPrevQuestion();
        displayQA();

        if (currentIndex === questions.length) {
            currentIndex = 0;
        }
    });
    var clearPrevQuestion = function () {
        $(".question").empty();
        $(".answer").empty();
    }

    var correctAnswerTempVariable = ''; 

    var displayQA = function () {
        //correcrTempVariable = correctAnswerArr[currentIndex];
        // console.log(correctAnswerTempVariable);
        questionPanel.append("<p class = 'question'> "+ questions[currentIndex].ques +"</p>");
        questionPanel.append(`<p class = 'answer' data-value = '0'>${questions[currentIndex].answer[0]}</p>`);
        questionPanel.append("<p class = 'answer' data-value = '1'>"+ questions[currentIndex].answer[1] +"</p>");
        questionPanel.append("<p class = 'answer' data-value = '2'>"+ questions[currentIndex].answer[2] +"</p>");
    };

    $("#start").on("click", function () {
        $("#start").hide();
        stopwatch.start();
        displayQA();
    });

});