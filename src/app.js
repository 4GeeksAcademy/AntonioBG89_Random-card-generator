/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";
/*
 */

function generandoPosicionesAleatorias(a) {
  return Math.floor(Math.random() * a);
}

let insertarDatosPalo1 = document.getElementById("palo1");
let insertarDatosPalo2 = document.getElementById("palo2");
let insertarDatosNumericos = document.getElementById("numero");

let arrayPalos = ["♦", "♥", "♠", "♣"];
let arrayNumeros = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12"
];

function randomCardGenerator(b) {
  let posicionAleatoria = generandoPosicionesAleatorias(b);
  return posicionAleatoria;
}

function insertarDatos() {
  insertarDatosPalo1.innerHTML = arrayPalos[randomCardGenerator(4)];
  insertarDatosPalo2.innerHTML = insertarDatosPalo1.innerHTML;
  insertarDatosNumericos.innerHTML = arrayNumeros[randomCardGenerator(12)];
  if (
    insertarDatosPalo1.innerHTML == "♦" ||
    insertarDatosPalo1.innerHTML == "♥"
  ) {
    document.getElementById("palo1").style.color = "red";
    document.getElementById("numero").style.color = "red";
    document.getElementById("palo2").style.color = "red";
  }
  if (
    insertarDatosPalo1.innerHTML == "♠" ||
    insertarDatosPalo1.innerHTML == "♣"
  ) {
    document.getElementById("palo1").style.color = "black";
    document.getElementById("numero").style.color = "black";
    document.getElementById("palo2").style.color = "black";
  }
}

document
  .getElementById("botonGeneradorNuevaCarta")
  .addEventListener("click", insertarDatos);

window.onload = function() {
  //write your code here
  insertarDatos();
  setInterval(insertarDatos, 10000);
};
