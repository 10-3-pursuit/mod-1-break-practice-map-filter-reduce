/**
 * Doubles each number in the provided array and then adds the provided value.
 * @param {number[]} arr - The array of numbers to be doubled and added to.
 * @param {number} value - The value to be added after doubling each number.
 * @returns {number[]} A new array with each number doubled and added to.
 *
 * EXAMPLE:
 * doubleAndAdd([1, 2, 3], 5)
 *
 * OUTPUT:
 * [7, 9, 11]
 */
function doubleAndAdd(arr, value) {
  return arr.map((num) => num * 2 + value);
}

/**concatenateAndUppercase
 * Concatenates a string to each string in the provided array and then converts to uppercase.
 * @param {string[]} arr - The array of strings to be concatenated and converted.
 * @param {string} str - The string to be concatenated.
 * @returns {string[]} A new array with each string concatenated and converted to uppercase.
 * 
 * EXAMPLE:
 * concatenateAndUppercase(['apple', 'banana'], ' fruit')
 * 
 * OUTPUT:
 * [
      'APPLE FRUIT',
      'BANANA FRUIT'
    ]
 */
function concatenateAndUppercase(arr, str) {
  return arr.map((word) => word.toUpperCase() + str.toUpperCase());
}

/**convertToObjects
 * Converts an array of strings to an array of objects with properties extracted from the strings.
 * @param {string[]} arr - The array of strings, each string is in "key:value" format.
 * @returns {Object[]} A new array with objects created from the strings.
 *
 * EXAMPLE:
 * convertToObjects(['name:John', 'age:30', 'city:New York'])
 *
 * OUTPUT:
 * [ { name: 'John' }, { age: '30' }, { city: 'New York' } ]
 */

// function convertToObjects(arr) {
//   const result = [];
//   const mappedArray = arr.map((ele) => {
//     const splitArray = ele.split(":");
//     result.push({ [splitArray[0]]: splitArray[1] });

//   });
//   return result;

// }

function convertToObjects(arr) {
  // Use the `map()` method to transform each string in the input array.
  // The `map()` method applies a function to each element of the array
  // and returns a new array with the results of the function.

  return arr.map((mappedArray) => {
    // Inside the `map()` function, each `mappedArray` is a string
    // in the input array.

    // Use the `split(":")` method to split the string into an array
    // by separating it at the colon (":").
    const [key, value] = mappedArray.split(":");

    // Create a new object with a key-value pair, where the key is
    // the first part of the split string (before ":") and the value
    // is the second part (after ":").
    // The key is enclosed in square brackets to create a dynamic property name.
    return { [key]: value };
  });
}

// The function returns an array of objects, where each object represents
// a key-value pair from the input strings.

/**transformToASCII
 * https://www.asciitable.com/
 * Transforms each character in the provided array of strings to its ASCII code.
 * @param {string[]} arr - The array of strings to be transformed.
 * @returns {number[][]} A new array with each string transformed to an array of ASCII codes.
 * EXAMPLE:  transformToASCII(['dog', 'cat'])
 *
 * OUTPUT:
 * [ [ 100, 111, 103 ], [ 99, 97, 116 ] ]
 */

function transformToASCII(arr) {
  // Use .map() to transform each string in the input array
  const result = arr.map((str) => {
    // Use .split('') to split the string into an array of characters
    // Use .map() again to convert each character to its ASCII code
    return str.split("").map((char) => char.charCodeAt(0));
  });

  // Return the resulting array
  return result;
}

module.exports = {
  convertToObjects,
  transformToASCII,
  doubleAndAdd,
  concatenateAndUppercase,
};
