let arr = [  
    { name: "Misha Klym", age: 2},  
    { name: "Sam Winchester", age: 5 },  
    { name: "Jordan Peterson", age: 43 },  
    { name: "John Wayne", age: 17 },  
    { name: "Stan Lee", age: 22 }
    ];

    let arr1 = arr.filter(item => item.age >= 18);
    console.log(arr1)