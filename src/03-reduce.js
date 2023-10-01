/**sumArray
 * Calculates the sum of all numbers in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The sum of all numbers in the array.
 */
function sumArray(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

/**countOccurrences
 * Counts the occurrences of each string in an array.
 * @param {string[]} arr - The array of strings.
 * @returns {Object} An object with keys being the unique strings from the array, and values being the counts of those strings.
 */
function countOccurrences(arr) {
  // Use reduce() to accumulate the counts in an object.
  return arr.reduce((acc, currentString) => {
    // If currentString is already a property in accumulator, increment its count by 1.
    if (acc[currentString]) {
      acc[currentString] += 1;
    } else {
      // If not, initialize its count to 1.
      acc[currentString] = 1;
    }
    return acc; // Return the updated accumulator.
  }, {}); // Initialize accumulator as an empty object.

  // Return the counts object.
}

/**groupByProperty
 * Using the .reduce method
 * Groups an array of objects by a specific property.
 * @param {Object[]} arr - The array of objects.
 * @param {string} prop - The property by which to group the objects.
 * @returns {Object} An object with keys representing the property values and values being arrays of objects.
 */
function groupByProperty(arr, prop) {
  // Use the reduce method to group the objects.
  const grouped = arr.reduce((result, currentObj) => {
    // Get the value of the specified property for the current object.
    const propValue = currentObj[prop];

    // Check if the property value is already a key in the result object.
    if (result[propValue]) {
      // If it is, push the current object to the existing array.
      result[propValue].push(currentObj);
    } else {
      // If it's not, create a new array with the current object as the first element.
      result[propValue] = [currentObj];
    }

    return result; // Return the updated result object.
  }, {}); // Initialize the result object as an empty object.

  return grouped; // Return the grouped object.
}

module.exports = { groupByProperty, countOccurrences, sumArray };
