// Problema:
// Dado un número n, devuelve el n-ésimo número en la secuencia de Fibonacci. La secuencia comienza con:
// 0, 1, 1, 2, 3, 5, 8, 13, 21...
// Cada número se obtiene sumando los dos anteriores.

// 🧠 Pistas:

// La posición 0 es 0 y la posición 1 es 1.
// Usa recursión o un bucle para calcular el valor.

// fibonacci(6) ➝ 8

function fibonacci(n) {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6))
