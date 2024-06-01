let diadelasemana = prompt("Ingresa el número de día de la semana del 1 al 7:");
let mensaje=" "

switch (parseInt(diadelasemana)) {
  case 1:
    mensaje=("Hoy es Lunes, tiempo de trabajar!");
    break;
  case 2:
    mensaje=("Hoy es Martes, tiempo de trabajar!");
    break;
  case 3:
    mensaje=("Hoy es Miercoles, tiempo de trabajar");
    break;
  case 4:
    mensaje=("Hoy es Jueves, tiempo de trabajar!");
    break;
  case 5:
    mensaje=("Hoy es Viernes, tiempo de trabajar!");
    break;
  case 6:
    mensaje=("Hoy es Sábado, tiempo de descanso!");
    break;
  case 7:
    mensaje=("Hoy es Domingo, tiempo de descanso!");
    break;
  default:
    mensaje=("Día de la semana invalido: " + diadelasemana);
}
alert(mensaje)