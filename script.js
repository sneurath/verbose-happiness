function rollDice(){
    let diceOne = Math.floor(Math.random()*6) +1;
    return diceOne; 
};

function changeMessage(){
    let rollResultText = document.getElementById('rollResult');
    rollResultText.textContent = '';
    rollResultText.textContent = rollDice();
};
let buttonEl = document.getElementById('button1');
buttonEl.addEventListener('click', changeMessage);