$( document ).ready(function(){
    // random number to guess
    var Random=Math.floor(Math.random()*102+19)
    
    // Display random number
    $('#scoreYouWant').text(Random);
    
    //random number for each crystal
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    // Var  keep track of wins, losses and total
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // Reset 
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#scoreYouWant').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('#totalScore').text(playerTotal);
        } 
  // Display wins
  function nice(){
  alert("Congrats! You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // Display losses
  function loser(){
  alert ("oops! you loose :(");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // Clicking crystals
  







    $('.red').on('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
              nice();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    $('.blue').on('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            nice();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.yellow').on('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);
  
            if (playerTotal == Random){
            nice();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.green').on('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == Random){
            nice();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 