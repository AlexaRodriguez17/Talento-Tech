function dialaboral(dia, mes, anio){
    let fecha = new Date(anio, mes -1, dia);
    let diadelasemana =fecha.getDay();
    return diadelasemana !==0 && diadelasemana !== 6;
}

let dia = parseInt(prompt("Ingresa el día (1-31):"));
let mes = parseInt(prompt("Ingresa el mes (1-12):"));
let anio = parseInt(prompt("Ingresa el año (4 dígitos):"));

if(dialaboral(dia, mes, anio)){
    mensaje2= ("Es día laboral");
} else{
    mensaje2=("Es fin de semana");
}
alert(mensaje2)