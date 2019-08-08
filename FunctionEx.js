console.log("----------------------- Normal Functions----------------------");
function add(a,b){
    var result = a+b;
    console.log(result);
}
function sub(a,b){
    var result = a-b;
    return result;
}
function mul(){
    var a = 10;
    var b = 2;
    return (a*b);
}
function div(){
    var a= 18;
    var b = 3;
    console.log(a/b);
}
add(5,4); //add function with parameter and without return
console.log(sub(17,9)); // sub function with parameter and with return
console.log(mul()); // mul function without parameters and with return
div(); // div function without parameter and without return

console.log("----------------------- Functions assigned to variables----------------------");
var add = function (a,b){
    var result = a+b;
    console.log(result);
}
var sub = function (a,b){
    var result = a-b;
    return result;
}
var mul = function (){
    var a = 10;
    var b = 2;
    return (a*b);
}
var div = function (){
    var a= 18;
    var b = 3;
    console.log(a/b);
}
add(10,8);
console.log(sub(8,10));
console.log(mul());
div();
console.log("----------------------- Anonymous Functions----------------------");
(function(){ // anonymous function without parameter
    var fname = "BhagathKumar";
    var lname = "Borra";
    console.log(fname+lname);
}());
console.log(" "); 
(function (a,b){ // anonymous function with parameter
    var result = a*b;
    console.log(result);
}(5,9));
console.log("----------------------- Callback Function having function as paramter----------------------");
function addition (a,b,c){
    var result = (a*b)+a;
    console.log(result);
    c();
    //console.log(disp);
   // display();
}
function display() {
    console.log("callback function");
    var x =10;
    //console.log(result);
};
var c = 'testing';
addition(5,4,display);