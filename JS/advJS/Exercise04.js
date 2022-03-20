// 1
let obj = {}
obj.name = "Sonter"
obj.surname = "Pakorn"
obj.name = "Boy"
delete obj.name

// 2
function isEmpty(obj) {
    for (let some in obj) {
        return false
    }
    return true
}

// 3
const user = {
    name: "John"
};
user.name = "Pete"; // Not Error

// 4 
function sum(obj) {
    let add = 0
    for (let key in obj) {
        add += obj[key]
    }
    console.log(add)
}

// 5
function multiplyNumeric(obj, times) {
    for (let key in obj) {
        if (typeof obj[key] !== "number") continue;
        obj[key] *= times
    }
}
