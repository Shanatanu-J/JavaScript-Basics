//To Write to console
console.log('Hello World');

//TO declare a variable
let name = 'Shantanu';
console.log(name);

//Reassign variable
let sum = 10;
sum = 5;
console.log(sum);

//Assign Constant
const length = 10;
console.log(length)

//Dictionaries in Javascript
let person = {
    name: 'Mosh',
    age: 30,
};
console.log(person)

//Dot notation
person.name = 'John';
console.log(person.name)

//Bracket Notation
let selection = 'age';
person[selection] = 40;
console.log(person.age)

//Array in Javascript
let colors = ['red', 'blue', 'green'];
colors[2] = 20;
console.log(colors)

//Example of operation on a array
console.log(colors.length)

//Function in Javascript
//1.Performing a task
function greet(name){
    console.log('Hello' + " " + name);
}

greet("Shantanu")

//2.Performing a operation
function square(num){
    return num * num;
}

let num1 = square(5);
console.log(num1)

