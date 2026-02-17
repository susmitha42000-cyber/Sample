// LEVEL 1 – Loop Practice
// Task 1 – for...of (String)
// let word = "developer"
// Requirements:- Print each character using for...of- Count how many letters are there- Print only vowels


let word = "developer"
let count = 0
let vowels = "aeiou"

for(let i of word){
    count++
}
console.log("Letter Count In Word :",count)
for(let i of word){

    if(vowels.includes(i)){
        console.log("Vowel :",i)
    }
}

// Task 2 – for...of (Array)
// let skills = ["HTML","CSS","JavaScript","React"]
// Requirements:- Print all skills- Print skill with message: I know HTML- Count total skills

let skills = ["HTML","CSS","JavaScript","React"]
let S_Count = 0

for(let s of skills){
    console.log(s)
    console.log("I Know " + s)
    S_Count++
}
console.log("Total Skills Present :", S_Count)



// Task 3 – for...in (Object)
// let employee = {
// name: "Arun",
// role: "Tester",
// salary: 30000,
// experience: "2 years"
// }
// Requirements:- Print all keys- Print all values- Print: name : Arun

let employee = {
    name: "Arun",
    role: "Tester",
    salary: 30000,
    experience: "2 years"
}

for(let i in employee){
    console.log("Key :", i)
}
for(let key in employee){
    console.log("Value Of Key :", employee[key])
}
console.log("Employee Name :", employee.name)


// Task 4 – Simple Function
// Create function table(num)
// Print multiplication table of that number.
// Call: table(5)

function Fifth_table(number){

    for(let i=1;i<=10;i++){
        console.log(number + " x " + i + " = " + (number*i))
    }
}
Fifth_table(5);


// Task 5 – Return Keyword
// Create function square(num)
// Return square value.
// Store in variable and print

function square(num) {
    return num * num;   
}
let result = square(9); // 9*9
console.log("Square value:", result); // 81


// Task 6 – Default Parameter
// Create function register(name, department, role="Developer")
// Call once with role
// Call once without role

function register(name, department, role="Developer"){
    console.log("Name :", name)
    console.log("Department :", department)
    console.log("Role :", role)
}

register("Susmitha","IT","Frontend Developer")
register("Naveen","Manager")


// LEVEL 3 – Scope + Hoisting
// Task 7 – Scope Prediction
// function checkScope(){
// if(true){
// var a = 100
// let b = 200
// }
// console.log(a)
// console.log(b)
// }
// Questions:- What will print?- What error occurs and why?


function Scope(){
    if(true){
        var a = 100
        let b = 200
    }

    console.log(a) // 100
    console.log(b) // Error
}

// Scope()
// Explanation:
// var is function scoped -> works
// let is block scoped -> ReferenceError


// Task 8 – Hoisting
// console.log(x)
// var x = 10
// console.log(y)
// let y = 20
// Explain difference


console.log(x) // undefined
var x = 10

// console.log(y) // ReferenceError
let y = 20

// var -> hoisted with undefined
// let -> hoisted but in TDZ (Temporal Dead Zone)


// LEVEL 4 – Function Types
// Task 9 – Named Function
// Create function greet(name) → print welcome message.

//console.log("Named Function")
function greet(name){
    console.log("Welcome " + name)
}
greet("Susmitha")

// Task 10 – Anonymous Function
// Store function in variable that adds two numbers.

//console.log("Anonymous Function")

let addNumbers = function(a,b){
    return a + b
}
console.log("Addition :", addNumbers(10,5))


// Task 11 – Arrow Function
// Create arrow function to subtract two numbers.

//console.log("Arrow Function")

let subtract = (a,b) => a - b

console.log("Subtraction :", subtract(20,10))

// Task 12 – Callback
// Create function calculate(operation, a, b)
// Create:- add function- subtract function
// Call:
// calculate(add, 10, 5)
// calculate(subtract, 20, 10)

console.log("Callback Function")

function add(a,b){
    return a + b
}

function subtractOp(a,b){
    return a - b
}

function calculate(operation, a, b){
    return operation(a,b)
}

console.log("Callback Adddition :", calculate(add,10,5))
console.log("Callback Subtraction :", calculate(subtractOp,20,10))


// Task 13
// function total(a){
// return function(b){
// return function(c){
// }
// }
// }
// Should print sum.
// Example: total(5)(10)(15)

console.log("Currying Function")

function total(a){
    return function(b){
        return function(c){
            return a + b + c   //5+10+15
        }
    }
}

console.log("Total Addtion value:", total(5)(10)(15))


// Task 14 – Reward Generator
// Create generator function* reward()
// Yield:- "Level 1 Completed"- "Level 2 Completed"- "Level 3 Completed"- "Team Winner"
// Use:- .next()- for...of

console.log("Generative function")

function* reward(){
    yield "Level 1 Completed"
    yield "Level 2 Completed"
    yield "Level 3 Completed"
    yield "Team Winner"
}

let rewards = reward()

console.log(rewards.next().value)
console.log(rewards.next().value)

for(let r of reward()){
    console.log("Reward:", r)
}

// FINAL TEAM CHALLENGE
// Build small system using ONLY above concepts:
// Requirements:- Object → team details- for...in → print details- Generator → rewards- Callback → score calculation- Default parameter- Currying for bonus calculation- Named + Arrow function


let team = {
    teamName: "Code Warriors",
    members: 5,
    project: "Task Manager",
    score: 80
}

for(let key in team){
    console.log(key + ":", team[key])
}

function welcomeTeam(name){
    console.log("Welcome Team:", name)
}
welcomeTeam(team.teamName)

let bonus = (score) => score * 0.1
function calculateScore(operation, score){
    return operation(score)
}

let bonusScore = calculateScore(bonus, team.score)
console.log("Bonus Score:", bonusScore)


function teamRegister(name, role="Developer"){
    console.log("Member:", name, "| Role:", role)
}
teamRegister("Susmitha","Leader")
teamRegister("Naveen")

function finalScore(base){
    return function(bonus){
        return function(extra){
            return base + bonus + extra
        }
    }
}

console.log("Final Score:", finalScore(80)(10)(5))
