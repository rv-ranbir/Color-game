/**
 * Created by RanbirVerma on 06-11-2017.
 */
var numSqr = 6;
var colors = generateColor(numSqr);
var squares = document.querySelectorAll(".square");
var pickedColor = colorPicker();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
   easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    messageDisplay.textContent = "";
    numSqr = 3;
    resetColor();
    /*for(var i = 0; i < squares.length; i++){
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }*/
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSqr = 6;
    resetColor();
    /*for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
*/
});

resetButton.addEventListener("click", function () {
    resetButton.textContent = "New Colors"
    resetColor();
    messageDisplay.textContent = "";

});

function resetColor(){
    colors = generateColor(numSqr);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
}


for(var i=0; i < squares.length;i++)
{
    //add color to each square
    squares[i].style.backgroundColor = colors[i];

    //add event listener  to each square
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!!";
            colorChange(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function colorChange(color){
    for(var i=0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function colorPicker(color){
    var pick = Math.floor(Math.random() * colors.length);
    return colors[pick];
}

function generateColor(num){
    var arr =[];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" +r+ ", " +g+ ", " +b+ ")"
}
