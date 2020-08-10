const red = document.getElementById('red');

const yellow = document.getElementById('yellow');

const green = document.getElementById('green');

const auto = document.getElementById('auto');

var repeater;

function turnRed(){

    off.src = 'vermelho.png'
}

function turnYellow(){

    off.src = 'amarelo.png'
}

function turnGreen(){

    off.src = 'verde.png'
}

function Repeat(){

  clearInterval(repeater);


  repeater = setInterval(Sequence, 1600);

}

function Sequence(){

  setTimeout(turnRed, 500);
  setTimeout(turnYellow, 1000);
  setTimeout(turnGreen, 1500);


}

function Stop(){

  clearInterval(repeater);


  off.src = 'desligado.png';


}


red.addEventListener('click', turnRed);

yellow.addEventListener('click', turnYellow);

green.addEventListener('click', turnGreen);

auto.addEventListener('click', Repeat);

auto.addEventListener('dblclick', Stop);
