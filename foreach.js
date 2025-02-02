// Calculating the Sum of Numbers in an Array
let sum = 0;
const numbers = [65, 44, 12, 4];

function addNumberToSum(item) {
  sum += item;
}

numbers.forEach(addNumberToSum);

console.log("Sum of numbers:", sum);
console.log("End of sum calculation.\n");



// Logging Each Element of an Array
const fruits = ["apple", "orange", "cherry"];

fruits.forEach(fruit => console.log(fruit));
console.log("Displayed all fruits in the array.\n");

// Logging Each Element of an Array with an Anonymous Function
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
console.log("Displayed all elements of array1.\n");



// Adding 10 to Each Element of an Array
const updatedNumbers = [1, 2, 3, 4, 5];

updatedNumbers.forEach((num, index, arr) => {
  arr[index] = num + 10;
});

console.log("Numbers after adding 10:", updatedNumbers);
console.log("Finished updating array elements by adding 10.\n");



// Reversing Strings in an Array
const strings = ["program", "world", "javascript"];

strings.forEach((str, index, arr) => {
  arr[index] = str.split('').reverse().join('');
});

console.log("Reversed strings:", strings);
console.log("Each word in the array has been reversed.\n");



// Filtering Out Odd Numbers from an Array
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = [];

numbersArray.forEach(num => {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});

console.log("Even numbers:", evenNumbers);
console.log("Extracted all even numbers from the array.\n");



// Converting Celsius to Fahrenheit
const celsiusTemperatures = [0, 10, 20, 30, 40];

celsiusTemperatures.forEach((celsius, index, arr) => {
  arr[index] = (celsius * 9/5) + 32;
});

console.log("Temperatures in Fahrenheit:", celsiusTemperatures);
console.log("Converted Celsius temperatures to Fahrenheit.\n");



// Capitalizing Each Element of an Array
const words = ["apple", "banana", "cherry"];

words.forEach((word, index, arr) => {
  arr[index] = word.charAt(0).toUpperCase() + word.slice(1);
});

console.log("Capitalized words:", words);
console.log("Each word in the array has been capitalized.\n");



// Finding the Maximum Number in an Array
const numArray = [10, 20, 5, 30, 15];

let maxNumber = numArray[0];

numArray.forEach(num => {
  if (num > maxNumber) {
    maxNumber = num;
  }
});

console.log("Maximum number:", maxNumber);
console.log("Identified the maximum number in the array.\n");

// Creating HTML List Items
const names = ["John", "Jane", "Bob", "Alice"];

const listItems = [];

names.forEach(name => {
  listItems.push(`<li>${name}</li>`);
});

console.log("HTML List Items:");
console.log("<ul>\n" + listItems.join("\n") + "\n</ul>");
console.log("Created an HTML unordered list from names array.\n");

// Counting Occurrences of Each Letter in a String
const sentence = "The quick brown fox jumps over the lazy dog";
const letterCounts = {};

const letters = sentence.split('');

letters.forEach(letter => {
  if (letter !== ' ') {
    const lowerLetter = letter.toLowerCase();
    letterCounts[lowerLetter] = (letterCounts[lowerLetter] || 0) + 1;
  }
});

console.log("Letter occurrences:", letterCounts);
console.log("Counted occurrences of each letter in the sentence.");
