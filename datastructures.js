//1.Employee Data Merge System


let teamA = [
  { name: "John", role: "Developer" },
  { name: "Arun", role: "Tester" }
];

let teamB = [
  { name: "Naveen", role: "Designer" },
  { name: "David", role: "Manager" },
  { name: "susmitha", role:"trainee"}
];

let newTeam = [...teamA, ...teamB];

let backupTeam = [...newTeam];

newTeam.pop();

newTeam.unshift({ name: "Ujwala", role: "developer" });

console.log("new Team:", newTeam);
//console.log("Backup Team:", backupTeam);


// 2. Salary Management (Object Spread)

let emp1 = { name: "John", salary: 30000 };
let emp2 = { name: "John", salary: 45000 };

let updateEmp = { ...emp1, ...emp2,salary:50000 };

let cloneEmp = { ...updateEmp };

console.log(updateEmp);

let { name, salary } = cloneEmp;

console.log(`${name} earns ${salary}`);


//3.Product Cart System

let cart = ["Laptop", "Phone", "Tablet", "Watch"];

//cart.pop();
//console.log(cart);

cart.push("Bluethoot", "Television");
console.log(cart);

cart.unshift("washing-machine");
console.log(cart);

cart.shift();
console.log(cart);

let tabletIndex = cart.indexOf("Tablet");
if (tabletIndex !== -1) {
  cart.splice(tabletIndex, 1, "Camera");
}

let Phone = cart.includes("Phone");
console.log(" phone exists:", Phone);

let watchIndex = cart.indexOf("Watch");
console.log("Index of Watch:", watchIndex);


// 4. Student Marks Analyzer

let marks = [78, 90, 66, 84, 99, 45];
let sortedMarks = [...marks].sort((a, b) => a - b);
console.log(sortedMarks);
let temporarymarks= [...sortedMarks];

// let reversemarks = sortedMarks.reverse()
// console.log(reversemarks);

// let topthreescore = reversemarks.slice(0,3)
// console.log(topthreescore);

// let indexOf84 = temporarymarks.indexOf(84);
// console.log(indexOf84);

sortedMarks.splice(0,1,50);
console.log("sorted array update -", sortedMarks);


// 5. Nested Data Extractor

let company = [
"Stackly",
["Frontend", ["HTML", "CSS", ["JavaScript"]]]
];

let jsNormal = company[1][1][2][0];
console.log(jsNormal);

let [companyName,[Department, [company1, company2, [jsDestructured]]]] = company;
console.log(jsDestructured);

let flattened = company.flat(Infinity);
console.log(flattened);

flattened.splice(3,1,"Tailwind")
console.log(flattened)

// 6. Attendance System (Rest Operator)

function attendance(day, ...students) {
console.log("Day:", day);
console.log("Total Students:", students.length);
console.log("First Student:", students[0]);
console.log("Last Student:", students[students.length - 1]);
 return students;
}

let allStudents = attendance("Monday", "Dinesh", "Arun", "Surya", "Siva");
console.log("All Students:", allStudents);

// 7. Inventory Management

let stock = [10, 20, 30, 40, 50];
let stock2=[...stock];
stock.fill(0, stock.length - 2);
console.log("After fill:", stock);

stock2.push(60,70);
console.log(stock2);

stock2.shift();
console.log(stock2);

let Thirty = stock.includes(30);
console.log("30 exist?",Thirty);

let lastIndex = stock.lastIndexOf(20);
console.log("Last index of 20:", lastIndex);

let stock3 = stock2.reverse()
console.log(stock3);


// 8.User Profile System

let user = {
name4: "Naveen",
role: "Developer",
skills: ["HTML", "CSS","JavaScript"]
};

let {name4,role} = user;
console.log(name4);
console.log(role)

let addSkills = [...user.skills, "React"];
console.log("Add Skills:", addSkills);


let cloneuser = {...user};
console.log(cloneuser);

let adduserskill = { ...cloneuser, skills:addSkills };
console.log(adduserskill);

let mergeuser = { ...cloneuser, experience: "2 Years" };
console.log("Merge user:", mergeuser);
console.log("Total Skills:", mergeuser.skills.length);

// 9. Sales Report

let sales = [12000, 45000, 22000, 8000, 15000];
let sort  = sales.sort((a,b)=>a-b)
console.log("Ascending:", sales);

let sort2  = sales.sort((a,b)=>b-a)
console.log("decending:", sales);

let middle3 = sales.slice(1, 4);
console.log("Middle 3 Sales:", middle3);

sales.splice(0, 1, 10000);
console.log("Replacing Lowest Sale:", sales);

let fifty = stock.includes(50000);
console.log("50000 exist?",fifty);

// 10.Data Cleaning System

let rawData = [1, 2, null, 4, undefined, 6, [7, 8], { a: 10 }];

console.log("Last Element:", rawData[rawData.length - 1]);

let Flatten = rawData.flat();
console.log("Flatten Array:", Flatten);

Flatten.pop();
console.log("Removing Last Element:", Flatten);

Flatten.push(100);
console.log("Adding 100:", Flatten);

let cleanClone = [...Flatten];
console.log("Clone Clean Array:", cleanClone);


