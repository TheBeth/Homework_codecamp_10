# Code Camp 10
## Phubeth Manorat
---
### Exercise 01
1. ถ้าเรามี Object
```js
let user = {
    name : "John",
    years : 30
}
```
ให้เขียน Destrucutring assignment ที่ให้
- property ที่ชื่อ name ไปอยู่ในตัวแปร name
- property ที่ชื่อ years ไปอยู่ในตัวแปร age
- property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin (ให้เป็น false ถ้าไม่มีค่ากหนด)

2. ถ้าเรามี Object
```js
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}
```
ให้สร้าง function topSalaries(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงที่สุด
- ถ้า salaries ไม่มีข้อมูลให้คืนค่าเป็น null
- ถ้าสูงสุดมีหลายคนให้คืนค่าใครก็ได้
---
### Exercise 02
1. ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร
```js
let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
```
2. ใช้ __proto__ ในการกำหนด prototype object ดังนี้ 
	    pockets → bed → table → head.

3. การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป 
```js
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
```
4. การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี 
```js
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple
```
---

### Exercise 03
1. จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
```
ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // ?
```
ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false; ***

alert( rabbit.eats ); // ?
```
ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // ?
```

2. ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
```js
let obj2 = new obj.constructor();
```
---
### Exercise 04
1. ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ alert ข้อความออกมาหลังจากผ่านไป ms
```js
function f() {
  alert("Hello!");
}

f.defer(1000); // แสดง "Hello!" หลังจากผ่านไป 1 วินาที
```
2.   ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ return Function ให้ alert(a+b) เมื่อผ่านไป ms
```js
function f(a, b) {
  alert( a + b );
}
f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที
```
---
### Exercise 05
1. มี Object Dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs
ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั้นด้วย comma
```js
let dictionary = Object.create(null);

// your code to add dictionary.toString method

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"
```
2.  สร้าง object rabbit ด้วย new keyword
```js
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
```
- คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม่
```js
rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
```
