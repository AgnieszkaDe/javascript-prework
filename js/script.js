{
  function playGame(playerInput){
    clearMessages();

    //Rules for computer and player

    const getMoveName = function(argMoveId) {
      if(argMoveId == 1){
        return 'kamień';
      } else if (argMoveId == 2){
        return 'papier';
      } else if (argMoveId == 3){
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu: ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    const playerMove = getMoveName(playerInput),
          randomNumber = Math.floor(Math.random() * 3 + 1),
          computerMove = getMoveName(randomNumber);

    console.log('Ruch gracza: ' + playerMove);
    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log('Ruch komputera to: ' + computerMove);

    //Results

    /*
    console.log('Do displayResult wpadły: ' + argComputerMove + ' i ' + argPlayerMove);
    const displayResult = function() {
      if (argComputerMove == 'kamień' ...)
    }
    */
    const displayResult = function(argComputerMove, argPlayerMove) {
      console.log('Do displayResult wpadły: ' + argComputerMove + ' i ' + argPlayerMove);
      if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Ty wygrywasz!';
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return 'Ja wygrywam!';
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      return 'Ty wygrywasz!';
      } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      return 'Ja wygrywam!';
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      return 'Ja wygrywam!';
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      return 'Ty wygrywasz!';
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
      return 'No co Ty?!';
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
      return 'No co Ty?!';
      } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
      return 'No co Ty?!';
      } else {
      return 'Remis!';
      }
    }

    printMessage('Twój ruch to: ' + playerMove);
    printMessage('Mój ruch to: ' + computerMove);
    printMessage('Wynik to: ' + displayResult(computerMove, playerMove));
  }

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}

/*
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);



function buttonClicked(){
  printMessage('Guzik został kliknięty');
}

let testButton = document.getElementById('test-button');

testButton.addEventListener('click', buttonClicked);



  if(playerInput == 1){
    playerMove = 'kamień';
  } else if (playerInput == 2) {
    playerMove = 'papier';
  } else if (playerInput == 3) {
    playerMove = 'nożyce';
  } else {
    playerMove = 'nieznany ruch';
  }


  if(randomNumber == 1) {
    computerMove = 'kamień';
  } else if (randomNumber == 2) {
    computerMove = 'papier';
  } else {
    computerMove = 'nożyce';
  }


  if(computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Ja wygrywam!');
  } else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Ja wygrywam!');
  } else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Ja wygrywam!');
  } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'nożyce' && playerMove == 'nieznany ruch') {
    printMessage('No co Ty?!');
  } else if (computerMove == 'papier' && playerMove == 'nieznany ruch') {
    printMessage('No co Ty?!');
  } else if (computerMove == 'kamień' && playerMove == 'nieznany ruch') {
    printMessage('No co Ty?!');
  } else {
    printMessage('Remis!');
  }
*/
