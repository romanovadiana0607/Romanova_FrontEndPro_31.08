'use strict'

const yearOfBirth = prompt('What is your birth year?');
const originCity = prompt('What city are you from?');
const favSport = prompt('What is your favourite sport?');

function getAge(birthYear) {
    const currentDate = new Date;
    const currentYear = currentDate.getFullYear();
    const age = currentYear - birthYear;
    if (birthYear === null) {
        return `It's a pity that you didn't want to enter your year of birth`
    } else if (birthYear === "") {
        return `It's a pity that you didn't want to enter your year of birth`
    }
    return age;
}

function getCity(city) {
    if (city === 'Kyiv') {
        return ('You live in the capital of Ukraine');
    } else if (city === 'London') {
        return ("You live in the capital of England");
    } else if (city === 'Washington') {
        return ('You live in the capital of the USA');
    } else if (city === null) {
        return `It's a pity that you didn't want to enter your city of origin`;
    } else if (city === "") {
        return `It's a pity that you didn't want to enter your city of origin`;
    }
    else {
        return (`You live in ${originCity}`);
    }
}

function getSport(sport) {
   let lowercaseSport = sport.toLowerCase()
    if (lowercaseSport === "figure skating" ) {
        return 'Nice! Do you want to become next Sonja Henie?';
    } else if (lowercaseSport === "skiing") {
        return 'Nice! Do you want to become next Mikaela Shiffrin?';
    } else if (lowercaseSport === "swimming") {
        return 'Nice!Do you want to be next Katie Ledecky?';
    } 
   if(sport === null || sport === ""){
    return `It's a pity that you didn't want to enter your favorite sport`;
   }

}



alert(`${getAge(yearOfBirth)} \n${getCity(originCity)} \n${getSport(favSport)}`)