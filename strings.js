
// SECTION 1 – String & Type Conversion Tasks
// TASK 1 – Full Name Builder
// let firstName = "Naveen"
// let lastName = "Kumar"
// 1. Print using +
// 2. Print using template string
// 3. Print length of full name
// Expected Output:
// Naveen Kumar

let firstName = "Naveen";
let lastName = "Kumar";
let fullName1 = firstName + " " + lastName;
console.log(fullName1);// output: Naveen Kumar
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);//Output: Naveen Kumar
console.log(fullName2.length);//Output: 12


//  TASK 2 – Predict Type
// Predict the output type:
// typeof("5" + 2)
// typeof(5 + "2")
// typeof(true + 1)
// typeof(false + "hello")
// typeof(null + 1)
// Explain WHY for each


typeof("5" + 2)  //5 is string, here string is "5",when string is add to a number + it converts number to a string and concatenation. here final results is "52 it is a string type"
typeof(5 + "2")  // 2 is a string ,here string is "2" and 5 is number here number is add to a string its convert to string type and concatenation like "52".
typeof(true + 1) // here it is a number. because here true convets into "1", here 1 is numeric., so 1 + 1= 2, so it is a number.
typeof(false + "hello") // it is a string type here here false converts into false and "hello" is a string type and its converts to concatenates it will result "falsehello" it a string.
typeof(null + 1)// null converts into "0" it is a numeric ,here 0 + 1 = 1 , here the final result is 1 so it is a number.



// TASK 3 – Manual Type Conversion
// Convert using Number():
// "100"
// "10.5"
// "abc"
// true
// false
// null
// undefined
// Print results and identify which return NaN

console.log(Number("100"));       // 100
console.log(Number("10.5"));      // 10.5
console.log(Number("abc"));       // NaN
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN  
// Here "abc" and "undefined" are print NaN.

// TASK 4 – Boolean Truthy/Falsy Test
// Print Boolean result of:
// 0
// 1
// ""
// "hello"
// null
// undefined
// []
// {}
// Explain:
// Why [] is true?
// Why {} is true?

console.log(Boolean(0));        // it will return false
console.log(Boolean(1));        // it will return true
console.log(Boolean(""));       // it will return false
console.log(Boolean("hello"));  // it will return true
console.log(Boolean(null));     // it will reurn false
console.log(Boolean(undefined));// it will return false
console.log(Boolean([]));       // it will return true
console.log(Boolean({}));       // it will return true

//[] arrys are a type of object, all objects are truthy, even if they empty .
//{} arrys is an object , it treats every objects truthy .



// SECTION 2 – Flow Control Tasks
// TASK 5 – Even or Odd
// let num = 7
// Using if else, print:
// 7 is Odd

let num = 7;
if (num % 2 === 0) {
  console.log(num + " is Even");
} else {
  console.log(num + " is Odd");
}


// TASK 6 – Grade System
// let marks = 75
// Marks    Grade
// 90+      A
// 75–89    B
// 50–74    C
// <50      Fail
// Use if else if statement.

let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}


// TASK 7 – Switch Day Finder
// let dayNumber = 3
// Using switch, print:
// Wednesday

let dayNumber = 3;
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}

// SECTION 3 – Loop Tasks
// TASK 8 – Reverse Counting
// Using for loop print:
// 5
// 4
// 3
// 2
// 1

for (let i = 5; i >= 1; i--) {
console.log(i);
}

// TASK 9 – Multiplication Table
// Print table of 3:
// 3 x 1 = 3
// ...
// 3 x 10 = 30

let number = 3;
for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + (number * i));
}

// TASK 10 – Sum of First 10 Numbers
// Using for loop calculate:
// 1 + 2 + 3 + ... + 10
// Print final sum

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log("final =", sum);


// BONUS – Mentor Level
// if("0"){
//    console.log("true block");
// }else{
//    console.log("false block");
// }
// Predict output and explain WHY

//0 number is false in general but inside if condition the 0 is in string so it is  true because string is not empty