//1. Task 1 – forEach()
// Using array: ["Arun", "Bala", "Charan", "David"]
// Print:
// 1 - Arun
// 2 - Bala
// 3 - Charan
// 4 - David

let names = ["Arun", "Bala", "Charan", "David"];
names.forEach((currentElements, index, TotalArray)=>{
console.log(currentElements);
}
)

//2. Task 2 – map()
// Numbers: [2, 4, 6, 8]
// Create new array with square values.
// Expected Output: [4, 16, 36, 64]

let numbers = [2, 4, 6, 8];
let squares = numbers.map(num => num * num);
console.log(squares);

//3. – filter()
// Products:
// Mobile - 15000
// Laptop - 60000
// Keyboard - 1000
// Monitor - 12000
// Get products whose price > 10000.

let products = [
    { name: "Mobile", price: 15000 },
    { name: "Laptop", price: 60000 },
    { name: "Keyboard", price: 1000 },
    { name: "Monitor", price: 12000 }
];

let filterProducts = products.filter(product => product.price > 10000);
console.log(filterProducts);


// //4. – find()
// Using same products array,
// Find first product whose price > 10000.

let product1 = [
    { name: "Mobile", price: 15000 },
    { name: "Laptop", price: 60000 },
    { name: "Keyboard", price: 1000 },
    { name: "Monitor", price: 12000 }
];

let findProduct = products.find(product => product.price > 10000);
console.log(findProduct);


//5. Task 5 – reduce()
// Marks: [80, 75, 90, 60]
// Calculate total marks.
// Calculate average marks.

let marks = [80, 75, 90, 60];
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log("Total Marks:", total);

let avg = total / marks.length;
console.log("Average Marks:", avg);

//6. – some()
// Ages: [12, 15, 17, 22]
// Check if any person is above 18.

let ages = [12, 15, 17, 22];
let ageabove18 = ages.some(age => age > 18);
console.log(ageabove18); 

// 7.– every()
// Scores: [60, 70, 80, 90]
// Check if all students passed (pass mark = 35).

const scores = [60, 70, 80, 90];
const passMark = 35;
const allstudentsPassed = scores.every(score => score > passMark);
console.log(allstudentsPassed); 

//8.sort()
// Prices: [200, 40, 1000, 5, 75]
// Sort ascending.
// Sort descending.

let sortprices=[200, 40, 1000, 5, 75]
// let sort = sortprices.sort(( a,b)=>{

//   return a-b;
// })

let sort1 = sortprices.sort(( a,b)=>{
  return b-a;
 })
//console.log(sort); //Ascending
console.log(sort1); //Descending



//strings mentod

//9. Capitalize First Letter
// Name: "naveen"
// Convert to: Naveen
// (Use only slice + toUpperCase)

let Name = "naveen";
let Capitalizename= Name[0].toUpperCase() + Name.slice(1);
console.log(Capitalizename); 

//10.Count Letter
// Text: "javascript"
// Count how many times letter "a" appears.
// (Use split)

let text = "javascript";
let count = text.split("a").length - 1;
console.log(count); 

// 11. Clean Input
// User Input: "   Hello World   "
// Remove extra spaces.
// Convert to uppercase.

let userInput = "   Hello World   ";
let cleanInput = userInput.trim().toUpperCase();
console.log(cleanInput); 

// 12.Replace & Check
// Sentence: "I love python"
// Replace python with javascript.
// Check if sentence starts with "I".
// Check if sentence ends with "javascript".


let sentence = "I love python";
let newSentence = sentence.replace("python", "javascript");
console.log("New Sentence:", newSentence); 

let startsWithI = newSentence.startsWith("I");
console.log("Starts with 'I'?:", startsWithI); 

let endsWithJS = newSentence.endsWith("javascript");
console.log("Ends with 'javascript'?:", endsWithJS); 


// BONUS Real World Challenge (Employee Salary System)
// Employees:
// A - 25000
// B - 40000
// C - 15000
// D - 60000
// 1. Get employees salary > 30000.
// 2. Find first employee salary > 30000.
// 3. Calculate total salary.
// 4. Check if any employee salary < 20000.
// 5. Check if all employees salary > 10000


let employees = [
  { name: "A", salary: 25000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 15000 },
  { name: "D", salary: 60000 }
];


let morethan30000 = employees.filter(emp => emp.salary > 30000);
console.log(morethan30000);

let firstempmore = employees.find(emp => emp.salary > 30000);
console.log(firstempmore);

let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log(totalSalary);

let lessthan20000 = employees.some(emp => emp.salary < 20000);
console.log(lessthan20000);

let morethan10000 = employees.every(emp => emp.salary > 10000);
console.log(morethan10000);