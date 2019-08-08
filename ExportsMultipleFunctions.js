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
module.exports={addition:add, division:div, substraction:sub, multiplication:mul};