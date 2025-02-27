// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

// removeChar('eloquent') -> 'loquen'
// removeChar('country')  -> 'ountr'
// removeChar('person')   -> 'erso'

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

console.log(removeChar('ab'));
