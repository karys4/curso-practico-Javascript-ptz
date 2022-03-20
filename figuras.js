// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

/*const lado = 5;
console.log("Cada lado del cuadrado mide: " + lado + " cm");*/

/*const perimetro = lado * 4;
console.log("El perímetro del cuadrado es: " + perimetro + " cm");

const area = perimetro * perimetro;
console.log("El área del cuadrado es: " + area + " cmˆ2 ");*/

console.groupEnd();

// Código del triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

//Usando arrow function
const perimetroTrianguloArrow = (l1, l2, base) => l1 + l2 + base;

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

/*const trianguloLado1 = 5;
const trianguloLado2 = 4;
const baseTriangulo = 8;
const alturaTriangulo = 10;

console.log(
  "Cada lado del triángulo mide: " +
    trianguloLado1 +
    " cm, " +
    trianguloLado2 +
    " cm, " +
    baseTriangulo +
    " cm"
);

const perimetroTriangulo = trianguloLado1 + trianguloLado2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + " cmˆ2 ");*/

console.groupEnd();

// Código del círculo
console.group("Circulo");

const PI = Math.PI;
//const diametro = radioCirculo * 2;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * Math.PI;
}

//const radioCirculo = 5;

/*console.log("El diámetro del círculo es: " + diametro + " cm");

const perimetroCirculo = diametro * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("El área del círculo es: " + areaCirculo + " cmˆ2 ");*/

console.groupEnd();

// Interactuando con HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}
