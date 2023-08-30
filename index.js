// CH 21
// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// var allLower = userInput.toLowerCase();

//  Correct this statement by yourself.
// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.
// x = x.toLowerCase();

// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.
// y = y.toUpperCase();

// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.
// var originalString = "YourOriginalString";
//var lowerCaseString = originalString.toLowerCase();

// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.
// var myArray = ["S", "A"];
//var index = 0; 
//var lowerCaseElement = myArray[i].toLowerCase();

// 6. Display in an alert the upper-case version of the string
// represented by a variable.
//var myString = "someString";
//var upperCaseString = myString.toUpperCase();
//alert(upperCaseString);

// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.
//var cityName = "kaRacHi";
//cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// ch 22-25

// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.
//var sameWords = "captain";
//var slicedPart = sameWords.slice(1, 3); // "ap"


// 2. The number of characters in the string will be assigned to the
// variable.
//var myString = "example";
//var stringLength = myString.length; // 7

// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.
//var animal = "elephant";
//var seg = animal.slice(1, 5); // "leph"

// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.
//var myString = "example";
//var stringLength = myString.length; // 7
//var secondVariable = stringLength;

// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.
//var myString = "example";
//var numberOfCharacters = myString.length;
//var slicedString = myString.slice(1, -3);

// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
//   3

// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
//    16
// Note: Try the above both examples by yourself.

// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.
//var text = "To go or not to go.";
//var indx = text.lastIndexOf("go");

// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.
// if (typeof myString[indexNum] !== 'undefined') {
//     // Segment at indexNum exists in the string
// }

// 10. In this string "abcde", what character is at index 2? (Use
// charAt)
// c

// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.
//var cha = text.charAt(9);



// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.
//var x = str.charAt(str.length - 1);

// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.
//var cha = input.charAt(4);

// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.
//if (myString.charAt(2) === 'X') {
    // The 3rd character is 'X'
//}

// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.
// var myString = "example";
// var charArray = [];

// for (var i = 0; i < myString.length; i++) {
//     charArray.push(myString.charAt(i));
// }

// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.
// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.
//var newStr = str.replace("1", "one");

// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");
//var y = x.replace(/abc/g, "xyz");

// ch 26
// 1. Form a statement that rounds a number to the nearest integer.
//roundedNumber = round(yourNumber)

// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
//import math
//roundNum = math.ceil(origNum)

// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
//import math
//roundNum = math.floor(origNum)

// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.
//roundedResult = round(yourVariable)

// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.
//roundedValue = round(0.5)

//ch 27
// Convert a random number generated by JavaScript to a number in
// the range 1 to 50
//// Generate a random number between 1 and 50
//var randomNumber = Math.floor(Math.random() * 50) + 1;

// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.
//// Generate a random number and assign it to a new variable
//var newRandomNumber = Math.random(); // This generates a random number between 0 and 1


// 3. You have to create a dice in JavaScript with the use of pseudo-
// random number.
//// 
//var diceRoll = Math.floor(Math.random() * 6) + 1;


// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.
// Simulate a coin toss (0 for heads, 1 for tails)
// var coinToss = Math.round(Math.random());
// if (coinToss === 0) {
//     console.log("Heads");
// } else {
//     console.log("Tails");
// }
// // ch 28 29
// 1. How do you convert a string to an integer in JavaScript?
//var stringNumber = "42";
// var integerNumber = parseInt(stringNumber);


// 2. Write a JavaScript function to convert the string "123" to an
// integer.
//function stringToInteger(str) {
//     return parseInt(str);
// }

// var integerNumber = stringToInteger("123");

// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?
//var stringDecimal = "3.14";
//var floatingPointNumber = parseFloat(stringDecimal);

// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?
//var stringToCheck = "42";

// if (!isNaN(parseInt(stringToCheck))) {
//     // Conversion to integer is possible
//     var integerNumber = parseInt(stringToCheck);
// }

// if (!isNaN(parseFloat(stringToCheck))) {
//     // Conversion to floating-point is possible
//     var floatingPointNumber = parseFloat(stringToCheck);
// }

// 5. How can you convert a number to a string in JavaScript?
//var number = 42;
// var stringNumber = number.toString(); // Using toString()
// var stringNumber2 = number + "";       // Using concatenation

