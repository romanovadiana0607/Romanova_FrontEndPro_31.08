'use strict'
//1
let space = '';
for(let i = 20; i<= 30; i = i+ 0.5){
space += i + ' ';
}
console.log(space)

// 2
let dollar = 27;
let conversion;
for(let i = 10; i<=100; i = i + 10){
    conversion = i * dollar;
    console.log(`${i} dollars is ${conversion} hrivnas`)
}

//3
let N = 169;
let square;
for(let i = 1; i <= 100; i++){
    square = i * i;
    if(square <= N){
        console.log(i)
    }
}

//4
let num = 9;
function isPrime(num){
if(num <= 1){
    return false;
}

for(let i = 2;i < num; i++){
    if(num % i === 0){
        return `${num} is not a prime number`
    }
}
return `${num} is a prime number`
}
console.log(isPrime(num))

//5
let randomNum = 10;
function powerOfThree(num) {
    if (num < 3) {
        return 'Can not be made by power of three'
    }

    while(num > 1){
        if(num % 3 !== 0){
            return('Can not be made by power of three')
        }
        isTrue = num /= 3
    }
    return 'Can be made by power of three'
}
console.log(powerOfThree(randomNum))



