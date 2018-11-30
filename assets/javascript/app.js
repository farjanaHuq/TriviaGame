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

    /* Global Variables */
    //==============================================================================================
    var intervalId;
    var clockRunning = false;          // prevents the clock from being sped up unnecessarily
    var correctAnswer;
    var wrongAnswer;
    
    /* Object */
    //==============================================================================================
   
    // Object : Stopwatch to count down the time
    var stopwatch = {
        time: 10,
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
            $("#display").text(stopwatch.time + "secs remaining..");
        },
    };

    /* Object : Questionare  */
    var questions = {
        q1: {
            ques:" What does CSS stand for? ",
            answer:[
                {'a': 'Computer Style Sheets'},
                {'b': 'Cascading Style Sheets '},
                {'c': 'Creative Style Sheets'},
            ]
        },
        q2: {
            'What is the correct HTML for referring to an external style sheet?':
            {
                'a': '<stylesheet>mystyle.css</stylesheet>',
                'b': '<link rel="stylesheet" type="text/css" href="mystyle.css">',
                'c': '<style src="mystyle.css"',
            }
        },
        q3: {
            ' Inside which HTML element do we put the JavaScript?':
            {
                'a': ' <js>',
                'b': '<javascript>',
                'c': '<script>',
            }
        },
        q4: {
            ' Where is the correct place to insert a JavaScript?':
            {
                'a': 'The <head> section ',
                'b': 'Both the <head> section and the <body> section are correct',
                'c': 'The <body> section',
            }
        },
        q5: {
            ' What is the correct syntax for referring to an external script called "xxx.js"?':
            {
                'a': '<script name="xxx.js"></script> ',
                'b': '<script href="xxx.js">',
                'c': ' <script src=“xxx.js">',
            }
        },
        q6: {
            ' The external JavaScript file must contain the <script> tag.':
            {
                'a': 'True ',
                'b': 'False',
                'c': 'None of the above',
            }
        },
        q7: {
            ' Which of the following is correct?':
            {
                'a': 'jQuery is a JavaScript Library ',
                'b': 'jQuery is a JSON Library',
                'c': 'None of the above',
            }
        },
    };

    //console.log(questions.q1,questions.q2,questions.q3,questions.q5,questions.q6,questions.q7);
    console.log(questions.q1.ques);
    console.log(questions.q1.answer[0].a,  questions.q1.answer[1].b);

    /* Functions */
    //==============================================================================================
    var displayQA = function(){
            
        var questionPanel = $("<div class = 'q1-panel'>");
        // $("#q1-panel").append(questions.q1);
        // questionPanel.text("<p> ' " + questions.q1.ques + " ' </p>");
        // questionPanel.text("<p> ' " + questions.q1.answer + " ' </p>");

        questionPanel.text(questions.q1.answer[0].a, questions.q1.answer[1].b);
        $("#buttons").append(questionPanel);

        questionPanel.css({
            /* Positioning */
            "margin-top": `${5}%`,
            "margin-left":`${15}%`,
            "padding-top": `${5}%`,
            /* Box-model */
            "width": `${60}%`,
            "height": `${500}px`,
            "background-color": "orange",
            /* Typography */
            "text-align": "center"
        }); 
    };

    $("#start").on("click", function () {
        $("#start").hide();
        stopwatch.start();
        displayQA();
    })

});