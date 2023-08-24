'use strict'

const arrayLength = parseInt(prompt('Please enter the array lenth'));


let newArray = [];

for(let i = 0; i < arrayLength ; i++){
    const arrayElements = prompt('Please enter array elements')
    newArray.push(arrayElements);
}

console.log(newArray) 


newArray.sort()
console.log(newArray)


newArray.splice(2,3)
console.log(newArray)