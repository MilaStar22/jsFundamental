function createArray(start, end){
    const array = [];
    for (let i = start; i <= end; i++) array.push(i);
    return array;
};
console.log(createArray(2, 9))