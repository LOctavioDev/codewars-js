// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let zeros = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(0)
        }
    }

    const newarray = arr.filter(zero => zero !== 0)
    const finalarray = newarray.concat(zeros)
    return finalarray;
}

arreglo1 = ['a', 'b', null, 'c', 'd', 1, 1, 3, 1, 9, {}, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0]

console.log(moveZeros(arreglo1))
