/*Crear el código que reciba como parámetro un array de números y devuelva el mayor.*/

function devuelvoElMayorDe(array) {
  max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

let array = [5, 2, 3, 10, 4, 8, 1];
console.log(devuelvoElMayorDe(array));
