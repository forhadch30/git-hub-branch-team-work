var numbers = [1, 2, 3, 4, 5, 6, 10];
var result = numbers.find((currentValue, currentIndex, arr) => {
    return currentValue > 4;
})
console.log(currentIndex)
console.log(arr)
console.log(result)