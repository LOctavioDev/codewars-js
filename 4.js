// Problema:
// Dado un string, determina si es un palíndromo, es decir, si se lee igual de izquierda a derecha y de derecha a izquierda.

// 🧠 Pistas:

// Convierte el string a minúsculas y elimina espacios.
// Invierte el string y compáralo con el original.

// Ejemplo:

// esPalindromo("oso") ➝ true
// esPalindromo("casa") ➝ false

// Reto: Intenta hacerlo con split(), reverse() y join().

function isPalindromo(cadena) {
    let newCadena = cadena
    return newCadena.split("").reverse().join("") == cadena
}

console.log(isPalindromo("oso"))
console.log(isPalindromo("casa"))
