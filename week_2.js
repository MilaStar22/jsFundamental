// 1) Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), 
// яка приймає даний об’єкт і виводить список його властивостей записаних в масив. Виведіть також 
// масив значень властивостей об’єкта.

// let employee = {
//     firstName: "Peter",
//     lastName: "Peterson",
//     position: "developer",
//     experience : 4,
//     gender : "man" , 				
// };
// function addEmployee (firstName, lastName, position, experience, gender){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.position = position;
//     this.experience = experience;
//     this.gender = gender;
// };

// var  newEmployee = new addEmployee ("Anna", "Samborska", "QA", "2", "woman"); 

// function showProps(obj) {
//     const propList = Object.keys(obj); // виводим список властивостей
//     const valueList = Object.values(obj); // виводим масив значень властивостей
  
//     console.log("Список властивостей: ", propList);
//     console.log("Масив значень властивостей: ", valueList);
    
// };

// showProps(employee);
// showProps(newEmployee);

// 2) Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// let employee = {
//     firstName: "Peter",
//     lastName: "Peterson",
//     position: "developer",
//     experience : 4,
//     gender : "man" , 				
// };


// function propsCount(obj) {
//     //return Object.keys(obj).length;
//     let howManyProps = Object.keys(obj);
//     for (i = 0; i <= howManyProps.length; i++) {
//     }
//     return howManyProps.length;
// };
// console.log(propsCount(employee));

// 3) Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить ім’я 
//і прізвище особи. 
// Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету). 
// В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
// Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). 
// Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.

class Person {
    constructor(name,surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName (){
        console.log(`${this.surname} ${this.name}`);
    }
};

class Student extends Person {
    static currentYear = 2023;
    constructor (name,surname,year) {
        super(name,surname);
        this.year = year;
    }
    showFullName(midleName) {
        console.log(`${this.name} ${this.surname} ${midleName}`)
    }
    showCurse() {
        console.log(`Study year: ${Student.currentYear-this.year}`);
    }
};

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); 
console.log(stud1.showCurse(2019));
