// Task 1
// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

console.log("---------------------------------------Task1-----------------------------------------------");
let func = (obj) => {
    for (const key in obj) {
        console.log(key);
    }
}
let student = {
    name: "Sanan Ibragimov",
    sclass: "II",
    rollno: 47
};

func(student);
console.log("---------------------------------------Task2-----------------------------------------------");



// Task 2
// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

console.log(student);
delete student.rollno;
console.log(student);
console.log("---------------------------------------Task3-----------------------------------------------");



// Task 3
// Add new field sum, that should contain sum of fields a + b
// don't modify the object directly and do it by updating the value by key
// const objWithSum = {
// a: 10,
// b: 10
// };

const objWithSum = {
    a: 10,
    b: 10
};

const newObjWithSum = {
    ...objWithSum,
    sum: objWithSum.a + objWithSum.b
}

console.log(newObjWithSum);
console.log("---------------------------------------Task4-----------------------------------------------");



// Task 4
// Using if statement, check if n bigger than 10
// update value in info field expected value "n is bigger than 10"
// don't modify the object directly and do it by updating the value by key
// const objWithRes = {
// n: 13,
// info: "n is smaller than 20"
// };

const objWithRes = {
    n: 9,
    info: "n is smaller than 20"
};

if (objWithRes.n > 10) {
    let newObjWithRes = {
        ...objWithRes,
        info: "n is bigger than 10"
    }
    console.log(newObjWithRes);
} else {
    console.log(objWithRes);
}