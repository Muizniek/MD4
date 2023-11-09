import $ from 'jquery';
import sum from './utils/sum/sum';


const subtract = (a: number, b: number): number => a - b;

console.log(subtract(1, 2)); // -1
console.log(subtract(10, 5)); // 5
console.log(subtract(99, 1)); // 98

console.log(1,"uzdevums")
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

function addNumbers(a:number, b:number) :number {
    return a + b;}
  
  console.log(addNumbers(1,2)); // Expected output: 3
  console.log(addNumbers(1,10)); // Expected output: 11
  console.log(addNumbers(99, 1)); // Expected output: 100

  console.log(2,"uzdevums")
//Write a function that takes a value as argument
//Return the type of the value

function getValueType(value: any): string {
    const type = typeof value;
    if (type === 'object') {
      if (value === null) {
        return 'null';
      }
      if (Array.isArray(value)) {
        return 'array';
      }
    }
    return type;
  }
  
  console.log(getValueType(1)); // Expected output: 'number'
  console.log(getValueType(false)); // Expected output: 'boolean'
  console.log(getValueType({})); // Expected output: 'object'
  console.log(getValueType(null)); // Expected output: 'null'
  console.log(getValueType('string')); // Expected output: 'string'
  console.log(getValueType(['array'])); // Expected output: 'array'
   

  console.log(3,"uzdevums")
//Write a function that takes two values, say a and b, as arguments
//Return true if the two values are equal and of the same type

function areEqualAndSameType(a: any, b: any): boolean {
    return a === b;
  }
  
  console.log(areEqualAndSameType(2, 3)); // Expected output: false
  console.log(areEqualAndSameType(3, 3)); // Expected output: true
  console.log(areEqualAndSameType(1, '1')); // Expected output: false
  console.log(areEqualAndSameType('10', '10')); // Expected output: true

  console.log(4,"uzdevums")
//Write a function that takes a string (a) and a number (n) as arguments
//Return the nth character of 'a'

function getNthCharacter(a: string, n: number): string {
    if (n >= 0 && n < a.length) {
      return a[n];
    } else {
      return ''; // Return an empty string for out-of-range indices
    }
  }
  
  console.log(getNthCharacter('abcd', 1)); // Expected output: 'a'
  console.log(getNthCharacter('zyxbwpl', 5)); // Expected output: 'w'
  console.log(getNthCharacter('gfedcba', 3)); // Expected output: 'e'


  console.log(5,"uzdevums")
//Write a function that takes a string (a) as argument
//Remove the first 3 characters of a
//Return the result


function removeFirstThreeCharacters(a: string): string {
    if (a.length >= 3) {
      return a.substring(3);
    } else {
      return ''; // Return an empty string if the string is shorter than 3 characters
    }
  }
  
  console.log(removeFirstThreeCharacters('abcdefg')); // Expected output: 'defg'
  console.log(removeFirstThreeCharacters('1234')); // Expected output: '4'
  console.log(removeFirstThreeCharacters('fgedcba')); // Expected output: 'dcba'

console.log(6,"uzdevums")
//Write a function that takes a string as argument
//Extract the last 3 characters from the string
//Return the result

function extractLastThreeCharacters(a: string): string {
    const length = a.length;
    if (length >= 3) {
      return a.substring(length - 3);
    } else {
      return a; // Return the original string if it's shorter than 3 characters
    }
  }
  
  console.log(extractLastThreeCharacters('abcdefg')); // Expected output: 'efg'
  console.log(extractLastThreeCharacters('1234')); // Expected output: '234'
  console.log(extractLastThreeCharacters('fgedcba')); // Expected output: 'cba'

  console.log(7,"uzdevums")
//Write a function that takes a string (a) as argument
//Get the first 3 characters of a
//Return the result

function getFirstThreeCharacters(a: string): string {
    if (a.length >= 3) {
      return a.substring(0, 3);
    } else {
      return a; // Return the original string if it's shorter than 3 characters
    }
  }
  
  console.log(getFirstThreeCharacters('abcdefg')); // Expected output: 'abc'
  console.log(getFirstThreeCharacters('1234')); // Expected output: '123'
  console.log(getFirstThreeCharacters('fgedcba')); // Expected output: 'fge'

  console.log(8,"uzdevums")
//Write a function that takes a string (a) as argument
//Extract the first half a
//Return the result

function extractFirstHalf(a: string): string {
    const halfLength = Math.ceil(a.length / 2); // Calculate the length of the first half
    return a.slice(0, halfLength);
  }
  
  console.log(extractFirstHalf('abcdefgh')); // Expected output: 'abcd'
  console.log(extractFirstHalf('1234')); // Expected output: '12'
  console.log(extractFirstHalf('gedcba')); // Expected output: 'ged'

  console.log(9,"uzdevums")
//Write a function that takes a string (a) as argument
//Remove the last 3 characters of a
//Return the result

function removeLastThreeCharacters(a: string): string {
    if (a.length >= 3) {
      return a.substring(0, a.length - 3);
    } else {
      return a; // Return the original string if it's shorter than 3 characters
    }
  }
  
  console.log(removeLastThreeCharacters('abcdefg')); // Expected output: 'abcd'
  console.log(removeLastThreeCharacters('1234')); // Expected output: '1'
  console.log(removeLastThreeCharacters('fgedcba')); // Expected output: 'fged'

  console.log(10,"uzdevums")
//Write a function that takes two numbers (a and b) as argument
//Return b percent of a


