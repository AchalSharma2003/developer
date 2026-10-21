// function walk(){
//     console.log('walking...');
// }

// function sing(){
//     console.log('singing...');
// }

// function dance(){
//     console.log('dancing...');
// }

// walk();
// sing();
// dance();


// function greet(name){
//     console.log('good morning',name);
// }

// greet('achal');

// function add(a,b){
//     console.log(a+b);
// }
// add(3487187,752587);

// function greet(name,age){               function declaration
//     console.log('good morning...',name);

//     if(age>=18){
//         console.log('you are invited in the party');
//     }
//     else{
//         console.log("not allowed");
//     }
// }

// greet('achal',23);

// var a1 = function(){
//     console.log('hello');
// }
                                // function expression
// a1();

// var b1 = (a)=>{
//     console.log('hello',a);
// }
//                                 //   arrow function
// b1('achal');

// var b1 = (a) => console.log("hello",a);
// b1('achal')

// var c1 = (a,b) => console.log('hello guys',a,b);
// c1('welcome','my friends');

// (function(){
//     console.log("hello guys this is IIFE");
// })()

// (()=>console.log('this is IIFE'))()

// function aa(){
//     console.log('hello');

//     return 10;
// }

// console.log(aa());

// function abc(){
//     return 'hello'
// }

// var a = abc();
// console.log(a);

// function hero(){
//     var a = 10;

//     var b = 20;

//     var c = a+b;

//     return c;
// }

// console.log(hero());

// function invite(gen){
//     if(gen == 'F'){
//         return `welcome to women's  party`;
//     }
//     else{
//         return `welcome to men's party`;
//     }
// }

// console.log(invite('M'));

// function a(){
//     return 10;
// }

// var b = function(){
//     return 20;
// }

// var c = ()=>{
//     return 30;
// }

// console.log(a());
// console.log(b());
// console.log(c());

// function product(a){
//     return a*a;
// }
                                //  pure function
// console.log(product(5));


// var a = 10;
// function print(num){
//     a++;
//     return a*num;
// }
//                             impure function
// console.log(print(2))
// console.log(print(2))

// default values
// function greet(user = 'sir' ,age = '18+'){
//     console.log(`welcome ${user} your age is ${age}`);
// }

// greet('achal',90);
// greet();
// greet(undefined,30);

function processUser(name, callback) {
    console.log("Processing user: " + name);
    callback(name);
}

function welcome(name) {
    console.log("Welcome, " + name);
}

processUser("Aman", welcome);
// Processing user: Aman
// Welcome, Aman