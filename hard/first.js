let myarr = [2, 2, 4 ,5,6]

console.log(myarr)
console.log(myarr.push(6,7))
console.log(myarr.pop())


let newarr = myarr.join()
console.log(myarr)
console.log(newarr)


/// slice , splice


const myn1 =  myarr.slice(0,2)
console.log("A", myn1)

const myn2 =  myarr.splice(0,2)
console.log("b", myn2)

const myn3 =  myarr.splice(0,2)
console.log("c", myn3)

console.log(myarr)
