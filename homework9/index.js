//1
let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] ;

let positiveNums = array.filter((n) => n > 0).length;
console.log(positiveNums)
let positiveNumsSum = array.filter((n) => n > 0).reduce((sum,n) => sum + n);

console.log(positiveNums,positiveNumsSum)

//2

let array3 = [1,2,3,4,5]
function minNum(array3){
    return Math.min.apply(null,array3);
}
let index = array3.indexOf(Math.min.apply(null,array3))

console.log(minNum(array3),index)

//3
let array4 = [-5,4,3,-2,1];
function maxNum(arr){
return Math.max.apply(null,arr)
}
let index2 = array4.indexOf(Math.max.apply(null,array4))

let negativeNums = array4.filter((n) => n < 0).length

console.log(maxNum(array4),index2, negativeNums);

//4
const array5 = [-1,2,3,4,5,6];
 numOfNeg = array5
.filter(function (num){
   if(num < 0){
    return num
   }
} )
.length;
console.log(numOfNeg);

//5
const array6 = [-1,2,3,4,5,6];
const oddPosNums = array6
.filter(function(num){
   if (num % 2 !== 0){
      return num;
   }
})
.filter((num)=> num > 0)
.length;

console.log(oddPosNums);

//6

const array7 = [1,2,3,4,5,6];
const evenPosNums = array7
.filter((num) => num % 2 === 0)
.filter((num) => num > 0)
.length;
console.log(evenPosNums);

//7
const evenPosNumSum = array7
.filter((num)=> num % 2 === 0)
.filter((num)=> num > 0)
.reduce((sum,num) => sum + num);
console.log(evenPosNumSum);

//8
const array8 = [1,2,3,4,5,6];
const oddPosNumSum = array8
.filter((num) => num % 2 !== 0)
.filter((num) => num > 0)
.reduce((sum,num) => sum + num);
console.log(oddPosNumSum);

//9
const array9 = [1,2,3,4,5,6];
const prodOfPosNums = array9
.filter((num) => num > 0)
.reduce((prod, num) => prod * num);
console.log(prodOfPosNums);

//10

let array10 = [1,2,3,4,5,6,7,8];
function maxNumAndResetToZero(arr){
   let maxNum = Math.max(...arr);

   for(let i = 0; i < arr.length; i++){
      if(arr[i] !== maxNum){
         arr[i] = 0;
      }
   }
}

maxNumAndResetToZero(array10)
console.log(array10)

