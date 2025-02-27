// Problema:
// Imprime los números del 1 al n, pero siguiendo estas reglas:

// Si el número es múltiplo de 3, imprime "Fizz".
// Si es múltiplo de 5, imprime "Buzz".
// Si es múltiplo de ambos (3 y 5), imprime "FizzBuzz".
// Si no cumple ninguna condición, imprime el número normal.
// 🧠 Pistas:

// Usa un bucle for.
// Usa el operador módulo (%) para detectar múltiplos.

// Ejemplo:

// fizzBuzz(5)
// Salida:
// 1
// 2
// Fizz
// 4
// Buzz

// Reto: ¿Puedes hacerlo en una sola línea usando map()?

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
