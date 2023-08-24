// 1
let arr = []
for (let num = 10; num <= 20 ; num++){
    arr.push(num)
}
alert(arr)
// 2
let arr2 = []
    for (let a = 10; a <= 20; a++){
     let square = a * a;
    arr2.push(square)
    }
    alert(arr2)
//3 

for (let a = 1; a <= 10; a++){
    let multiply = 7 * a;
    console.log(`7 * ${a} = ${multiply}`)
}

//4
let result = 0;
for (let b = 1; b <= 15; b++){
   result += b;
}
console.log(result)

//5???

let mult = 15;
for (let c = 16; c <=35; c++){
mult *= c;

}
console.log(mult)

//6
let sum = 0;
let count = 0;
let average = 0;
for ( let i = 1; i<= 500; i++){
    sum += i;
    count++;
    if(count >= 500)break;
}
average = sum/count;
console.log(average)

//7
let sum2 = 0;

for (i = 30; i <= 80; i++){
    if (i % 2 === 0){
        sum2 += i;
    }
}
console.log(sum2)

//8
for ( let i = 100; i <= 200; i++){
    if (i % 3 === 0){
        console.log(i)
    }
}

//9 & 10 & 11
let n = 100;
let divisors = [];
let evenDivisors = 0;
let evenDivsum = 0;

for (let i = 1; i <= n; i++){
    if (n % i === 0){
        divisors.push(i);
        if (i % 2 === 0){
            evenDivisors++;
            evenDivsum +=i;
        }
    }
}
console.log(divisors)
console.log(evenDivisors)
console.log(evenDivsum)

//12
let b;
for(let a = 1; a <=10; a++ ){
   for(b = 1; b <= 10; b++){
    let result = a * b;
    console.log(`${a} * ${b} = ${result}`)
   }

}



