const inputResult = document.getElementById('result');

function addValue(val) {
    inputResult.value += val;
}
function calculationResult() {
    let num2 = eval(inputResult.value);
    inputResult.value = num2;
}
function clearInput() {
    inputResult.value = '';
}
function deleteValue() {
    inputResult.value = inputResult.value.slice(0,-1);
}