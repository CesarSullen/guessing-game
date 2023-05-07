var boton = document.getElementById("boton");
boton.addEventListener("click", probar);
var espacio = document.getElementById("cambiaFormas");
var numeroRandom = parseInt(Math.random() * 11);
console.log(numeroRandom);

function probar() {
  var numero = parseInt(document.getElementById("numero").value);
  espacio.setAttribute("style", "font-size: 4em; color: #ffd700");

  if (numero > numeroRandom) {
    espacio.innerHTML = "Mas suerte la proxima vez, tu numero es mayor";
  } else if (numero == numeroRandom) {
    paginaGanador();
  } else {
    espacio.innerHTML = "Mas suerte la proxima vez, tu numero es menor";
  }
}

function paginaGanador() {
  location.href = "paginaGanador.html";
}

function playAudio() {
  document.getElementById("audioPremio").play();
}
