/*
Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie

1000 a 10000 metros = bicicleta

10000 a 30000 metros = colectivo

30000 a 100000 metros = auto

+100000 = avion
*/

function transporteAdecuado(distancia) {
  if (distancia >= 100000) {
    return "avion";
  } else if (distancia < 100000 && distancia > 30000) {
    return "auto";
  } else if (distancia <= 30000 && distancia > 10000) {
    return "colectivo";
  } else if (distancia <= 10000 && distancia > 1000) {
    return "bicicleta";
  } else {
    return "pie";
  }
}

console.log(transporteAdecuado(60000));
