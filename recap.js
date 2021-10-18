// 1. let and const
const name = 'Ananta jalil';
let phone = 'huewai p50 pro';
phone = 'Samsung Galaxy S21 ultra';

// 2. default parameter
// spread or three dots (...)
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);


// 3. template string
const myNotes = `I am  ${name}. I have a ${phone}.`
console.log(myNotes);

// 4. arrow function
// function square(x) {
//     return x * x;
// }
const square = x => x * x;
console.log(square(10));

