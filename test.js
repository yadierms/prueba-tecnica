// Mark y John están tratando de comparar su IMC (índice de masa corporal),
// que se calcula mediante la fórmula: IMC = masa / altura ^ 2 = masa / (altura * altura).
// (masa en kg y altura en metros).

// 1. Almacene la masa y la altura de Mark y John en variables
// 2. Calcula el IMC de ambos
// 3. Cree una variable booleana que contenga información sobre si Mark tiene un IMC más alto que John.
// 4. Imprima una cadena en la consola que contenga la variable del paso 3.
// (Algo así como "¿Es el IMC de Mark más alto que el de John? Verdadero").

const markMasa = 100;
const markAltura = 1.7;
const jonhMasa = 90;
const jonhAltura = 1.68;

const IMCCalculator = (masa, altura) => {
  return masa / (altura * altura);
};

const imcMark = IMCCalculator(markMasa, markAltura);
const imcJonh = IMCCalculator(jonhMasa, jonhAltura);
const esMayor = imcMark > imcJonh;

console.log(`¿Es el IMC de Mark más alto que el de John? ${esMayor}`);
