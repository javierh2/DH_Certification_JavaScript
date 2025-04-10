const obj1 ={
    a:1,
    b:2
}

const obj2 = {
    ...obj1
}

// console.log(obj2 === obj1)

const sta1 = {
    a:1,
    b:2
}

const sta2 = {
    c:3,
    d:4
}

const comb = {...sta1,...sta2}

console.log(comb)
console.log(comb === sta2)