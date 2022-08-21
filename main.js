const name = 'Abdo';
let age = 25;
const isMarried = false;

age = 30;


function summarizeUser(userName, userAge, userIsMarried){
    return 'Name is ' + userName + ', age is ' + userAge + ' and isMarried is ' + userIsMarried;
}

console.log(summarizeUser(name, age, isMarried));