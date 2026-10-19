const arr = [123, 143, 232, 534, 354, 646, 732, 657, 464]
const arr2 = []
let summ = 0
arr.forEach((el) => {
    if (el > 250){
        arr2.push(el)
    }
})
console.log(arr2.length)

arr2.forEach((el) => {
    summ += el
})
console.log(summ)
console.log(summ / arr2.length)