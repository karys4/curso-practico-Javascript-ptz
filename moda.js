const lista1moda = [1, 4, 5, 6, 2, 1, 8, 4, 4, 3];

const lista1Count = {};

lista1moda.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

//Convertir un objeto a un arreglo

const lista1Array = Object.entries(lista1Count).sort(function (
  elementoA,
  elementoB
) {
  return elementoA[1] - elementoB[1];
});

const moda = lista1Array[lista1Array.length - 1];