// 6. Write a JavaScript function to convert the number 42 to a string.
//function numberToString(num) {
//     return num.toString();
// }

// var stringNumber = numberToString(42);

// 7. Can you convert a string representing a decimal number (e.g.,
// "3.14") to an integer in JavaScript? If so, how?
//var stringDecimal = "3.14";
//var integerNumber = parseInt(stringDecimal);
// integerNumber will be 3

//ch 30

// 1. Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.
//var num = 12.3456789;
//var newNum = num.toFixed(4).toString();

// 2. In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.
//var num = 5.6789;
//num = parseFloat(num.toFixed(2));


// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.
//if (num.toFixed(2).toString().length > 4) {
    // Your code here
//}


// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.
//var longDecimalNumber = 123.456789;
//alert(longDecimalNumber.toFixed(2).toString());

//ch 31-34

// 1. Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.
//let dObj = new Date();

// 2. Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.
//let dStr = new Date().toString();

// 3. Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.
//let day = new Date().getDay();

// 4. The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.
//let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let d = new Date();
// let day = d.getDay();
// alert(dayNames[day]);

// 5. Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.
//let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth();
// let day = now.getDate();
// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();
// let milliseconds = now.getMilliseconds();

// 6. Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.
//let later = new Date(2020, 11, 31);

// 7. Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.
//let specificDate = new Date(1992, 1, 2);


// 8. Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.
//let referenceDate = new Date(1980, 0, 1);
// let millisecondsElapsed = new Date().getTime() - referenceDate.getTime();
// alert(millisecondsElapsed);

// 9. How do you change the year of a date in JavaScript?
//let date = new Date();
// date.setFullYear(2022); // Change the year to 2022

// 10. Write a JavaScript function to change the month of a given
// date to January.
//function changeToJanuary(date) {
//     date.setMonth(0); // January is month 0
//     return date;
//   }
  
// 11. What is the method to change the day of the week for a
// specific date in JavaScript?
//
// 12. Write a JavaScript function to change the minutes of a given
// time to a specific value. (Value by prompt)
//function changeMinutesToSpecificTime(date, newMinutes) {
//     date.setMinutes(newMinutes);
//     return date;
//   }
  
//   // Usage
//   let date = new Date();
//   let newMinutes = parseInt(prompt("Enter the new minutes:"));
//   let newDate = changeMinutesToSpecificTime(date, newMinutes);
  
// 13. Write a JavaScript function to add a specific number of
// // hours to a given time.
// function addHoursToTime(date, hoursToAdd) {
//     date.setHours(date.getHours() + hoursToAdd);
//     return date;
//   }
  
//   // Usage
//   let date = new Date();
//   let hoursToAdd = 3; // Change this to the number of hours you want to add
//   let newDate = addHoursToTime(date, hoursToAdd);
  
// 14. You have to create a age calculator in JavaScript.

// function calculateAge(birthDate) {
//     const today = new Date();
//     const birthYear = birthDate.getFullYear();
//     const birthMonth = birthDate.getMonth();
//     const birthDay = birthDate.getDate();
  
//     const age = today.getFullYear() - birthYear;
  
//     // Check if the birthday has already occurred this year
//     if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
//       age--;
//     }
  
//     return age;
//   }
  
//   // Usage
//   const birthDate = new Date("1990-08-30"); // Replace with the birthdate you want to calculate age for
//   const age = calculateAge(birthDate);
//   console.log(`You are ${age} years old.`);


// // 35-37

// 1. Code the first line of a function displayAlert.
//function displayAlert() {
    // First line of the function
    // (This line can be any code you want)
// }

// 2. Code a function named askName that prompts the user to "Enter
// name" and assigns the answer to userName, which hasn't been
// declared beforehand.
//function askName() {
//     const userName = prompt("Enter name");
// }

// 3. Code a function that calls 2 other functions.
//function callTwoFunctions() {
    // Call function 1
//     functionName1();

//     // Call function 2
//     functionName2();
// }

// 4. Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.
//function displayAndAlertName() {
//     const userName = prompt("Enter name");
//     alert(userName);
// }

// // Call the function
// displayAndAlertName();

