//1 variant
let arr = [3, 7, 9];
let arr2 = [4, 3, 9];
let arr3 = [8, 7, 6]
let arr4 = arr2.concat(arr);
let arr5 = arr4.concat(arr3);
console.log(arr5);

//2 variant
let arr = [3, 7, 9];
let arr2 = [4, 3, 9];
arr[3] = 8;
arr[4] = 7;
arr[5] = 6;
let arr3 = arr2.concat(arr);
console.log(arr3);



//3 variant
let arr = [3, 7, 9];
let arr2 = [4, 3, 9];
let arr3 = [8, 7, 6];
let arr4 = [...arr2, ...arr, ...arr3];
console.log(arr4);

let arr = [3, 7, 9];
let arr2 = [4, 3, 9];
let arr3 = [8, 7, 6];
arr2.push(...arr, ...arr3);
console.log(arr2);