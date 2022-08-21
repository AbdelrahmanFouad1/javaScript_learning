const name = 'Abdo';
let age = 25;
const isMarried = false;

age = 30;


const summarizeUser = (userName, userAge, userIsMarried) => {
    return 'Name is ' + userName + ', age is ' + userAge + ' and isMarried is ' + userIsMarried;
}

const add = (a, b) => a + b;

console.log(add(1, 2));

console.log(summarizeUser(name, age, isMarried));