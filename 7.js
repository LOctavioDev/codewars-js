// Encontrar el número que más se repite en un array
// 📌 Problema:
// Dado un array de números, encuentra cuál se repite más veces y cuántas veces aparece.

// 🧠 Pistas:

// Usa un objeto {} para contar las apariciones.
// Recorre el array y actualiza el conteo de cada número.
// Encuentra el número con el mayor conteo.

// Ejemplo:

// numeroMasRepetido([1, 2, 3, 1, 2, 1, 4, 5, 1])
// ➝ { numero: 1, veces: 4 }
// Reto: Intenta hacerlo en una sola pasada sin ordenar el array.

function numeroMasRepetido(arreglo) {
    objeto = arreglo.reduce((acumulador, valorActual) => {
        acumulador[valorActual] = (acumulador[valorActual] || 0) + 1
        return acumulador
    }, {})

    return objeto
}

const arrayTest = [1, 2, 3, 1, 2, 1, 4, 5, 1];

console.log(numeroMasRepetido(arrayTest));
