// 1
let user = {
    name : "John",
    years : 30
}
let {name , years : age, isAdmin = false} = user

// 2
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}
function topSalaries(salaries){
    let i = 0
    let k = null
    for( a in salaries){
        if(salaries[a] >i){
            i = salaries[a]
            k = a
        }
    }
    return k
    console.log(k)
}