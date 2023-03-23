// 8) Даний масив, вибрати із нього всі парні числа, та всі непарні числа, потім проставити всі парні 
// числа у відповідність парним індексам масиву, а непарні — непарним індексам масиву
 let arr = [5, 2, 4, 7, 0, 8, 9, 10];
 let arr2 = arr.sort((a,b) => a-b);
 console.log(arr2);

function sortArray(arr){
    let odd = [];
    let result = [];
    let even = [];
    arr.sort((a,b)=> a-b);
    arr.forEach(item => item % 2 ? even.push(item) : odd.push(item));
    for (let i = 0; i <= arr.length; i++) {
        if (i % 2 === 0 && even.length > 0) {
            result.push(even.shift());
        } else if (i % 2 !== 0 && odd.length > 0) {
            result.push(odd.shift());
        } else {
            result.push(null);
        }
    }
    return result;
}
let newArr = sortArray(arr);
console.log(newArr);

/*
index, value
0          0
1          5
2          2
3          7
4          4
5          9
6          8
7          null
8          10
*/