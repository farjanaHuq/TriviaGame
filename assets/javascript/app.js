//create objects for each question
//onclick function to the start button
// Inside start button write the timer function 
//display time left
//display question 
//display the possible answers
//onclick function for the correct answer
//if all the questions answered in 30 secs, alert win
// if not then alert loose

$(document).ready(function(){
    console.log("hello");

    //==============================================================================================
    // Global Variables
    //==============================================================================================

    var time = 30;

    // var countDown = function(countTime, elem){
    //     var element = document.getElementById(elem);
    //     element.innerHTML = countTime + " secs remaining...";
  
    //     if(countTime < 1){
    //         clearTimeout(timer);
    //         element.innerHTML = "Countdown Complete";
    //     }  
    //     countTime--;
    //     var timer = setTimeout('countDown('+ countTime + ', "' + elem + '")', 1000);

    // }
    // countDown(time, "display");
    // var countTime = 10;
    
    // var countDown = function( ){
    //    countTime--;
    //    $("#display").append(countTime + " secs remaining..");
    //     if(countTime === 0){
            
    //         $("#display").append("Countdown Complete!");
    //         clearTimeout(timer);
    //     }
    //     var timer = setTimeout(countDown, 1000);
       
     
    //     console.log(countTime);
    // }

   //countDown(5);
    $("#start").on("click", function(){
           $("#start").hide();
           stopwatch.start();
        //countDown(5);
          
          // $("#questionare-panel").append();
    })

var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var stopwatch = {
  time:10,
 

  reset: function() {
    stopwatch.time = 0;
   
    $("#display").text(stopwatch.time + "secs remaining..");
  },
  start: function() {
    //Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
     
    }
  },
  stop: function() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  }, 
  count: function() {
    stopwatch.time--;
    if(stopwatch.time === 0){
          stopwatch.stop;  
        $("#display").text("Countdown Complete!"); 
    }
    $("#display").text(stopwatch.time + "secs remaining..");
  },
  
};
});