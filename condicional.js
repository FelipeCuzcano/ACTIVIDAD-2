alert("Bienvenido a la pagina de javascript");
var nom = promtp("Ingrese su nombre y Apellido");
var res1 = prompt("¿Cómo se llama al primer día de la Primavera?\nA: Primer Día de la primavera\nB: Equinoccio de Primavera\nC: Equinoccio de Invierno");
if(res1=="B"){
  res1 = 25;
}else{
    res1 = 0;
}

var res2 = prompt("¿Que sucede en el Polo Norte cuando llega la Primavera?\nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de oscuridad ininterrumpida\nC: 6 meses de alternancia de luz y oscuridad");
if(res2=="B"){
  res2 = 25;
}else{
    res2 = 0;
}

var res3 = prompt("¿En qué mes empieza la primavera en el Hemisferio Norte?\nA: Setiembre\nB: Junio\nC: Agosto");
if(res3=="B"){
  res3 = 25;
}else{
    res3 = 0;
}

var res3 = prompt("¿Qué es la fiesta de la primavera en china?\nA: La navidad\nB: El año nuevo\nC: Fiestas patrias de CHINA");
if(res3=="B"){
  res3 = 25;
}else{
    res3 = 0;
}


var total = res1 + res2 + res3


document.write("<h1>Condicionales</h1>")
document.write("Respuestas <br>")
document.write(nom + "tus resultados son <br>");
document.write(total + "% de respuestas corre");