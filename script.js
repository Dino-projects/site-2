let grams = 150000;

let kg = grams / 1000;
let centners = kg / 100;
let tons = kg / 1000;

console.log(`${grams}г = ${kg}кг = ${centners.toFixed(2)} центнерів = ${tons.toFixed(3)} тон`);




let seconds = 3665;

let days = Math.trunc(seconds / 86400);
seconds = seconds % 86400;

let hours = Math.trunc(seconds / 3600);
seconds = seconds % 3600;

let minutes = Math.trunc(seconds / 60);
seconds = seconds % 60;

let secs = seconds;

console.log(`${3665} sec = ${days} days ${hours} hrs ${minutes} mins ${secs} secs`);