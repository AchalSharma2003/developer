// arrays
// var a = [10,20,30,40,50];

// console.log(a);
// console.log(a[2]);

// var b = ['achal',10,20.5];
// console.log(b);

// var a = [1,2,3,4,5,7,8,8,5,4,3,4,5,5];
// console.log(a.length);
// console.log(a[a.length-1]);
// console.log(typeof(a));

// a.push(9);
// a.push(10);
// console.log(a);

// a.pop();
// console.log(a);

// a.unshift(5);
// console.log(a);

// a.shift();
// a.shift();
// console.log(a);

// var arr = [15,45,78,90,78];
// arr.shift();
// arr.shift();
// arr.unshift(99);
// arr.pop();
// arr.pop();
// arr.push(89);
// arr.unshift(67);
// arr.push(89);
// arr.unshift(1);
// console.log(arr[3]);

// a.splice(1,2,10);
// console.log(a);

// var b = [
//     [10,20,30],
//     [21,31,11],
//     [55,66,99]
// ];

// console.log(b);

// var arr = [15,5,100,45,78,90,78];
// console.log(arr.reverse());
// // console.log(arr.sort());  //giving error because it teats it as a string
// console.log(arr.sort((a,b)=>a-b));

// for(var a = 0;a<=arr.length;a++){
//     console.log(arr[a]);
// }

// for(a of arr){
//     console.log(a);
// };

let arr = [1, 2, 3, 4, 5];

arr.slice(1, 4); // [2, 3, 4]  (original unchanged)
arr.concat([6, 7]); // [1, 2, 3, 4, 5, 6, 7]
arr.includes(3); // true
arr.indexOf(3); // 2
arr.indexOf(99); // -1 (not found)
arr.join("-"); // "1-2-3-4-5"