function calculatePercentageOfA(a: number, b: number): number {
    const percentage = (b / 100) * a;
    return percentage;
  }
  
  console.log(calculatePercentageOfA(100, 50)); // Expected output: 50
  console.log(calculatePercentageOfA(10, 1));   // Expected output: 0.1
  console.log(calculatePercentageOfA(500, 25)); // Expected output: 125

  console.log(11,"uzdevums")
//Write a function that takes two numbers (a and b) as argument
//Return b percent of a

  function complexMathOperation(a: number, b: number, c: number, d: number, e: number, f: number): number {
    const sumAB = a + b;
    const subtractC = sumAB - c;
    const multiplyDivideDE = (subtractC * d) / e;
    const result = Math.pow(multiplyDivideDE, f);
    return result;
  }
  
  console.log(complexMathOperation(6, 5, 4, 3, 2, 1)); // Expected output: 10.5
  console.log(complexMathOperation(6, 2, 1, 4, 2, 3)); // Expected output: 2744
  console.log(complexMathOperation(2, 3, 6, 4, 2, 3)); // Expected output: -8
  
 console.log(12,"uzdevums")
//Write a function that takes a number as argument
//If the number is even, return true
//Otherwise, return false

function isEven(number: number): boolean {
    return number % 2 === 0;
  }
  
  console.log(isEven(10));   // Expected output: true
  console.log(isEven(-4));   // Expected output: true
  console.log(isEven(5));    // Expected output: false
  console.log(isEven(-111)); // Expected output: false

 console.log(13,"uzdevums")
//Write a function that takes two strings (a and b) as arguments
//Return the number of times a occurs in b

function countOccurrences(a: string, b: string): number {
    const escapedA = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters in 'a'
    const regex = new RegExp(escapedA, 'g');
    const matches = b.match(regex);
    return matches ? matches.length : 0;
  }
  
  console.log(countOccurrences('m', 'how many times does the character occur in this sentence?')); // Expected output: 2
  console.log(countOccurrences('h', 'how many times does the character occur in this sentence?')); // Expected output: 4
  console.log(countOccurrences('?', 'how many times does the character occur in this sentence?')); // Expected output: 1
  console.log(countOccurrences('z', 'how many times does the character occur in this sentence?')); // Expected output: 0
  
 console.log(14,"uzdevums")
//Write a function that takes a number (a) as argument
//If a is a whole number (has no decimal place), return true
//Otherwise, return false

function isWholeNumber(a: number): boolean {
    return Number.isInteger(a);
  }
  
  console.log(isWholeNumber(4));      // Expected output: true
  console.log(isWholeNumber(1.123));  // Expected output: false
  console.log(isWholeNumber(1048));   // Expected output: true
  console.log(isWholeNumber(10.48));  // Expected output: false
  
 console.log(15,"uzdevums")
//Write a function that takes two numbers (a and b) as arguments
//If a is smaller than b, divide a by b
//Otherwise, multiply both numbers
//Return the resulting value

function performOperation(a: number, b: number): number {
    if (a < b) {
      return a / b;
    } else {
      return a * b;
    }
  }
  
  console.log(performOperation(10, 100)); // Expected output: 0.1
  console.log(performOperation(90, 45));  // Expected output: 4050
  console.log(performOperation(8, 20));   // Expected output: 0.4
  console.log(performOperation(2, 0.5));  // Expected output: 1
  
 console.log(16,"uzdevums")
//Write a function that takes two strings (a and b) as arguments
//If a contains b, append b to the beginning of a
//If not, append it to the end
//Return the concatenation

function concatenateStrings(a: string, b: string): string {
    if (a.includes(b)) {
      return b + a;
    } else {
      return a + b;
    }
  }
  
  console.log(concatenateStrings('cheese', 'cake'));                      // Expected output: 'cheesecake'
  console.log(concatenateStrings('lips', 's'));                            // Expected output: 'slips'
  console.log(concatenateStrings('Java', 'script'));                       // Expected output: 'Javascript'
  console.log(concatenateStrings(' think, therefore I am', 'I'));          // Expected output: 'I think, therefore I am'
  
console.log(17,"uzdevums")
//Write a function that takes a number (a) as argument
//Round a to the 2nd digit after the comma
//Return the rounded number

function roundToTwoDecimalPlaces(a: number): number {
    return Number(a.toFixed(2));
  }
  
  console.log(roundToTwoDecimalPlaces(2.12397)); // Expected output: 2.12
  console.log(roundToTwoDecimalPlaces(3.136));   // Expected output: 3.14
  console.log(roundToTwoDecimalPlaces(1.12397)); // Expected output: 1.12
  console.log(roundToTwoDecimalPlaces(26.1379)); // Expected output: 26.14  

 console.log(18,"uzdevums")
//Write a function that takes a number (a) as argument
//Split a into its individual digits and return them in an array
//Tip: you might want to change the type of the number for the splitting

function splitNumberIntoDigits(a: number): number[] {
    const digitsString = a.toString();
    const digitsArray = digitsString.split('').map(Number);
    return digitsArray;
  }
  
  console.log(splitNumberIntoDigits(10));      // Expected output: [1, 0]
  console.log(splitNumberIntoDigits(931));     // Expected output: [9, 3, 1]
  console.log(splitNumberIntoDigits(193278));  // Expected output: [1, 9, 3, 2, 7, 8]
  
 console.log(19,"uzdevums")
//It seems like something happened to these strings
//Can you figure out how to clear up the chaos?
//Write a function that joins these strings together such that they form the following words:
//'Javascript', 'Countryside', and 'Downtown'
//You might want to apply basic JS string methods such as replace(), split(), slice() etc.

