function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1] + 1) {
      return arr[i]
    }
  }
  return null

}

const firstArray = [1, 2, 3, 4, 6, 7, 8];
const secondArray = [1, 2, 3, 4];

console.log(firstNonConsecutive(secondArray));
