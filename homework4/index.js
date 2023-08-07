// const add = "+";
// const sub = "-";
// const mult = "*";
// const div = "/";

const yourAction = prompt('what would you like to do?');
const firstNum = prompt('Enter first number')
const secondNum = prompt('Enter second number')


function chooseYourAction(yourAction){
    if (yourAction === "add"){
        return "+";
    } if (yourAction === "sub"){
        return "-";
    }if (yourAction === "mult"){
        return "*";
    }if (yourAction === "div"){
        return "/";
    }
    else {
        return "*Please enter your action*"
    }
}

/*in the func "getResult" I had to convert strings that 
* we get from prompt into numbers, I used + as u told us at our lecture
*/

function getResult(yourAction,a ,b){
    if (yourAction === "add"){
        return +a + +b;
    } if (yourAction === "sub"){
        return +a - +b;
    }if (yourAction === "mult"){
        return +a * +b;
    }if (yourAction === "div"){
        return +a / +b;
    }
    else{
        return '*Couldnt get result, please enter both your numbers and action*'
    }
}

function ifPressCancel(num){
    const input = firstNum && secondNum;
    if(input === null){
        return "*Please enter yor number*"
    }
    else{
        return num
    }
}

alert(`${ifPressCancel(firstNum)} ${chooseYourAction(yourAction)} ${ifPressCancel(secondNum)} = ${getResult(yourAction,firstNum,secondNum)}`)

// This is the only way to complete the task that I could come up with

/*I also added an "ifPressCancel" function because on my last homework
* you asked me to try my program if the user presses cancel, so I applied it here
 */