function rearrangeStrings(s1: string, s2: string): string {
    const word1 = s1.replace(/[^a-zA-Z]/g, '');
    const word2 = s2.replace(/[^a-zA-Z]/g, '').split('').reverse().join(''); // Reverse s2
    return word1 + word2;
  }
  
  console.log(rearrangeStrings('java', 'tpi%rcs'));   // Expected output: 'Javascript'
  console.log(rearrangeStrings('c%ountry', 'edis'));  // Expected output: 'Countryside'
  console.log(rearrangeStrings('down', 'nw%ot'));     // Expected output: 'Downtown'

  
 console.log(20,"uzdevums")
//This challenge is a little bit more complex
//Write a function that takes a number (a) as argument
//If a is prime, return a
//If not, return the next higher prime number

function isPrime(number: number): boolean {
    if (number <= 1) {
      return false;
    } else if (number <= 3) {
      return true;
    } else if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
  
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
  
    return true;
  }
  
  function nextHigherPrime(a: number): number {
    let nextPrime = a;
  
    while (true) {
      nextPrime++;
      if (isPrime(nextPrime)) {
        return nextPrime;
      }
    }
  }
  
  function myFunction(a: number): number {
    if (isPrime(a)) {
      return a;
    } else {
      return nextHigherPrime(a);
    }
  }
  
  console.log(myFunction(38));   // Expected output: 41
  console.log(myFunction(7));    // Expected output: 7
  console.log(myFunction(115));  // Expected output: 127
  console.log(myFunction(2000)); // Expected output: 2003
  

 console.log(21,"uzdevums")
//Write a function that takes two numbers, say x and y, as arguments
//Check if x is divisible by y
//If yes, return x
//If not, return the next higher natural number that is divisible by y

function nextDivisibleNumber(x: number, y: number): number {
    if (x % y === 0) {
      return x;
    } else {
      const remainder = x % y;
      const nextDivisible = x - remainder + y;
      return nextDivisible;
    }
  }
  
  function myFunctione(x: number, y: number): number {
    if (x < 0) {
      return 0;
    } else {
      return nextDivisibleNumber(x, y);
    }
  }
  
  console.log(myFunctione(1, 23));   // Expected output: 23
  console.log(myFunctione(23, 23));  // Expected output: 23
  console.log(myFunctione(7, 3));    // Expected output: 9
  console.log(myFunctione(-5, 7));   // Expected output: 0
  
  console.log(22,"uzdevums")
//Write a function that takes two strings (a and b) as arguments
//Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
//Return the resulting string

function insertAfterEvery3rdCharacter(a: string, b: string): string {
    const result = [];
    for (let i = a.length - 1; i >= 0; i--) {
      result.unshift(a[i]);
      if ((a.length - i) % 3 === 0 && i !== 0) {
        result.unshift(b);
      }
    }
    return result.join('');
  }
  
  console.log(insertAfterEvery3rdCharacter('1234567', '.'));     // Expected output: '1.234.567'
  console.log(insertAfterEvery3rdCharacter('abcde', '$'));       // Expected output: 'ab$cde'
  console.log(insertAfterEvery3rdCharacter('zxyzxyzxyzxyzxyz', 'w')); // Expected output: 'zwxyzwxyzwxyzwxyzwxyz'
 
  console.log(23,"uzdevums")
//Write a function that takes a string as argument
//As it is, the string has no meaning
//Increment each letter to the next letter in the alphabet
//Return the correct word

function incrementStringLetters(input: string): string {
    const result = [];
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (/[a-zA-Z]/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const offset = isUpperCase ? 65 : 97;
        const incrementedChar = String.fromCharCode(((char.charCodeAt(0) - offset + 1) % 26) + offset);
        result.push(incrementedChar);
      } else {
        result.push(char);
      }
    }
    return result.join('');
  }
  
  console.log(incrementStringLetters('bnchmf'));  // Expected output: 'coding'
  console.log(incrementStringLetters('bgddrd'));  // Expected output: 'cheese'
  console.log(incrementStringLetters('sdrshmf')); // Expected output: 'testing'  
  

 console.log(24,"uzdevums")
//Write a function that takes an array (a) and a value (n) as argument
//Return the nth element of 'a'

function getNthElement(a: any[], n: number): any {
    if (n >= 1 && n <= a.length) {
      return a[n - 1];
    } else {
      return undefined; // Return undefined for out-of-bounds index
    }
  }
  
  console.log(getNthElement([1, 2, 3, 4, 5], 3));  // Expected output: 3
  console.log(getNthElement([10, 9, 8, 7, 6], 5)); // Expected output: 6
  console.log(getNthElement([7, 2, 1, 6, 3], 1));  // Expected output: 7
  

  console.log(25,"uzdevums")
//Write a function that takes an array (a) as argument
//Remove the first 3 elements of 'a'
//Return the result

function removeFirst3Elements(a: any[]): any[] {
    if (a.length >= 3) {
      return a.slice(3); // Return a new array starting from the 4th element (index 3)
    } else {
      return []; // Return an empty array if 'a' has fewer than 3 elements
    }
  }
  
  console.log(removeFirst3Elements([1, 2, 3, 4]));      // Expected output: [4]
  console.log(removeFirst3Elements([5, 4, 3, 2, 1, 0])); // Expected output: [2, 1, 0]
  console.log(removeFirst3Elements([99, 1, 1]));        // Expected output: []
  
 
 
  console.log(26,"uzdevums")
//Write a function that takes an array (a) as argument
//Extract the last 3 elements of a
//Return the resulting array

