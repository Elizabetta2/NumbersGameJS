
let table = document.getElementById('mytable');
let button = document.getElementById("button");
let timerLabel = document.getElementById("timer")
let timerId;
let counter = 1;
let errors = 0;
let seconds = 0;
let score = 0;
localStorage.setItem("score", score);


for ( i = 0; i < 5; i++) {

  let row = table.appendChild(document.createElement("div"));

  for (let j = 0; j < 5; j++) {

    let cells = row.appendChild(document.createElement("span")); 
    cells.setAttribute("class", "cells")
      
  }

}


let allSpans = document.getElementsByClassName('cells')


function fillArray(){
  
  let numsArray = [];

  for (let i = 1; i <= 25; i++) {
    numsArray.push(i);
  }

  numsArray.sort(() => Math.random() - 0.5);

  for (let x = 0; x < numsArray.length; x++){
    allSpans.item(x).innerText= numsArray[x]
  }

}


function actionEvent() {

  for (let n = 0; n < 25; n++ ){ 

    allSpans.item(n).onclick = function() {

      if(allSpans.item(n).innerText == counter) {
        allSpans.item(n).setAttribute("disabled", true)
        allSpans.item(n).style.backgroundColor="green"
        counter  = counter + 1;
                                  
      } else {
        allSpans.item(n).style.backgroundColor="red"
        errors = errors + 1;
      }
      
    }

  }

}

 
function start() {

  timerId = setInterval(() =>{

    seconds = seconds + 1;
    timerLabel.innerText = seconds
    if (counter == 26) stop()
  
  }, 1000)

}


function stop() {

  clearInterval(timerId)
  let msg = ""
  score = localStorage.getItem("score")
  if (score == 0) {localStorage.setItem("score", seconds)}
  
  if (seconds < score) {
    localStorage.setItem("score", seconds)
    msg = "У Вас новый рекорд!"
  }

  alert("Ваше время: " + seconds + " секунд.\nОшибок: " + errors + "\n\n" + msg)
 
}


function clearGame() {

  timerLabel.innerText = 0
  counter = 1;
  errors = 0;
  seconds = 0;

  for (let x = 0; x < allSpans.length; x++){

      allSpans.item(x).style.backgroundColor = "white"
      allSpans.item(x).removeAttribute("disabled")

  }
   
}


function go() {
  
  clearInterval(timerId)
  clearGame()
  fillArray()
  actionEvent()
  start()
 
}






