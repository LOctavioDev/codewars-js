// Problema:
// Dado un string, cuenta cuántas veces aparece cada letra y devuelve un objeto con el conteo.

// 🧠 Pistas:

// Usa un objeto {} para guardar las apariciones.
// Recorre la palabra con un bucle y actualiza el conteo.

// Ejemplo:

// contarLetras("hola") ➝ { h: 1, o: 1, l: 1, a: 1 }
// contarLetras("banana") ➝ { b: 1, a: 3, n: 2 }

// Reto: Intenta usar el método reduce() en lugar de un for.

function contarLetras(cadena) {
  cadenaArray = cadena.split('');
  return cadenaArray.reduce((acumulador, valorActual) => {
    acumulador[valorActual] = (acumulador[valorActual] || 0) + 1;
    return acumulador
  }, {});
}

console.log(contarLetras('hola'));
console.log(contarLetras('banana'));
