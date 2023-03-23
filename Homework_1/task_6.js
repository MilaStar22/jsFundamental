let  arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
arr = arr.flat();
let arr1 = new Array ();
let arr2 = new Array ();

function findStringElement() {
    for (const element of arr) {
        if (typeof element === "string") {
            arr1.push(element);   
        }else {
            arr2.push(element)
        };
      } 
}
findStringElement();

console.log(arr1, arr2);


