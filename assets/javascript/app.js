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

    // Global Variables
    //==============================================================================================
    var intervalId;
    var clockRunning = false;          // prevents the clock from being sped up unnecessarily

    
    // Object
    //==============================================================================================
   
    // Stopwatch to count down the time
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
                stopwatch.stop();
                $("#display").text("Countdown Complete!");
            }
            $("#display").text(stopwatch.time + "secs remaining..");
        },
    };
    // Functions
    //==============================================================================================

    $("#start").on("click", function () {
        $("#start").hide();
        stopwatch.start();
    })

});