console.log("How are you")

let balance = new Number(100)

console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2).toString().length)

let hundreds = 1000000

console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++Math ++++++++++

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.abs(5));
console.log(Math.round(9.5567));
console.log(Math.ceil(9.5567));
console.log(Math.floor(9.5567));
console.log(Math.min(9.5567, 282, 8 ,33,2));
console.log(Math.max(9.5567,3,3,3,2));


// ++++++++++ Random ++++++


console.log(Math.random())
console.log((Math.random() * 100) + 1)
console.log(Math.floor(Math.random() * 3 ) + 1)



let min = 10
let max = 30


console.log(Math.floor(Math.random() * (max-min + 1) + min))

let newdate = new Date()

console.log(newdate)
console.log(newdate.getDay())
console.log(newdate.getMonth())
console.log(newdate.getyear())

