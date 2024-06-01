let maxIntentos = 3;
let Intentos = 0;
let NumeroRandom = Math.floor(Math.random() * 100) + 1;

document.getElementById('Boton').addEventListener('click', () => {
  let Usuario = parseInt(document.getElementById('restriccion').value);
  Intentos++;

  if (Usuario === NumeroRandom) {
    document.getElementById('resultado').textContent = `¡Has acertado! El número era ${NumeroRandom}`;
  } else if (Usuario < NumeroRandom) {
    document.getElementById('resultado').textContent = `Tu número es demasiado bajo. Intenta de nuevo.`;
  } else if (Usuario > NumeroRandom) {
    document.getElementById('resultado').textContent = `Tu número es demasiado alto. Intenta de nuevo.`;
  }

  if (Intentos === maxIntentos) {
    document.getElementById('resultado').textContent = `No has acertado en ${maxIntentos} intentos. El número era ${NumeroRandom}.`;
  }
})