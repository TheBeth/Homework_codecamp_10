// 1
let obj = {}

for (let i = 0; i < 10000; i++) {
    let key = prompt("Input Key")
    if (key === "stop") {
        console.log(obj)
        break;
    }
    let value = prompt("Input Value")
    obj[key] = value
}


// 2
let obj = {}

for (let i = 0; i < 5; i++) {
    let key = prompt("Fruit")
    let value = +prompt("Number")
    if (value > 1) {
        key += "s"
    } else if (value == 0){
        value = `Don't have ${key}`
    }
    obj[key] = value
}
console.log(obj)