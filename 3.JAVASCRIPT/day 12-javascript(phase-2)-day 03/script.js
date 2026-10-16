// loops

// var a = 0;
// while(a<10){
//     console.log("hello");
//     a++;
// }

// var a = 0;
// while(a<=10){
//     console.log("hello");
//     a++;
// }

// var a = 10;
// while(a>=0){
//     console.log("hello");
//     a--;
// }

// var num = Number(prompt("enter number"));

// while(num<=10){
//     console.log('hello achal');
//     num++;
// }

// var num = Number(prompt("enter number"));
// var a = 1

// while(num<=num){
//     if(a%2==0){
//         console.log(a)
//     }
//     a++;
// }

// var num = Number(prompt("enetr number"));
// var a = 1;

// while(a<=10){
//     console.log(num + 'x' + a + '=' + num*a);
//     a++;
// }

// do{
//     var pass = prompt("enter password")

// }while(pass != '123')

//     console.log('welcome')

// for(var a = 1;a<=10;a++){
//     console.log(a)
// }


// var userName = 'achal';
// var age = 23;
// var gender = 'male';

// console.log("my name is", userName,'my age is ',age,'my gender is ', gender)

// console.log(`my name is ${userName} my age is ${age} and my gender is ${gender}`)

let s = "Hello, World!";

console.log(s.length);              // 13
console.log(s.toUpperCase());       // "HELLO, WORLD!"
console.log(s.toLowerCase());       // "hello, world!"
console.log(s.indexOf("World"));    // 7  (position of "World")
console.log(s.includes("Hello"));   // true
console.log(s.slice(0, 5));         // "Hello"
console.log(s.substring(7, 12));    // "World"
console.log(s.replace("World", "JS"));   // "Hello, JS!"
console.log(s.split(", "));         // ["Hello", "World!"]
console.log("   hi   ".trim());     // "hi"
console.log("abc".repeat(3));       // "abcabcabc"
console.log(s.startsWith("Hello")); // true
console.log(s.endsWith("!"));       // true
console.log(s.charAt(0));           // "H"
console.log(s[0]);                  // "H" (also works)
