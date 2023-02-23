const arr = [5, 3, 4, 5,6,7,3];
function compactArray() {
    const compactArray = [];
    arr.forEach((element) => compactArray.includes(element) ? null : compactArray.push(element));
    return compactArray;
};
console.log(compactArray(arr))