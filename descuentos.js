const precioOriginal = 100;
const descuento = 15;

const porcentajeDescuento = 100 - descuento;
const precioFinal = (precioOriginal * porcentajeDescuento) / 100;

/*console.log(
  `El precio original del producto es de $${precioOriginal} pesos al cual se le aplicará un descuento del ${descuento}% por lo tanto el cliente pagará el ${porcentajeDescuento}% y el precio final es de $${precioFinal} pesos.`
);

console.log({ precioOriginal, descuento, porcentajeDescuento, precioFinal }); */

function calcularPrecioConDescuento(precioOriginal, porcentajeDescuento) {
  const precioFinal = (precioOriginal * (100 - porcentajeDescuento)) / 100;
  return precioFinal;
}

function onClickCalculoDescuento() {
  const inputPrecioOriginal = document.getElementById("InputPrecio");
  const valuePrecio = inputPrecioOriginal.value;
  const inputPorcentajeDescuento = document.getElementById(
    "InputPorcentajedescuento"
  );
  const valuePorcentajeDescuento = inputPorcentajeDescuento.value;
  const precioFinal = calcularPrecioConDescuento(
    valuePrecio,
    valuePorcentajeDescuento
  );
  //Escribir en html desde JavaScript
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio final es de: $" + precioFinal + " pesos";
}
