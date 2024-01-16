// const myName = 'ajit';

// console.log(myName);

// Window vs Global Object

setTimeout(() => {
    console.log("timeout called");
    clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
    console.log("called after interval of 1 sec");
}, 1000);

console.log(__dirname);
console.log(__filename);