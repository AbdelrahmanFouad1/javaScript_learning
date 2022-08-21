const person = {
    name: 'Alex',
    age: 30,
    isMarried : false,
    greet (){
        console.log('Hello '+ this.name);
    }
};

const {name, age} = person;
console.log(name, age);

// person.greet();

const hobbies = ['sports', 'cooking'];

const [hoby1, hoby2] = hobbies;
console.log(hoby1, hoby2);

// hobbies.push('programming');
// console.log(hobbies);
