/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
/*
 */

function generandoPosicionesAleatorias(a) {
  return Math.floor(Math.random() * a);
}

let insertarDatosNumericos = document.getElementById("numero");
let insertarDatosPalo1 = document.getElementById("palo1");
let insertarDatosPalo2 = document.getElementById("palo2");

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

function randomCardGenerator() {
  function generandoAleatorizacion(b) {
    let posicionAleatoria = generandoPosicionesAleatorias(b);
    return posicionAleatoria;
  }
  function insertarDatos() {
    insertarDatosPalo1.innerHTML = arrayPalos[generandoAleatorizacion(4)];
    insertarDatosPalo2.innerHTML = insertarDatosPalo1.innerHTML;
    insertarDatosNumericos.innerHTML =
      arrayNumeros[generandoAleatorizacion(12)];
  }
}

window.onload = function() {
  //write your code here

  setInterval(myTimer, 1000);
  function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
  }

  if (
    insertarDatosPalo1.innerHTML == "♦" ||
    insertarDatosPalo2.innerHTML == "♥"
  ) {
    document.getElementById("palo1").style.color = "red";
    document.getElementById("numero").style.color = "red";
    document.getElementById("palo2").style.color = "red";
  }
};
