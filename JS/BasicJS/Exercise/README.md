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
### Exercise 6
- Browser จะโชว์ข้อความ “Hello Codecamp #5” ไหม
```js
if("0"){
    alert("Hello Codecamp #5")
}
// Hello CodeCamp #5
```
***
### Exercise 7
1. ใช้ if else ในการเขียนถามชื่อของคุณ
- ถ้าตอบถูกให้แสดงคำว่า “เก่งมาก”
- ถ้าตอบผิดให้แสดงคำว่า “คุณไม่รู้จักชื่อฉัน”
```js
let name = prompt('Input my name : ')
    name === 'beth'? alert("Awesome") : alert("You don't know me.");
```
***
### Exercise 8
1. ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
- ถ้าคะแนน มากกว่าเท่ากับ 80	ได้ A
- ถ้าคะแนน อยู่ระหว่าง 70 - 79 	ได้ B
- ถ้าคะแนน อยู่ระหว่าง 60 - 69 	ได้ C
- ถ้าคะแนน อยู่ระหว่าง 50 - 59 	ได้ D
- ถ้าคะแนน น้อยกว่า 50		   ได้ F
***
### Exercise 9
1. เปลี่ยน if-else ข้างล่างในอยู่ในรูปของ Ternary Operators
```js
let age = promp('How old are you?');
let price;
if(age<18){
    price = 2000;
}else{
    price 3500;
}
```
***
### Exercise 10
- คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร
```js
alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1, 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) );  // 1, undefined
alert( null || 2 && 3 || 4 ); // 3
```
***
### Exercise 11
- เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60
- เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60
***
### Exercise 12
- คำสั่ง alert ไหนที่จะถูกรันบ้าง
```js
if (-1 || 0) alert( 'first' ); // alert
if (-1 && 0) alert( 'second' ); // not alert
if (null || -1 && 0) alert( 'third' ); // not alert
```
### Exercise 13
1. ให้เขียนระบบ login
- ให้ใช้ prompt ในการถามใครเป็นคน login
- ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password
- วิธีเช็ค Password
- ถ้า string นั้นเป็น “codecamp#5” ให้ alert “ยินดีต้อนรับ”
- ถ้า string เป็นอย่างอื่นให้ alert เป็น “Wrong password”
- ถ้าเป็น string ว่าง หรือ กด cancel ให้ alert ว่า “ยกเลิก”
- ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ผมไม่รู้จักคุณ”
- ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า “ยกเลิก”
***
### Exercise 14
- เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร
```js
let i = 3;
while(i){
    alert(i--);
}
// 3 2 1
```
---
### Exercise 15
- code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
```js
let i = 0;
while(++i < 5) alert(i); // 1 2 3 4

let i = 0;
while(i++ < 5) alert(i); // 1 2 3 4 5
```
---
### Exercise 16
- code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
```js
for (let i = 0; i < 5; i++) alert( i ); // 1 2 3 4
for (let i = 0; i < 5; ++i) alert( i ); // 1 2 3 4
```
---
### Exercise 17
- ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา
---
### Exercise 18
- เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
```js
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
```
---
### Exercise 19
#### ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย
- ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
- และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
---
### Exercise 20
- แปลง Code ดังกล่าวเป็น if-else statement
```js
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```
---
### Exercise 21
- แปลง Code ดังกล่าวเป็น Switch cases
```js
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
```
---



