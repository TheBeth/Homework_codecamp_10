// 1
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
function sumSalaries(salaries){
let sum = 0
for(let i of Object.values(salaries)){
    sum += i
}
    return sum
}
alert( sumSalaries(salaries) ); // 650

// 2
let user = {
    name: 'John',
    age: 30
  };
  
function count(obj){
    let num = 0
    for(let i of Object.values(user)){
        num++
    }
    return num
}
alert( count(user) ); // 2