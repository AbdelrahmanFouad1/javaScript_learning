const hobbies = ['sports', 'cooking'];

const copiedArray = [...hobbies];
console.log(copiedArray);


const toArray = (...args) => {
    return args;
}


console.log(toArray(1, 2, 3, 4, 5, 7, 8, 9));