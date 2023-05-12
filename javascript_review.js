//VARIABLES
//*********** */
/*
1. Create a variable called length and assign a value to it
2. Create a variable called width and assign a value to it
3. Create a variable called area and assign to it the multiplication of length and width
4. Print area in the following: "The result is " followed by the area variable
   BONUS: Print the area in the following syntax:
    "If the length of a rectangle is 5, and width is 3 
    then the area is: 15". Keep in mind that you should replace the numbers with their respective variables.
*/
//********************************************************************************************* */

let length = 10;
let width = 50;
let area = length * width;

console.log(`if the length of a rectangle is ${length}, and width is ${width} 
        then the area is: ${area}`);

// LISTS
/***************************** */
// 1. Create an array named 'favorite_animals' that has four items:

// - dog
// - cat
// - monkey
// - rabbit

// 2. After creating the array, replace the item that currently holds the value "rabbit" with
//another animal. It can be any animal you like.
// 3. Then using an array method, remove 'cat' from the list.
// 4. Using an array method, add an animal that you like.
// 5. Print the list to test your code
//********************************************************************************************* */

const favorite_animals = ["dog", "cat", "monkey", "rabbit"];

//replacing 'rabbit'
favorite_animals[3] = "hen";
console.log(favorite_animals);

//remove 'cat'
let index = favorite_animals.indexOf("cat");

//used the if statement to make sure that I element is the array, otherwise it will not excute the deletion
if (index >= 0) favorite_animals.splice(index, 1);
console.log(favorite_animals);

//add new animal
favorite_animals.push("mouse");
console.log(favorite_animals);

/*
## FUNCTIONS
/******************************** */
// 1. Create a function called cube

// - It takes an argument called number
// - It returns the cube of that number (the number to the power of 3)
// - Call function to test it out

// 2. Create a function called by_three

// - It takes an argument called number
// - If number is divisible by 3, by_three should call `cube(number) and return its result
// - Otherwise, by_three should return false.
// *****************************************************************************************/

function cube(number) {
  return Math.pow(number, 3);
}
console.log(cube(3));

function by_three(number) {
  if (number % 3 == 0) return cube(number);
  else return false;
}
console.log(by_three(5));

/**
 * ## FUNCTIONS EXTRA
/******************************* */
// 1. Define a function called padel_court_cost. This function has two arguments, hours and court_type
// 2. If the court_type is indoors, the padel court costs 30 KWD per hour.
// 3. If the court_type is outdoors, the padel court costs 20 KWD per hour.
// 4. The function calculates the padel court cost and returns it.
//    BONUS: If the number of hours is three or more, the cost will be reduced by 20%.
//  *
//  *************************************************************************************/

function padel_court_cost(hours, court_type) {
  let padel_court;
  if (court_type == "indoors") {
    padel_court = 30 * hours;
    if (hours >= 3) padel_court = padel_court * 0.2;
  } else if (court_type == "outdoors") {
    padel_court = 20 * hours;
    if (hours >= 3) padel_court = padel_court * 0.2;
  } else return "please choose the correct court type!";
  return padel_court;
}
console.log(padel_court_cost(1, "indoors"));
console.log(padel_court_cost(3, "indoors"));
console.log(padel_court_cost(1, "outdoors"));
console.log(padel_court_cost(3, "outdoors"));

/**
 * ## FUNCTIONS & LOOPS
************************
1. Create a function printer(elements)

- Accepts an array of temperature degrees
- Prints every element of the array followed by "C" for celsius

2. Create a function to_celsius(temperatures)

- Accepts an array of temperatures in degrees Fahrenheit
- Returns an array of temperatures in degrees Celsius
  The conversion is: C = (F - 32) \* (5/9)
 
 */
function printer(elements) {
  for (let i = 0; i < elements.length; i++) {
    console.log(`${elements[i]} C`);
  }
}

printer(["0", "30", "76"]);

function to_celsius(temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    temperatures[i] = (temperatures[i] - 32) * (5 / 9);
  }
  return temperatures;
}

const fehrenheitArray = ["32", "140", "176"];
console.log(to_celsius(fehrenheitArray));

/*
## FUNCTIONS ADVANCED
*****************************
1. Write a function that will convert seconds into minutes and returns the minutes
2. Write a function is_odd that receives number as an argument, and returns true if it's odd, false otherwise HINT: To check if 
a number is odd, if a number % 2 is 0 then it's even
3. Write a function that returns the sum of the first and the last elements of an array. If you can, use arrow function :wink:
4. Write a function is_array_length_even that receives an array of numbers as an argument,
 and returns true if the array has an even number of elements, otherwise it returns false
5. 6 students had taken CODED’s assessment. The results of the assessments were stored in an array. Write a function that returns the
 greatest score without using any built-in functions
6. In a sorted list that includes the numbers 1-10, one number is missing. How do you find it using a function?
*/
//1. Write a function that will convert seconds into minutes and returns the minutes
function toMinutes(seconds) {
  return seconds / 60;
}

//2.Write a function is_odd that receives number as an argument, and returns true if it's odd, false otherwise HINT: To check if a number is odd, if a number % 2 is 0 then it's even
is_odd = (number) => Boolean(number % 2 == 1);

console.log(is_odd(4));

//3.Write a function that returns the sum of the first and the last elements of an array. If you can, use arrow function :wink:
arraySum = (numbers) => numbers[0] + numbers[numbers.length - 1];
const num = [2, 3, 7];
console.log(arraySum(num));

//4.Write a function is_array_length_even that receives an array of numbers as an argument,and returns true if the array has an even number of elements, otherwise it returns false
is_array_length_even = (numbers) => Boolean(numbers.length % 2 == 0);

const num1 = [1, 2, 3];
console.log(is_array_length_even(num1));

//5. 6 students had taken CODED’s assessment. The results of the assessments were stored in an array. Write a function that returns the
// greatest score without using any built-in functions

function greatestScore(scores) {
  let result = scores[0];
  for (i = 0; i < scores.length; i++) {
    if (scores[i] > result) result = scores[i];
  } //for
  return result;
} //greatestScore

const scores = [50, 66, 90, 0, 80, 99];
console.log(greatestScore(scores));

//6. In a sorted list that includes the numbers 1-10, one number is missing. How do you find it using a function?

function missingNumber(numbers) {
  let num = 1;
  for (i = 0; i <= numbers.length + 1; i++) {
    if (numbers[i] !== num) return num;
    else num++;
  }
}
const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(missingNumber(sorted));
