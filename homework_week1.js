// 1. Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]

// const arr = [5, 3, 4, 5,6,7,3];
// function compactArray() {
//     const compactArray = [];
//     arr.forEach((element) => compactArray.includes(element) ? null : compactArray.push(element));
//     return compactArray;
// };
// console.log(compactArray(arr))

// 2. Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

// function createArray(start, end){
//     const array = [];
//     for (let i = start; i <= end; i++) array.push(i);
//     return array;
// };
// console.log(createArray(2, 9))


// 3. Створити функцію, яка використовує метод trim() для рядків. Дана функція має брати на вхід рядок із іменами, та сортувати 
//їх по алфавіту, але між іменами може бути багато пробелів(функція має їх забирати)
// let names = "Alex,    Orysia, Misha,    Ira     , Paul";
// let newNames = sortNames(names);
// console.log(newNames); // 'Alex, Ira, Misha, Orysia, Paul'

// let names = "Alex,    Orysia, Misha,    Ira     , Paul";
// let names1 = names.replace(/\s+/g, "");
// let arr = names1.split(",");
// let arr1 = arr.sort();
// let arr2 = arr.join(",");
// console.log(arr2);

// 4. Фільтрувати масив об’єктів по віку, тобто новий масив має складатись із об’єктів які старше 18 років.

// let arr = [  
//     { name: "Misha Klym", age: 2},  
//     { name: "Sam Winchester", age: 5 },  
//     { name: "Jordan Peterson", age: 43 },  
//     { name: "John Wayne", age: 17 },  
//     { name: "Stan Lee", age: 22 }
//     ];

//     let arr1 = arr.filter(item => item.age >= 18);
//     console.log(arr1)

// 7. Додати на початок масиву [3, 7, 9] значенння [4, 3, 9] та на кінець масиву значення [8, 7, 6] різними способами

//1 variant
// let arr = [3, 7, 9];
// let arr2 = [4, 3, 9];
// let arr3 = [8, 7, 6]
// let arr4 = arr2.concat(arr);
// let arr5 = arr4.concat(arr3);
// console.log(arr5);

//2 variant
// let arr = [3, 7, 9];
// let arr2 = [4, 3, 9];
// arr[3] = 8;
// arr[4] = 7;
// arr[5] = 6;
// let arr3 = arr2.concat(arr);
// console.log(arr3);



//3 variant
// let arr = [3, 7, 9];
// let arr2 = [4, 3, 9];
// let arr3 = [8, 7, 6];
// let arr4 = [...arr2, ...arr, ...arr3];
// console.log(arr4);

// let arr = [3, 7, 9];
// let arr2 = [4, 3, 9];
// let arr3 = [8, 7, 6];
// arr2.push(...arr, ...arr3);
// console.log(arr2);

//9. Напишіть функцію яка приймає 2 аргументи, ім’я та прізвище, та повертає як результат ЦІЛУ строку ім`я та прізвище. 
//Додати додатково третій параметр - функцію яка буде переводити у певний регістр цю строку, верхній, нижній або кожне слово 
//із великої літери(це три окремі функції мають бути) а також видаляє зайві пробели
function myFullNameManipulation(name, surName, funcChangeName) {
    var fullName = name + " " + surName;
    if(funcChangeName!=null){
      return funcChangeName(fullName);
    }
      return fullName;
};
    
    var nameToUpperCase = function(strFullName) {
    var fullName = "" + strFullName;
      return fullName.toUpperCase();
    };
    
    var nameToLowerCase = function(strFullName) {
    var fullName = "" + strFullName;
      return fullName.toLowerCase();
    };

    console.log(myFullNameManipulation("mIla","STar",nameToUpperCase));

//10. Створити функцію яка приймає 2 аргументи (логін, пароль). Функція має перевіряти введені дані на наявність таких даних 
//в масиві який є всередині цієї функції. якщо логін та пароль співпадають із даними які є в масиві тоді вивести повідомлення 
//Ви авторизовані, інакше вивести — Логін або Пароль не вірний.
// function user (login,password) {
//     const arr = [
//         { login: "Misha", password: "12345aaa" },
//         { login: "Anna", password: "98765vvv" },
//         { login: "Danylo", password: "zxcvb123"}
//     ];
//     const user = arr.find(item => item.login === login && item.password === password);
//     return user === undefined ? "Логін або Пароль не вірний" : "Ви авторизовані";
// };
// console.log(user("Misha","12345aaa"))
