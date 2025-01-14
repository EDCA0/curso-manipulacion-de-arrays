const letters = ["a", "b", "c", ];
const newArray = [];

// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// };

// console.log(newArray);

const si = letters.map(numero => numero + "++");

console.log(letters);
console.log(si);