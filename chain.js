// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log('myObject.p', myObject?.p?.q);
console.log(b);


// destructuring array 
const [p, q] = [45, 37, 91, 86];
console.log(p, q);

const [best, friend] = ['ayan', 'khan'];

console.log(best, friend);


const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };

console.log(sky);



//chaining

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'Yuan', food: 'Mango' },
    web: {
        work: 'web development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

console.log(company.web.tech.third);

// console.log(company.backend.tech.third);