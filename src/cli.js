import readlineSync from 'readline-sync';

function getUSerName() {
const userName = readlineSync.question('What is Your name? ');
console.log(`Hello, ${userName}!\n`); 
};

export default getUSerName;