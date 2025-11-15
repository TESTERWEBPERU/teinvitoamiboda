const fechaEvento = new Date('2026-02-07T16:00:00-05:00').getTime();
setInterval(function() {
  var ahora = new Date().getTime();
  var distancia = fechaEvento - ahora;
  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  document.getElementById("dias").innerHTML = dias < 10 ? '0'+dias : dias;
  document.getElementById("horas").innerHTML = horas < 10 ? '0'+horas : horas;
  document.getElementById("minutos").innerHTML = minutos < 10 ? '0'+minutos : minutos;
  document.getElementById("segundos").innerHTML = segundos < 10 ? '0'+segundos : segundos;
  if (distancia < 0) {
    document.getElementById("cuenta-regresiva").innerHTML = "¡Llegó el gran día!";
  }
}, 1000);
