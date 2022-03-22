// 1.1
array1 = [1, 2, 30, 400]
let array2 = array1.map(x => x * 2) // array2 [2, 4, 60, 800]

// 1.2
array1 = [1, 2, 3, 4]
let array2 = array1.map(x => x.toString()) // array2 ["1", "2", "3", "4"]

// 1.3
array1 = [1, "1", 2, {}]
let array2 = array1.map(x => typeof x) // array2 ["number", "string", "number", "object"]

// 1.4
array1 = ["apple", "banana", "orange"]
let array2 = array1.map(x => x.toUpperCase()) // array2 ["APPLE", "BANANA", "ORANGE"]

// 1.5
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]

let array2 = array1.map(x => x.name) // array2 ["apple", "banana", "watermelon"]

// 1.6
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]

let array2 = array1.map(x => x.age) // array2 [14, 18, 32] 

// 1.7
array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
]

let array2 = array1.map(x => `${x.name} ${x.surname}`) // array2 ["apple London", "banana Bangkok", "watermelon Singapore"]

// 1.8
array1 = [1, 3, 4, 5, 6, 7, 8]
let array2 = array1.map((x) => {
    if (x % 2 == 0) { return "even" }
    else { return "odd" }
}) // array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]

// 1.9
array1 = [1, -3, 2, 8, -4, 5]
let array2 = array1.map(x => Math.abs(x)) // array2 [1, 3, 2, 8, 4, 5]

//1.10
array1 = [100, 200.25, 300.84, 400.3]
let array2 = array1.map(x => {
    x = x.toFixed(2)
    x = x.toString()
    return x
}) // array2 ["100.00", "200.25", "300.84", "400.30"]

// 1.11
array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
]

let array2 = array1.map((x) => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    let year = 0
    let month = 0
    let i = x.birth.split('-').reverse()

    if (dd >= i[0]) { month = 0 } else { month += 1 }
    if (mm >= i[1]) { year = 0 } else { year += 1 }
    i[2] = yyyy - year - i[2]

    x.age = i[2]
    console.log(x)
    return x
})
// array2 [
//     { name: "apple", birth: "2000-01-01", age: 19 },
//     { name: "banana", birth: "1990-10-01", age: 29 },
//     { name: "watermelon", birth: "1985-12-01", age: 33 },
//   ] 


// 1.12
array1 = [{ name: "apple", birth: "2000-01-01" },
          { name: "banana", birth: "1990-10-10" },
          { name: "watermelon", birth: "1985-12-30" },]

let array2 = array1.map( (x) => {
    let month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    x.birth = x.birth.split('-').reverse()
    x.birth[1] = x.birth[1]-1
    x.birth[1] = month[x.birth[1]]
    x.birth.join('-')
    
    return `<tr> <td>${x.name}</td> <td>${x.birth[0]} ${x.birth[1]} ${x.birth[2]}</td> </tr>`
})
// array2 [
//     "<tr>
//     <td>apple</td> 
//     <td>01 jan 2000</td>
//    </tr>",
//   "<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
//   "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
// ]


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// 2.1
array1 = [1, 2, 30, 400] 
let array2 = array1.filter( x => x > 10) // array2 [30, 400] 

// 2.2
array1 = [1, 2, 3, 4]
let array2 = array1.filter( x => x%2 === 1 ) // array2 [1, 3] 

// 2.3
array1 = [1, "1", 2, {}] 
let array2 = array1.filter( x => typeof x == "number"  ) // array2 [1, 2]

// 2.4
array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
let array2 = array1.filter( x => x.length > 6  ) // array2 ["pineapple", "watermeon"]

// 2.5
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
]
let array2 = array1.filter( x => x.age < 18  ) // 
array2 [
    { name: "apple", age: 14 },
    { name: "pineapple", age: 16 }]

// array2 [
//     { name: "apple", age: 14 },
//     { name: "pineapple", age: 16 },
//   ]

// 2.6
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
    ]
    let array2 = array1.filter( x => x.age !== 32  )
//   array2 [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ]

// 2.7
array1 = [1, -3, 2, 8, -4, 5]
let array2 = array1.filter( x => x > 0  ) // array2 [1, 2, 8, 5]

//2.8
array1 = [1,3,4,5,6,7,8]
let array2 = array1.filter( x => x%3 ===  0  ) // array2 [3, 6] 

// 2.9
array1 = ["peach", 1, -3, "2", {}, []]
let array2 = array1.filter( x => typeof x === "string"  ) // array2 ["peach", "2"]

// 2.10
array1 = ["APPLE", "appLE", "PEACH", "PEach"]
let array2 = array1.filter( x => x === x.toUpperCase() ) // array2 = ["APPLE", "PEACH"]

// 2.11
array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
]
let array2 = array1.filter( x => x.birth.split('-')[1] == 10 )
// array2 [
//     { name: "banana", birth: "1990-10-10" },
//       { name: "peach", birth: "2002-10-13" }
// ]

// 2.12
array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
]
let array2 = array1.filter( x => x.birth.split('-')[0] < 2000 )
// array2 [
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" }
//   ]


