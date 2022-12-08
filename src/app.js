/* eslint-disable */
// import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateNewCard() {
  let symbols = ["♠", "♣", "♥", "♦"];
  let numbers = ["A", 1, 2, 3, 4, 5, 6, 7, 9, 10, "J", "Q", "K"];
  let card = symbols[Math.floor(Math.random() * symbols.length)];
  let cardNumber = numbers[Math.floor(Math.random() * numbers.length)];

  document.getElementById("symbol1").innerHTML = `${card}`;
  document.getElementById("symbol2").innerHTML = `${card}`;
  document.querySelector(".number").innerHTML = `${cardNumber}`;

  if (card == "♥" || card == "♦") {
    document.querySelector(".card").classList.add("red");
  } else document.querySelector(".card").classList.remove("red");
}

window.onload = function() {
  //write your code here

  document.getElementById("btn").addEventListener("click", generateNewCard);
};