// 5. Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.
//function concat(param1, param2, param3) {
    // First line of the function
    // (This line can be any code you want)
//}

// 6. Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.
//function concatenateParameters(param1, param2) {
//     const result = param1 + param2;
//     return result;
// }

// const concatenatedValue = concatenateParameters("Hello", "World");


// 7. Code a function that has three parameters. Multiply them and
// assign them to a variable that hasn't been declared yet.
// function multiplyParameters(param1, param2, param3) {
//     const result = param1 * param2 * param3;
//     return result;
// }

// const multipliedValue = multiplyParameters(2, 3, 4);

// 8. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.
//function calculateAverage(numbers) {
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     const average = sum / numbers.length;
//     return average;
// }

// 9. Write a JavaScript function that takes two parameters and returns
// their sum.
//function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }

// 10. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.
//function calculateAverage(numbers) {
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     const average = sum / numbers.length;
//     return average;
// }

// 11. You have to capture the returned value from a function and
// store it in a variable?
//const result = someFunction(); // Replace 'someFunction' with the actual function you're using

// 12. Write a function which tells letter counts of (word).
//function letterCounts(word) {
//     const counts = {};
//     for (const letter of word) {
//         counts[letter] = (counts[letter] || 0) + 1;
//     }
//     return counts;
// }

// 13. Write a function to set (year) in date object.
//function setYearInDate(dateObject, year) {
//     dateObject.setFullYear(year);
// }

// 14. Write a function which tells the age of a person who Born on
// (dateOfBirth)
//function calculateAge(dateOfBirth) {
//     const today = new Date();
//     const birthDate = new Date(dateOfBirth);
//     const age = today.getFullYear() - birthDate.getFullYear();
//     return age;
// }

// 15. Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false
//function checkWordPresence(wordToFind, array) {
//     return array.includes(wordToFind);
// }
// const wordArray = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
// const wordToFind = 'raza';
// const isPresent = checkWordPresence(wordToFind, wordArray); // Returns true or false

// 16. Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)
// function repeatLetter(letter, times) {
//     return letter.repeat(times);
// }

// const repeatedLetters = repeatLetter("a", 10); // "aaaaaaaaaa"

// 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()
// function reverseArray(arr) {
//     return arr.reverse();
// }

// const originalArray = ['a', 'b', 'c', 'd', 'e'];
// const reversedArray = reverseArray(originalArray); // ['e', 'd', 'c', 'b', 'a']


// ch 38

// Write a JavaScript function that demonstrates the usage of a local
// // variable.
// function localVariableExample() {
//     // Declare a local variable inside the function
//     const localVar = "I am a local variable.";

//     // You can use the localVar variable within this function
//     console.log(localVar);
// }

// // Call the function to demonstrate the usage of the local variable
// localVariableExample();


// 2. How can you access a global variable inside a function in
// JavaScript?
// Declare a global variable
// const globalVar = "I am a global variable.";

// function accessGlobalVariable() {
//     // You can access the globalVar variable inside this function
//     console.log(globalVar);
// }

// // Call the function to access the global variable
// accessGlobalVariable();

// // You can also access the globalVar variable outside the function
// console.log(globalVar);

// // ch 39 40
// 1. Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.
// Example variable with a value to be checked
// const dayOfWeek = "Wednesday";

// // Using a switch statement to perform different actions based on the value of the variable
// switch (dayOfWeek) {
//     case "Monday":
//         console.log("It's the start of the workweek.");
//         break;
//     case "Wednesday":
//         console.log("It's the middle of the workweek.");
//         break;
//     case "Friday":
//         console.log("It's almost the weekend!");
//         break;
//     default:
//         console.log("It's not a special day.");
// }

// 2. Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.

// Prompt the user for a cityName input
// const cityName = prompt("Enter a city name:");

// // Using a switch statement to check the cityName input
// switch (cityName.toLowerCase()) {
//     case "new york":
//         alert("You entered New York. Enjoy the Big Apple!");
//         break;
//     case "los angeles":
//         alert("You entered Los Angeles. Enjoy the City of Angels!");
//         break;
//     case "chicago":
//         alert("You entered Chicago. Enjoy the Windy City!");
//         break;
//     default:
//         alert("Sorry, we don't have information for that city.");
// }




  



