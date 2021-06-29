var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomDiceSource1 = "images/" + randomDiceImage1;

var randomDiceSource2 = "images/" + randomDiceImage2;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomDiceSource1);

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomDiceSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎈🎈🎆Player1 wins Hurray!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🎈🎈🎆Player2 wins Hurray!";
} else {
    document.querySelector("h1").innerHTML = "Draw"
}