function extractLast3Elements(a: any[]): any[] {
    if (a.length >= 3) {
      return a.slice(-3); // Return a new array containing the last 3 elements
    } else {
      return a.slice(); // Return a copy of the entire array if 'a' has fewer than 3 elements
    }
  }
  
  console.log(extractLast3Elements([1, 2, 3, 4]));      // Expected output: [2, 3, 4]
  console.log(extractLast3Elements([5, 4, 3, 2, 1, 0])); // Expected output: [2, 1, 0]
  console.log(extractLast3Elements([99, 1, 1]));        // Expected output: [99, 1, 1]
  
 
 
  console.log(27,"uzdevums")
//Write a function that takes an array (a) as argument
//Extract the first 3 elements of a
//Return the resulting array

function extractFirst3Elements(a: any[]): any[] {
    if (a.length >= 3) {
      return a.slice(0, 3); // Return a new array containing the first 3 elements
    } else {
      return a.slice(); // Return a copy of the entire array if 'a' has fewer than 3 elements
    }
  }
  
  console.log(extractFirst3Elements([1, 2, 3, 4]));      // Expected output: [1, 2, 3]
  console.log(extractFirst3Elements([5, 4, 3, 2, 1, 0])); // Expected output: [5, 4, 3]
  console.log(extractFirst3Elements([99, 1, 1]));        // Expected output: [99, 1, 1]
  

 console.log(28,"uzdevums")
//Write a function that takes an array (a) and a number (n) as arguments
//It should return the last n elements of a

function getLastNElements(a: any[], n: number): any[] {
    if (n <= 0) {
      return [];
    } else if (n >= a.length) {
      return a.slice();
    } else {
      return a.slice(a.length - n);
    }
  }
  
  console.log(getLastNElements([1, 2, 3, 4, 5], 2)); // Expected output: [4, 5]
  console.log(getLastNElements([1, 2, 3], 6));      // Expected output: [1, 2, 3]
  console.log(getLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3)); // Expected output: [6, 7, 8]
  
 
  console.log(29,"uzdevums")
//Write a function that takes an array (a) and a value (b) as argument
//The function should clean a from all occurrences of b
//Return the filtered array

function removeValueFromArray(a: any[], b: any): any[] {
    return a.filter((element) => element !== b);
  }
  
  console.log(removeValueFromArray([1, 2, 3], 2));      // Expected output: [1, 3]
  console.log(removeValueFromArray([1, 2, '2'], '2'));   // Expected output: [1, 2]
  console.log(removeValueFromArray([false, '2', 1], false)); // Expected output: ['2', 1]
  console.log(removeValueFromArray([1, 2, '2', 1], 1));  // Expected output: [2, '2']

  console.log(30,"uzdevums")
//Write a function that takes an array (a) as argument
//Return the number of elements in a

function countElements(a: any[]): number {
  return a.length;
}

console.log(countElements([1, 2, 2, 4]));   // Expected output: 4
console.log(countElements([9, 9, 9]));      // Expected output: 3
console.log(countElements([4, 3, 2, 1, 0])); // Expected output: 5

 
 
  console.log(31,"uzdevums")
//Write a function that takes an array of numbers as argument
//Return the number of negative values in the array

function countNegativeNumbers(arr: number[]): number {
    return arr.filter((number) => number < 0).length;
  }
  
  console.log(countNegativeNumbers([1, -2, 2, -4]));  // Expected output: 2
  console.log(countNegativeNumbers([0, 9, 1]));       // Expected output: 0
  console.log(countNegativeNumbers([4, -3, 2, 1, 0])); // Expected output: 1
  


 console.log(33,"uzdevums")
//Write a function that takes an array of numbers as argument
//It should return an array with the numbers sorted in descending order

function sortDescending(arr: number[]): number[] {
    return arr.slice().sort((a, b) => b - a);
  }
  
  console.log(sortDescending([1, 3, 2]));     // Expected output: [3, 2, 1]
  console.log(sortDescending([4, 2, 3, 1])); // Expected output: [4, 3, 2, 1]
  
 
  console.log(34,"uzdevums")
//Write a function that takes an array of strings as argument
//Sort the array elements alphabetically
//Return the result

function sortAlphabetically(arr: string[]): string[] {
    return arr.slice().sort();
  }
  
  console.log(sortAlphabetically(['b', 'c', 'd', 'a'])); // Expected output: ['a', 'b', 'c', 'd']
  console.log(sortAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // Expected output: ['a', 'a', 'c', 'd', 'w', 'y', 'z']
  
  console.log(35,"uzdevums")
//Write a function that takes an array of numbers as argument
//It should return the average of the numbers

function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
      return 0; // Return 0 if the array is empty to avoid division by zero.
    }
  
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
  }
  
  console.log(calculateAverage([10, 100, 40]));      // Expected output: 50
  console.log(calculateAverage([10, 100, 1000]));    // Expected output: 370
  console.log(calculateAverage([-50, 0, 50, 200]));  // Expected output: 50
  
 
 
  console.log(36,"uzdevums")
 /*
Write a function that takes an array of strings as argument
Return the longest string
*/

function findLongestString(strings: string[]): string {
    if (strings.length === 0) {
      return ''; // Return an empty string if the array is empty.
    }
  
    let longest = strings[0]; // Initialize the longest string with the first string.
  
    for (let i = 1; i < strings.length; i++) {
      if (strings[i].length > longest.length) {
        longest = strings[i];
      }
    }
  
    return longest;
  }
  
  console.log(findLongestString(['help', 'me']));        // Expected output: 'help'
  console.log(findLongestString(['I', 'need', 'candy'])); // Expected output: 'candy'
  

 console.log(37,"uzdevums")
 /*
Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise
*/

