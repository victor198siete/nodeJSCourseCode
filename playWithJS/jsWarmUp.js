const name = 'Victor';
let age = 33;
const hasHobbies = true;
age = 34;

//Arrow functions

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (`name is: ${userName}, age is: ${userAge}, and the user has hobbies: equal ${userHasHobby}`);
};
//const add = (a,b) => {return a + b;}
//const addOne = (a, b) => a + b;
const addRandom = () => 1 + 2;
//console.log(add(1,2));
//console.log(addOne(1,2));
console.log(addRandom());
console.log(summarizeUser(name, age, hasHobbies));

//Working with Objects, Properties & Methods

const person = {
    name: `Victor`,
    age: 29,
    greet(){
         console.log('Hi mi name is '+ this.name);
    }
};
console.log(person);
person.greet();
const copiedPerson = {...person};
console.log(copiedPerson);

//Arrays, Objects and Reference Types

const hobbies = ['Sports','Cooking'];
//for (let hobby of hobbies) {
//  console.log(hobby);
//}
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby
}));
console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);

//Spread and Rest Operator

const copiedArray = [...hobbies, 'Design '];
console.log(copiedArray);

const toArray = (... args) => {
    return args;
};
console.log(toArray(1,2,3,4));

//Destructuring

const printName = ({name, age}) => {
    console.log(name);
}
printName(person);

const pokemon = {
    mote: `Pikachu`,
    type: 'electricity'
};
const { mote, type } = pokemon;
console.log(mote, type);

const sports = ['Soccer', 'Baseball', 'Chess'];
const [sport1, sport2, sport3] = sports;
console.log(sport1, sport2, sport3);

//Async & Promises

setTimeout(() => {
    console.log('Timer is done!');
},2000);

console.log('Hello!');
console.log('Hi');

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer two is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);





