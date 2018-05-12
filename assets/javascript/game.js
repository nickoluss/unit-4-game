$( document ).ready(function(){
    // random number to guess
        
    // Display random number
        
    // random number for each crystal 

    var numRed = Math.floor(Math.random()*12+1);
    var numBlue = Math.floor(Math.random()*12+1);
    var numYell = Math.floor(Math.random()*12+1);
    var numGreen = Math.floor(Math.random()*12+1);

    var yourScore = 0;

    // keep track of wins, losses and total

    // Reset 

    // Display wins

    // Display losses

    // Clicking crystals

    $('.red').on('click' , function() {
     yourScore = yourScore + numRed 
     $('#totalScore').text(yourScore)
    });

    $('.blue').on('click' , function() {
        yourScore = yourScore + numBlue    
    });

    $('.yellow').on('click' , function() {
        yourScore = yourScore + numYell  
    });

    $('.green').on('click' , function() {
        yourScore = yourScore + numGreen  
        
    });
    
  }); 