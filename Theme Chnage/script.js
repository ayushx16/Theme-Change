// document object model for button
const myButton = document.querySelector('.color-button');
const bodyBackground = document.querySelector('body');

const colors = ['yellow', 'red', '#3b59a2', 'green', 'rgb(120,230,340)'];

myButton.addEventListener('click', changeColor);

function changeColor(){
    let random = Math.floor(Math.random()*colors.length);
    bodyBackground.style.backgroundColor = colors[random];
}

// document object model for select color 
const fristColor = document.getElementById("frist");
fristColor.addEventListener('click', addFristColor);

const secondColor = document.getElementById("second");
secondColor.addEventListener('click', addSecondColor);

const thirdColor = document.getElementById("third");
thirdColor.addEventListener('click', addThirdColor);

const fourthColor = document.getElementById("fourth");
fourthColor.addEventListener('click', addFourthColor);

const newColors = ['rgb(214, 14, 14)', 'rgb(64, 22, 141)', ' grey', 'darkgoldenrod'];

function addFristColor(){
    bodyBackground.style.backgroundColor = newColors[0];
}

function addSecondColor(){
    bodyBackground.style.backgroundColor = newColors[1];

}

function addThirdColor(){
    bodyBackground.style.backgroundColor = newColors[2];

}

function addFourthColor(){
    bodyBackground.style.backgroundColor = newColors[3];
}
