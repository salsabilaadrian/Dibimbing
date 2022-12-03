//1
function hipHura(bilangan) {
    for (let i = 0; i < bilangan; i++) {
        let number = i + 1
        if (number % 5 == 0 && number % 3 == 0) {
            console.log("Hip Hura")
        } else if (number % 5 == 0) {
            console.log("Hura")
        } else if (number % 3 == 0) {
            console.log("Hip")
        } else {
            console.log(number)
        }
    }
    console.log("done")
}
console.log(hipHura(15))

//2
const array = [31, 9, 54, 11, 43, 6, 67]
let max = array[0],
    min = array[0];

function maxMin(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }

        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log(`{max: ${max} min: ${min}}`)
}
console.log(maxMin(array))

//letcode 
//fizzbuzz
function fizzBuzz(n) {
    let output = []
    for (let i = 0; i < n; i++) {
        let number = i + 1
        if (number % 5 == 0 && number % 3 == 0) {
            //x.push berfungsi untuk memasukkan nilai ke dalam x dengan kondisi x merupakan array
            output.push("FizzBuzz")
        } else if (number % 5 == 0) {
            output.push("Buzz")
        } else if (number % 3 == 0) {
            output.push("Fizz")
        } else {
            //Mengubah number menjadi String
            output.push(number.toString())
        }
    }
    return output;
}
console.log(fizzBuzz(3))

//missing number
function missingNumber(nums) {
    let sum = (nums.length * (nums.length + 1)) / 2;

    for (let i = 0; i < nums.length; i++) {
        sum = sum - nums[i];
    }

    return sum;
};