function areAllElementsEqual(arr: any[]): boolean {
    if (arr.length < 2) {
      return true; // If the array has 0 or 1 element, they are equal by default.
    }
  
    const firstElement = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== firstElement) {
        return false; // If any element is not equal to the first one, return false.
      }
    }
  
    return true; // All elements are equal.
  }
  
  console.log(areAllElementsEqual([true, true, true, true]));      // Expected output: true
  console.log(areAllElementsEqual(['test', 'test', 'test']));     // Expected output: true
  console.log(areAllElementsEqual([1, 1, 1, 2]));                // Expected output: false
  console.log(areAllElementsEqual(['10', 10, 10, 10]));           // Expected output: false
  
 
 
  console.log(38,"uzdevums")
/*
Write a function that takes arguments an arbitrary number of arrays
It should return an array containing the values of all arrays
*/
 
function mergeArrays(...arrays: any[][]): any[] {
    return arrays.flat();
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6]));                        // Expected output: [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(['a', 'b', 'c'], [4, 5, 6]));                   // Expected output: ['a', 'b', 'c', 4, 5, 6]
  console.log(mergeArrays([true, true], [1, 2], ['a', 'b']));             // Expected output: [true, true, 1, 2, 'a', 'b']
  
 
  console.log(39,"uzdevums")
/*
Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array
*/

function sortArrayOfObjectsByProperty(arr: any[], property: string): any[] {
    return arr.slice().sort((a, b) => a[property] - b[property]);
  }
  
  console.log(sortArrayOfObjectsByProperty([{ a: 1, b: 2 }, { a: 5, b: 4 }], 'b')); // Expected output: [{a: 1, b: 2}, {a: 5, b: 4}]
  console.log(sortArrayOfObjectsByProperty([{ a: 2, b: 10 }, { a: 5, b: 4 }], 'b')); // Expected output: [{a: 5, b: 4}, {a: 2, b: 10}]
  console.log(sortArrayOfObjectsByProperty([{ a: 1, b: 7 }, { a: 2, b: 1 }], 'b')); // Expected output: [{a: 2, b: 1}, {a: 1, b: 7}]
  
  console.log(40,"uzdevums")
/*
Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array
*/

function mergeAndSortArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArray = [...arr1, ...arr2];
    const uniqueArray = Array.from(new Set(mergedArray));
    return uniqueArray.sort((a, b) => a - b);
  }
  
  console.log(mergeAndSortArrays([1, 2, 3], [3, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
  console.log(mergeAndSortArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // Expected output: [-11, -10, 5, 22, 41, 42, 333]
  
  console.log(41,"uzdevums")
/*
Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum
*/

function sumArrayElementsGreaterThan(arr: number[], threshold: number): number {
    return arr.reduce((sum, element) => (element > threshold ? sum + element : sum), 0);
  }
  
  console.log(sumArrayElementsGreaterThan([1, 2, 3, 4, 5, 6, 7], 2));    // Expected output: 25
  console.log(sumArrayElementsGreaterThan([-10, -11, -3, 1, -4], -3));   // Expected output: 1
  console.log(sumArrayElementsGreaterThan([78, 99, 100, 101, 401], 99)); // Expected output: 602
  
   console.log(42,"uzdevums")
/*
Write a function that takes two numbers (min and max) as arguments
Return an array of numbers in the range min to max
*/

function generateRange(min: number, max: number): number[] {
    const result = [];
  
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
  
    return result;
  }
  
  console.log(generateRange(2, 10)); // Expected output: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(generateRange(1, 3));  // Expected output: [1, 2, 3]
  console.log(generateRange(-5, 5)); // Expected output: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
  console.log(generateRange(2, 7));  // Expected output: [2, 3, 4, 5, 6, 7]
  
  
   console.log(43,"uzdevums")
/*
Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']}
*/

function groupStringsByFirstLetter(arr: string[]): { [key: string]: string[] } {
    const groupedObject: { [key: string]: string[] } = {};
  
    for (const str of arr) {
      const firstLetter = str[0].toLowerCase();
  
      if (groupedObject[firstLetter]) {
        groupedObject[firstLetter].push(str);
      } else {
        groupedObject[firstLetter] = [str];
      }
    }
  
    return groupedObject;
  }
  
  console.log(groupStringsByFirstLetter(['Alf', 'Alice', 'Ben']));
  // Expected output: { a: ['Alf', 'Alice'], b: ['Ben'] }
  
  console.log(groupStringsByFirstLetter(['Ant', 'Bear', 'Bird']));
  // Expected output: { a: ['Ant'], b: ['Bear', 'Bird'] }
  
  console.log(groupStringsByFirstLetter(['Berlin', 'Paris', 'Prague']));
  // Expected output: { b: ['Berlin'], p: ['Paris', 'Prague'] }
  

  console.log(44,"uzdevums")
/*
Write a function that takes an array with arbitrary elements and a number as arguments
Return a new array, the first element should be either the given number itself
or zero if the number is smaller than 6
The other elements should be the elements of the original array
Try not to mutate the original array
*/

function createNewArray(arr: any[], num: number): any[] {
    const result = num < 6 ? [0] : [num];
    result.push(...arr); // Spread the elements of the original array into the result array
    return result;
  }
  
  console.log(createNewArray([1, 2, 3], 6)); // Expected output: [6, 1, 2, 3]
  console.log(createNewArray(['a', 'b'], 2));   // Expected output: [0, 'a', 'b']
  console.log(createNewArray([null, false], 11)); // Expected output: [11, null, false]
  
  
   console.log(45,"uzdevums")
/*
Write a function that takes an array (a) and a value (n) as arguments
Save every nth element in a new array
Return the new array
*/

function saveEveryNthElement(arr: number[], n: number): number[] {
    const result = [];
  
    for (let i = n - 1; i < arr.length; i += n) {
      result.push(arr[i]);
    }
  
    return result;
  }
  
  console.log(saveEveryNthElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // Expected output: [3, 6, 9]
  console.log(saveEveryNthElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));   // Expected output: [6, 1]
  console.log(saveEveryNthElement([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));  // Expected output: [2, 6, 4, 8, 10]
  
   console.log(46,"uzdevums")
/*
Write a function that takes an object with two properties as argument
It should return the value of the property with key country
*/

function extractCountryName(obj: { country: string, continent: string }): string {
    return obj.country;
  }
  
  console.log(extractCountryName({ continent: 'Asia', country: 'Japan' })); // Expected output: 'Japan'
  console.log(extractCountryName({ country: 'Sweden', continent: 'Europe' })); // Expected output: 'Sweden'
  
  
   console.log(47,"uzdevums")
/*
Write a function that takes an object with two properties as argument
It should return the value of the property with key 'prop-2'
Tip: you might want to use the square brackets property accessor
*/

function extractProp2Value(obj: { [key: string]: any }): any {
    return obj['prop-2'];
  }
  
  console.log(extractProp2Value({ one: 1, 'prop-2': 2 })); // Expected output: 2
  console.log(extractProp2Value({ 'prop-2': 'two', prop: 'test' })); // Expected output: 'two'
  
  console.log(48,"uzdevums")
/*
Write a function that takes an object with two properties and a string as arguments
It should return the value of the property with key equal to the value of the string
*/

function extractPropertyValue(obj: { [key: string]: string }, keyToExtract: string): string {
    return obj[keyToExtract];
  }
  
  console.log(extractPropertyValue({ continent: 'Asia', country: 'Japan' }, 'continent')); // Expected output: 'Asia'
  console.log(extractPropertyValue({ country: 'Sweden', continent: 'Europe' }, 'country')); // Expected output: 'Sweden'
  
   console.log(49,"uzdevums")
/*
Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise
*/

function hasProperty(obj: { [key: string]: any }, keyToCheck: string): boolean {
    return obj.hasOwnProperty(keyToCheck);
  }
  
  console.log(hasProperty({ a: 1, b: 2, c: 3 }, 'b')); // Expected output: true
  console.log(hasProperty({ x: 'a', y: 'b', z: 'c' }, 'a')); // Expected output: false
  console.log(hasProperty({ x: 'a', y: 'b', z: 'c' }, 'z')); // Expected output: true
  
  
   console.log(50,"uzdevums")
/*
Write a function that a string (a) as argument
Create an object that has a property with key 'key' and a value of a
Return the object
*/

function createObjectWithKey(keyValue: string): { key: string } {
    return { key: keyValue };
  }
  
  console.log(createObjectWithKey('a')); // Expected output: { key: 'a' }
  console.log(createObjectWithKey('z')); // Expected output: { key: 'z' }
  console.log(createObjectWithKey('b')); // Expected output: { key: 'b' }
  
  
   console.log(51,"uzdevums")
/*
Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object
*/

function createObjectFromArrays(keys: any[], values: any[]): { [key: string]: any } {
    const result: { [key: string]: any } = {};
    keys.forEach((key, index) => {
      result[key] = values[index];
    });
    return result;
  }
  
  console.log(createObjectFromArrays(['a', 'b', 'c'], [1, 2, 3])); // Expected output: { a: 1, b: 2, c: 3 }
  console.log(createObjectFromArrays(['w', 'x', 'y', 'z'], [10, 9, 5, 2])); // Expected output: { w: 10, x: 9, y: 5, z: 2 }
  console.log(createObjectFromArrays([1, 'b'], ['a', 2])); // Expected output: { 1: 'a', b: 2 }

   console.log(52,"uzdevums")
/*
Write a function that takes an object (a) as argument
Return an array with all object keys
*/

function getObjectKeys(obj: { [key: string]: any }): string[] {
    return Object.keys(obj);
  }
  
  console.log(getObjectKeys({ a: 1, b: 2, c: 3 })); // Expected output: ['a', 'b', 'c']
  console.log(getObjectKeys({ j: 9, i: 2, x: 3, z: 4 })); // Expected output: ['j', 'i', 'x', 'z']
  console.log(getObjectKeys({ w: 15, x: 22, y: 13 })); // Expected output: ['w', 'x', 'y']  
  
   console.log(53,"uzdevums")
/*
Write a function that takes an object (a) as argument
Return the sum of all object values
*/

function sumObjectValues(obj: { [key: string]: number }): number {
    let sum = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        sum += obj[key];
      }
    }
    return sum;
  }
  
  console.log(sumObjectValues({ a: 1, b: 2, c: 3 })); // Expected output: 6
  console.log(sumObjectValues({ j: 9, i: 2, x: 3, z: 4 })); // Expected output: 18
  console.log(sumObjectValues({ w: 15, x: 22, y: 13 })); // Expected output: 50
  
  
   console.log(54,"uzdevums")
/*
Write a function that takes an object as argument
It should return an object with all original object properties
except for the property with key 'b'
*/

function excludeProperty(obj: { [key: string]: any }, propertyToExclude: string): { [key: string]: any } {
    const result: { [key: string]: any } = {};
    for (const key in obj) {
      if (key !== propertyToExclude) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  
  console.log(excludeProperty({ a: 1, b: 7, c: 3 }, 'b')); // Expected output: { a: 1, c: 3 }
  console.log(excludeProperty({ b: 0, a: 7, d: 8 }, 'b')); // Expected output: { a: 7, d: 8 }
  console.log(excludeProperty({ e: 6, f: 4, b: 5, a: 3 }, 'b')); // Expected output: { e: 6, f: 4, a: 3 }
  


  console.log(55,"uzdevums")
/*
Write a function that takes two objects as arguments
Unfortunately, the property 'b' in the second object has the wrong key
should be named 'd' instead
Merge both objects and correct the wrong property name
Return the resulting object
It should have the properties 'a', 'b', 'c', 'd', and 'e'
*/

function mergeObjects(obj1: { [key: string]: any }, obj2: { [key: string]: any }): { [key: string]: any } {
    const result: { [key: string]: any } = { ...obj1, ...obj2 };
    if (obj2.hasOwnProperty('d')) {
      result.b = obj2.d;
      delete result.d;
    }
    return result;
  }
  
  console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); // Expected output: { a: 1, b: 2, c: 3, e: 5, d: 4 }
  console.log(mergeObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); // Expected output: { a: 5, b: 4, c: 3, e: 2, d: 1 }
  
 
  console.log(56,"uzdevums")
/*
Write a function that takes an object (a) and a number (b) as arguments
Multiply all values of 'a' by 'b'
Return the resulting object
*/

function multiplyObjectValues(obj: { [key: string]: number }, multiplier: number): { [key: string]: number } {
    const result: { [key: string]: number } = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key] * multiplier;
      }
    }
  
    return result;
  }
  
  console.log(multiplyObjectValues({ a: 1, b: 2, c: 3 }, 3)); // Expected output: { a: 3, b: 6, c: 9 }
  console.log(multiplyObjectValues({ j: 9, i: 2, x: 3, z: 4 }, 10)); // Expected output: { j: 90, i: 20, x: 30, z: 40 }
  console.log(multiplyObjectValues({ w: 15, x: 22, y: 13 }, 6)); // Expected output: { w: 90, x: 132, y: 78 }
  
 console.log(57,"uzdevums")
/*
Write a function that takes an object as argument
Somehow, the properties and keys of the object got mixed up
Swap the Javascript object's key with its values and return the resulting object
*/

function swapObjectKeysAndValues(obj: { [key: string]: string | number }): { [key: string]: string } {
    const result: { [key: string]: string } = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[String(obj[key])] = key;
      }
    }
  
    return result;
  }
  
  console.log(swapObjectKeysAndValues({ z: 'a', y: 'b', x: 'c', w: 'd' })); // Expected output: { a: 'z', b: 'y', c: 'x', d: 'w' }
  console.log(swapObjectKeysAndValues({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' })); // Expected output: { a: '2', b: '4', c: '6', d: '8' }
  console.log(swapObjectKeysAndValues({ a: 1, z: 24 })); // Expected output: { '1': 'a', '24': 'z' }
  
 
  console.log(58,"uzdevums")
/*
Write a function that takes an object as argument
Some of the property values contain empty strings
Replace empty strings and strings that contain only whitespace with null values
Return the resulting object
*/

function replaceEmptyWithNull(obj: { [key: string]: string }): { [key: string]: string | null } {
    const result: { [key: string]: string | null } = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key].trim(); // Remove leading/trailing whitespace
        result[key] = value === '' ? null : value;
      }
    }
  
    return result;
  }
  
  console.log(replaceEmptyWithNull({ a: 'a', b: 'b', c: '' })); // Expected output: { a: 'a', b: 'b', c: null }
  console.log(replaceEmptyWithNull({ a: '', b: 'b', c: ' ', d: 'd' })); // Expected output: { a: null, b: 'b', c: null, d: 'd' }
  console.log(replaceEmptyWithNull({ a: 'a', b: 'b ', c: ' ', d: '' })); // Expected output: { a: 'a', b: 'b ', c: null, d: null }
  
 
  console.log(59,"uzdevums")
