// 1
function unique(arr){
    let set = new Set(arr)
    return set
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];

alert( unique(values) ); // Hare, Krishna, :-O

// 2
function anagram(arr) {
    let newArr = new Map();
    for (let i of arr) {
        let text = i.toLowerCase().split('').sort().join('');
        newArr.set(text,i);
    }
    return Array.from(newArr.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log( anagram( arr ) );

// 3
let map = new Map();
map.set('name','John');
let key = Array.from( map.values() );
key.push('more');