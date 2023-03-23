let names = "Alex,    Orysia, Misha,    Ira     , Paul";
let names1 = names.replace(/\s+/g, "");
let arr = names1.split(",");
let arr1 = arr.sort();
let arr2 = arr.join(",");
console.log(arr2);