/*
Write a function that takes an object as argument containing properties with personal information
Extract firstName, lastName, size, and weight if available
If size or weight is given transform the value to a string
Attach the unit cm to the size
Attach the unit kg to the weight
Return a new object with all available properties that we are interested in
*/

function extractPersonalInfo(personalInfo: {
    fn?: string;
    ln?: string;
    size?: number;
    weight?: number;
  }): {
    fn?: string;
    ln?: string;
    size?: string;
    weight?: string;
  } {
    const extractedInfo: {
      fn?: string;
      ln?: string;
      size?: string;
      weight?: string;
    } = {};
  
    if (personalInfo.fn) {
      extractedInfo.fn = personalInfo.fn;
    }
  
    if (personalInfo.ln) {
      extractedInfo.ln = personalInfo.ln;
    }
  
    if (personalInfo.size !== undefined) {
      extractedInfo.size = personalInfo.size + 'cm';
    }
  
    if (personalInfo.weight !== undefined) {
      extractedInfo.weight = personalInfo.weight + 'kg';
    }
  
    return extractedInfo;
  }
  
  console.log(
    extractPersonalInfo({ fn: 'Lisa', ln: 'Müller', size: 175, weight: 67 })
  ); // Expected output: {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
  
  console.log(
    extractPersonalInfo({ fn: 'Martin', ln: 'Harper', weight: 102 })
  ); // Expected output: {fn: 'Martin', ln: 'Harper', weight: '102kg'}
  
  console.log(
    extractPersonalInfo({ fn: 'Andrew', ln: 'Harper', size: 175, weight: 71 })
  ); // Expected output: {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
  
  console.log(
    extractPersonalInfo({ fn: 'Matthew', ln: 'Müller' })
  ); // Expected output: {fn: 'Matthew', ln: 'Müller'}
  

  console.log(60,"uzdevums")
/*
Write a function that takes an array of objects and a string as arguments
Add a property with key 'continent' and value equal to the string to each of the objects
Return the new array of objects
Tip: try not to mutate the original array
*/

