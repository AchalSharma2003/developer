// let,var,const


// "use strict"; // used for enabling strict javascript mode

// const temp = 100;
// console.log(temp);

// let tempo = 10;
// tempo = 90;
// console.log(tempo);

// console.log(tempor);
// var tempor = 10;

// a = 10;  //it is working without let var const because it here decleared as global varibale "use strict"; for fixing it
// console.log(a);

// Q1 sum of two integers
// let a = 10;
// let b = 20;
// console.log(a+b);

// Q2 relation between integer and string

//string + string = string (concatenation)
// let a = 'achal';
// let b = ' sharma';
// console.log(a+b);
// console.log(typeof(a+b));

//string + int = string (concatenation)
// let a = 'achal';
// let b = 10;
// console.log(a+b);
// console.log(typeof(a+b));

//int + int = int (arithmetic operation)
// let a = 10;
// let b = 20;
// console.log(a+b);
// console.log(typeof(a+b));

// Q3 sum and message
// let a = 10;
// let b = 20;
// console.log("the sum of "+ a + " and " + b + " is = " + a+b); //here it is giving 1020 as concatenation is being conducted

// console.log("the sum of "+ a + " and " + b + " is = " + (a+b)); //now it works perfectly as brackets are given

// console.log(a + b + " is the sum of "+ a + " and " + b ); this also runs

// type coercion

// console.log('1' + 1); // here concatenation is getting implemented and gives a string 11 as + is the only operator that can do 2 operations concat and addition
// console.log('1' - 1); // here  - means subtract only no other thing is possible so the string '1' is coverted to the int 1 to do so

//greet the user

// let user = require('prompt-sync')() //this is used to accept the input from the user in terminal after installing a node js library by typing npm install prompt-sync

// user = prompt("enter your name : ");

// console.log(`good morning ${user}`);

// Q4 accept and print the answer
// let age = require('prompt-sync')()
// age = Number(prompt("enter your age : "));

// console.log(`your age is ${age}`);

//Q5 swap two variables via 3 methods

//1 using a third variable
// let a = 10;
// let b = 20;
// console.log(a);
// console.log(b);

// let temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);

//2 using only two variables but using maths
// let a = 10;
// let b = 20;
// console.log(a,b);

// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b);


//3 using destructuring array
// let a = 10;
// let b = 20;
// console.log(a,b);

// [a,b] =[b,a]
// console.log(a,b);