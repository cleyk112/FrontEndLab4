//Task 1 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

  document.getElementById('4').onclick = function() {
    let newBg = getRandomColor();
    let newClr = getRandomColor();
    document.getElementById('4').style.backgroundColor = `${newBg}`;
    document.getElementById('4').style.color = `${newClr}`;
};

document.querySelector('#nd').onclick = function() {
    let newBg1 = getRandomColor();
    let newClr1 = getRandomColor();
    document.querySelector('#nd').style.backgroundColor = `${newBg1}`;
    document.querySelector('#nd').style.color = `${newClr1}`;
};

//Task 2
const img = document.querySelector("img");

function addImg() {
    img.style.display = 'flex';
};

function deleteImg() {
    img.style.display = 'none';
};

function increaseImg() {
    var currentWidth = window.getComputedStyle(img).width;
    var newWidth = parseInt(currentWidth.slice(0, -2)) + 100;
    img.style.width = `${newWidth}px`
};

function decreaseImg() {
    var currentWidth = window.getComputedStyle(img).width;
    var newWidth = parseInt(currentWidth.slice(0, -2)) - 100;
    img.style.width = `${newWidth}px`
};