function jugar(eleccionUsuario){
    var opciones = ["piedra", "papel", "tijera"];
    var eleccionMaquina = opciones[Math.floor(Math.random() * 3)];

    alert("Tú elegiste: " + eleccionUsuario);
    alert("La máquina eligió: " + eleccionMaquina);

    if(eleccionUsuario == eleccionMaquina){
        alert("Empate!");
    } else if((eleccionUsuario == "piedra" && eleccionMaquina == "tijera") ||
               (eleccionUsuario == "papel" && eleccionMaquina == "piedra") ||
               (eleccionUsuario == "tijera" && eleccionMaquina == "papel")){
        alert("Ganaste!");
    } else {
        alert("Perdiste!");
    }
}