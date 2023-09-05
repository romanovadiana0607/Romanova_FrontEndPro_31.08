// //1
// let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] ;

// let positiveNums = array.filter((n) => n > 0).length;
// console.log(positiveNums)
// let positiveNumsSum = array.filter((n) => n > 0).reduce((sum,n) => sum + n);

// console.log(positiveNumsSum)

// //2

// let array2 = [5,2,3,4,1];
// array2.sort(function(a,b){
//     return a - b;
// })
// console.log(array2)
// //the lowest number would be under index 0 
// //but it is required to actually console.log the index of the lowest number we can use:
// let array3 = [1,2,3,4,5]
// function minNum(array3){
//     return Math.min.apply(null,array3);
// }
// let index = array3.indexOf(Math.min.apply(null,array3))

// console.log(minNum(array3),index)

// //3
// let array4 = [-5,4,3,-2,1];
// function maxNum(arr){
// return Math.max.apply(null,arr)
// }
// let index2 = array4.indexOf(Math.max.apply(null,array4))

// let negativeNums = array4.filter((n) => n < 0).length

// console.log(maxNum(array4),index2, negativeNums);

//4
array5 = [1,2,3,4,5,6];
const numOfOdds = array5.filter(function (num){
   if(num > 0 || num % 2 !== 0){
    return num
   }
   return num
} )
console.log(numOfOdds)

