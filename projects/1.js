// operator , 2 numbers , result 
// input , result output
// if else 
// result display console.log

const prompt = require("prompt-sync")(); //This is required for prompt to work

const operator = prompt('Enter Operator (either +,-,*,/):');

const num1 = parseFloat(prompt('enter 1st number:'));
const num2 = parseFloat(prompt('enter 2nd number:')); 

let result;
// conditions
//if else 
// multiple available choices me se koi 1 choose karna ho 

if (operator == '+') {
    result = num1+num2;
    }
else if (operator == '-') {
    result = num1-num2;
    }
else if (operator == '*') {
    result = num1*num2;
    }
else if(operator == '/')  {
    result = num1/num2;
    }
console.log(num1, operator, num2, '=', result);

// Still facing problem in executing JS Files, Fix this Issue
// ** Issue solved, using const prompt = require("prompt-sync")(); at the top