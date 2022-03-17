# Code Camp 10
## Phubeth Manorat

### Exercise 1
- ผลลัพธ์ทั้ง console.log ทั้งสามคืออะไร
```js
let name = "Codecamp";

console.log(`hello ${1}`) // hello 1
console.log(`hello ${"name"}`) // hello name
console.log(`hello ${name}`) // hello Codecamp
```
***
### Exercise 2
1. กำหนดตัวแปรสำหรับเก็บชื่อ และกำหนดค่าเริ่มต้นเป็นชื่อของผู้เรียน
2. กำหนดตัวแปรสำหรับเก็บอายุ และกำหนดค่าเริ่มต้นเป็นอายุของผู้เรียน
3. กำหนดตัวแปรสำหรับเก็บที่อยู่ และกำหนดค่าเริ่มต้นเป็นที่อยู่ของผู้เรียน
4. กำหนดตัวแปรสำหรับเก็บประวัติของนักเรียนโดยใช้ตัวแปรทั้ง 3 ตัวด้านบนประกอบการเขียนประวัตินี้ด้วย
```js
let name = "Beth"
let age = 28
let country = "Thailand"
let sumAll = name + " " + age + " " + country

console.log(sumAll) // Beth 28 Thailand
```
***
### Exercise 3
- ให้ระบุค่าของ a, b, c และ d หลังจากจบ statements ทั้งสามบรรทัด
```js
let a = 1, b = 1
let c = ++a;
let d = b++;
// a=2 b=2 c=2 d=1
```
***
### Exercise 4
- จงหาผลลัพธ์ของ Statement ต่อไปนี้
```js
1. "" + 1 + 0 // "10"
2. "" - 1 + 0 // -1
3. true + false // 1
4. 6 / "3" // 2
5. "2" * "3" // 6
6. 4 + 5 + "px" // "9px"
7. "$" + 4 + 5 // "$45"
8. "4" - 2 // 2
9. "4px" - 2 // NaN
10. 7 / 0 // Infinity
11.	"  -9  " + 5 // "  -9  5"
12.	"  -9  " - 5 // -14
13.	null + 1 // 1
14.	undefined + 1 // NaN
15.	" \t \n" - 2 // -2
```
***
### Exercise 5
- จงหาค่าของการเปรียบเทียบต่อไปนี้
```js
5 > 4 // True
“apple” > “pineapple” // False
“2” > “12” // True
undefined == null // True
undefined === null // False
“bee” < “be” // False
“bee” > “Bee” // True
“Bee” < “be” // True
```
***