function addContinent(objects: { city: string; country: string }[], continent: string): { city: string; country: string; continent: string }[] {
    return objects.map((obj) => ({ ...obj, continent }));
  }
  
  const result1 = addContinent(
    [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }],
    'Asia'
  );
  console.log(result1);
  
  const result2 = addContinent(
    [{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }],
    'Europe'
  );
  console.log(result2);
  
  console.log(61,"uzdevums")
/*
Write a function that takes an array of numbers as argument
Convert the array to an object
It should have a key for each unique value of the array
The corresponding object value should be the number of times the key occurs within the array
*/

function countOccurrencess(arr: number[]): { [key: number]: number } {
    const countObject: { [key: number]: number } = {};
  
    arr.forEach((num) => {
      if (countObject[num]) {
        countObject[num]++;
      } else {
        countObject[num] = 1;
      }
    });
  
    return countObject;
  }
  
  const result12 = countOccurrencess([1, 2, 2, 3]);
  console.log(result12);
  
  const result22 = countOccurrencess([9, 9, 9, 99]);
  console.log(result22);
  
  const result32 = countOccurrencess([4, 3, 2, 1]);
  console.log(result32);
  
   console.log(62,"uzdevums")
/*
Write a function that takes two date instances as arguments
It should return true if the dates are equal
It should return false otherwise
*/

function areDatesEqual(date1: any, date2: any) {
    return date1.getTime() === date2.getTime();
  }
  
  const result122 = areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'));
  console.log(result122);  // Expected: false
  
  const result222 = areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'));
  console.log(result222);  // Expected: true
  
  const result3 = areDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'));
  console.log(result3);  // Expected: false
  

  
   console.log(63,"uzdevums")
/*
Write a function that takes two date instances as argument
It should return the number of days that lies between those dates
*/

function getDaysBetweenDates(date1: any, date2: any) {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const diffMilliseconds = Math.abs(date1 - date2); // Absolute difference in milliseconds
    return Math.round(diffMilliseconds / oneDay);
  }
  
  const result123 = getDaysBetweenDates(new Date('2020-06-11'), new Date('2020-06-01'));
  console.log(result123);  // Expected: 10
  
  const result223 = getDaysBetweenDates(new Date('2000-01-01'), new Date('2020-06-01'));
  console.log(result223);  // Expected: 7457
  
  
   console.log(64,"uzdevums")
/*
Write a function that takes two date instances as argument
It should return true if they fall on the exact same day
It should return false otherwise
*/

function areDatesEquali(date1: any, date2: any) {
    const year1 = date1.getFullYear();
    const month1 = date1.getMonth();
    const day1 = date1.getDate();
  
    const year2 = date2.getFullYear();
    const month2 = date2.getMonth();
    const day2 = date2.getDate();
  
    return year1 === year2 && month1 === month2 && day1 === day2;
  }
  
  console.log(areDatesEquali(new Date('2000/01/01'), new Date('2000/01/01')));  // Expected: true
  console.log(areDatesEquali(new Date('2000/01/01'), new Date('2000/01/02')));  // Expected: false
  console.log(areDatesEquali(new Date('2001/01/01'), new Date('2000/01/01')));  // Expected: false
  console.log(areDatesEquali(new Date('2000/11/01'), new Date('2000/01/01')));  // Expected: false
  


  console.log(65,"uzdevums")
/*
SPREAD OPERATOR 
Use spread operator in all tasks

Write a function that takes two number arrays as parameters 
and return an array which contains elements from both 
arrays
*/

function myFunctionei(arr1 : any, arr2: any) {
    return [...arr1, ...arr2];
  }
  
  console.log(myFunctionei([1, 2], [3, 4])); // Expected: [1, 2, 3, 4]
  console.log(myFunctionei([1, 2], [3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
  
  
   console.log(66,"uzdevums")
/*
Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the last element
*/

function myFunctiones(arr: string[], str: string): string[] {
    return [...arr, str];
  }
  
  console.log(myFunctiones(['Apple', 'Orange', 'Banana'], 'Kiwi'));
  // Expected: ['Apple', 'Orange', 'Banana', 'Kiwi']
  
  
   console.log(67,"uzdevums")
/*
Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the first element
*/

function myFunct(arr: string[], str: string): string[] {
    return [str, ...arr];
  }
  
  console.log(myFunct(['Apple', 'Orange', 'Banana'], 'Kiwi'));
  // Expected: ['Kiwi', 'Apple', 'Orange', 'Banana']
  

console.log(68,"uzdevums")
/*Write a function that takes two objects as parameters 
and return an object which contains properties from both 
objects
*/

function mergeObjectse(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
    return { ...obj1, ...obj2 };
  }
  
  console.log(mergeObjectse({ a: 1, b: 2 }, { c: 3, d: 4 }));
  // Expected: { a: 1, b: 2, c: 3, d: 4 }
  
  console.log(mergeObjectse({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 }));
  // Expected: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
  

console.log(69,"uzdevums")
/*Write a function that takes an object and a string as parameters 
and return an object which contains properties from the given object
and a new property favoriteMovie with the value equal to the given string
*/

function addFavoriteMovie(obj: Record<string, any>, movie: string): Record<string, any> {
  return { ...obj, favoriteMovie: movie };
}

console.log(addFavoriteMovie({ eyeColor: 'green', age: 10 }, 'Garfield'));
// Expected: { eyeColor: 'green', age: 10, favoriteMovie: 'Garfield' }

console.log(addFavoriteMovie({ eyeColor: 'blue', age: 15 }, 'Twilight'));
// Expected: { eyeColor: 'blue', age: 15, favoriteMovie: 'Twilight' }