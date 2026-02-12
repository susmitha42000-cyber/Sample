// SECTION 1 – Data Types Tasks
// TASK 1 – Primitive Data Types Practice
// Create variables for:
// • A string (your name)
// • A number (your age)
// • A boolean (are you learning JS?)
// • An undefined variable
// • A null variable
// Requirements:
// • Print value
// • Print typeof each variable
// • Explain difference between undefined and null


let name = "Susmitha";
let age = 21;
let isLearningJS = true;
let qualification;
let emptyValue = null;

console.log("Name:",name);
console.log("Age:", age);
console.log("Learning JS:", isLearningJS);
console.log("Undefined variable:", qualification);
console.log("Null variable:", emptyValue);

console.log(typeof name);      
console.log(typeof age);         
console.log(typeof isLearningJS);
console.log(typeof qualification); 
console.log(typeof emptyValue); 




//TASK 2 – Array Practice
//let colors = ["red", "green", "blue", "yellow", "black"]
//Requirements:
//• Print first element
//• Print last element using length
//• Print third element
//• Print total number of elements


let colors = ["red", "green", "blue", "yellow", "black"];
console.log(colors[0]);    //first element
console.log(colors[colors.length-1]);  //last element using length
console.log(colors[2]); // third element
console.log(colors.length); // total number of elements



//TASK 3 – Object Practice
//let student = {
// name: "Naveen",
// skills: ["HTML", "CSS", "JS"],
// experience: "1 year",
// location: "India"
//}
//Requirements:
//• Print name
//• Print first skill
//• Add new property → role: "Frontend Developer"
//• Print full object

let student = {

    name: "susmitha",
    skills:["Html", "css", "js","react"],
    experience: "1 year",
    role:"Frontend Developer",
    location:"India"
    };
    console.log("Name:", student.name);
    console.log("First Skill:", student.skills[0]);
    // console.log(student.name);
    // console.log(student.skills);
    student.role = "Frontend Developer";
    console.log(student);



//  SECTION 2 – Arithmetic Operators Tasks
// TASK 4 – Basic Calculator
// let x = 10
// let y = 3
// Perform:
// • Addition
// • Subtraction
// • Multiplication
// • Division
// • Modulus
// • Exponentiation
// Print all results

let x=10;
let y=3;

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);
console.log("Exponentiation:", x ** y);


//TASK 5 – Increment & Decrement Logic
//let a = 5
//Requirements:
//• Use a++
//• Use ++a
//• Store values in different variables
//• Explain difference between pre & post increment
//Question:
//Why does this give unexpected output?
//let b = 2
//b = b++
//console.log(b)


let a = 5;

let post_value = a++;   // post value = 5, then a becomes 6
let pre_value = ++a;    // a becomes 7, then pre value = 7

console.log("Post value -",post_value);
console.log("Pre Value -",pre_value);
console.log(a);

// Post vs Pre Increment 

// Post (a++)	
// Use value first, then increase

// Pre (++a)
// Increase first, then use value

// Output explanation 

let b = 2;
b = b++;
console.log(b);

// 1) b++ gives 2 
// 2) Then increments b to 3
// 3) declared variable b will be 2 
// 4) Final value of b = 2


//SECTION 3 – Assignment Operators
//TASK 6 – Power Assignment
//let num = 3
//Use:
//num **= 4
//Print result and explain what happened.

let num = 3;
num = num ** 4;
console.log("Power value of number",num);//3*3*3*3


// SECTION 4 – Comparison Operators
// TASK 7 – Equality Testing
// Write console outputs for:
// console.log(5 == "5")
// console.log(5 === "5")
// console.log(0 == false)
// console.log(0 === false)
// Explain difference between:


 //Equality Test

console.log("Equality of two numbers -",5 == "5");     
console.log("Equality of two numbers -",5 === "5");   
console.log("Equality of two numbers -",0 == false);  
console.log("Equality of two numbers -",0 === false);  

// Equal operator == Compares value only	
// Strict Equal operator === Compares value + type


// SECTION 5 – Logical Operators
// TASK 8 – Login System Logic
// let username = "admin"
// let password = "1234"
// If username is "admin" AND password is "1234"
// Print "Login Success"
// Else print "Login Failed"
// Use &&

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
   console.log("Login Success");
} 
else {
   console.log("Login Failed");
}

// TASK 9 – OR Condition
// If user role is "admin" OR "manager"
// Print "Access Granted


let role = "manager";

if (role == "admin" || role == "manager") {
   console.log("Access Granted");
}

// TASK 10 – NOT Operator
// Check if user is NOT logged in

let LoggedIn = false;

if (!LoggedIn) {
   console.log("User is NOT logged in");
}


// SECTION 6 – Ternary Operator
// TASK 11 – Voting Eligibility
// let age = 17
// Use ternary operator to print:
// "Eligible"
// "Not Eligible


let Age= 17;
let result = Age >= 18 ? "Eligible to vote" : "Not Eligible to vote";
console.log(result);


// FINAL TEAM CHALLENGE – Mini Profile System
// let user = {
//    name: "Arun",
//    age: 22,
//    isLoggedIn: true,
//    skills: ["JS", "React"]
// }
// Requirements:
// • Print name and first skill
// • Check if age >= 18
// • If logged in AND age >= 18 → "Access Allowed"
// • Use ternary for login status
// • Increase age using increment operator
// • Add new skill dynamicall



let user = {
   name: "Arun",
   age: 22,
   isLoggedIn: true,
   skills: ["JS", "React"]
};

console.log("UserName -",user.name);

console.log("User first skill -",user.skills[0]);

if (user.age >= 18) {
   console.log("Adult");
}

if (user.isLoggedIn && user.age >= 18) {
   console.log("Access Allowed");
}

let loginStatus = user.isLoggedIn ? "Logged In" : "Not Logged In";
console.log("Login Status -",loginStatus);

user.age++;
console.log("User age -",user.age);

user.skills.push("Node.js");

console.log("Updated User Data -",user);