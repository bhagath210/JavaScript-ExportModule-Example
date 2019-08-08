var folder1 = require('./Exportsliterals'); // assigning module containing literals to variable folder1
console.log(folder1);

var folder2 = require('./ExportsProperty'); // assigning module containing property to variable folder2
console.log(folder2.SimpleMessage);

var folder3 = require('./Exportsfunction'); // assigning module containing function to variable folder3
folder3.add(); // calling the function 

var object = require('./ExportsObject'); // assigning module containing object to variable object
console.log(object.firstName);
console.log(object.middleName);

var student = require('./ExportsfunctionAsClass'); // assigning module containing function as class to variable student
var student1 = new student('Virat', 'Kohli'); // creating a new student1 object
console.log(student1.fullName());  // calling the function 
var student2 = new student('Bhuvaneshwar', 'Kumar'); // creating a new student2 object
console.log(student2.fullName()); // calling the function 

var Function = require('./ExportsMultipleFunctions'); // asigning the file contains different types of functions to Function variable
Function.addition(10,8); // calling the addition function by passing the parameters 
console.log(Function.substraction(27,2)); // calling the substraction function by passing parameters and get result as return
Function.division(); // calling the division function without parameters and without return 
console.log(Function.multiplication(2,5)); // calling the multiplication function with parameters and without return