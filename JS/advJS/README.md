# Code Camp 10
## Phubeth Manorat
---
### Exercise 01
- แก้ไขการเขียนโค้ดต่อไปนี้
```js
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}
let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}
```
---
### Exercise 02
1. ให้สร้าง Object แบบ Object Iteral โดยให้กำหนดตัวแปรชื่อ human โดยมี Properties ทั้ง 5 อย่าง
- ชื่อของผู้เรียน เป็น String
- อายุของผู้เรียนเป็น number
- บ้านของตัวเองเป็น String
- โสดหรือไม่โสดเป็น boolean
- คะแนนความฉลาดของตัวเองเป็น number (เต็ม 10)
---
### Exercise 03
1. ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา
2. ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
---
### Exercise 04
1. ให้ทำตามคำสั่งต่อไปนี้
- สร้าง Object เปล่าขึ้นมา
- เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
- เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
- เปลี่ยน properties name เป็น “Boy”
- ลบ properties name ออกจาก Object
2. ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ถ้ามีให้คืนค่า true ถ้าไม่มีให้คืนค่า false
3. การเขียนข้างล่างต่อไปนี้ Error  ไหม
```js
const user = {
  name: "John"
};

// does it work?
user.name = "Pete";
// not Error
```
4. จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด
```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```
---
5.	จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร
```js
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu, 2);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```
---
### Exercise 05
1. การทำงานของ code ดังกล่าวจะได้อะไรออกมา
```js
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
```
2.	การทำงานของ code ดังกล่าวจะได้อะไรออกมา
```js
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name );
```
3. สร้าง object calculator จาก 3 methods นี้:
read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
sum() คืนค่าผลบวกของ 2 ค่านั้น.
mul() คืนค่าผลคูณของ 2 ค่านั้น.
```js
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```
---
#### Exercise 06
1. สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้
- read(): รับค่าจาก propmt สองตัว
- sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
- mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว
2. สร้าง constructor function Accumulator(startingValue)
- โดยที่ Object ดังกล่าวควร เก็บผลรวมไว้ใน property ที่มี key ชื่อว่า value, ค่าเริ่มต้นของ key ชื่อ value นี้ คือ startingValue
- ฟังก์ชัน read() ควรอ่านค่าจาก propmt() และ เพิ่มค่าที่ใส่เข้ามาใน key ชื่อ value
พูดง่าย ๆ ก็คือ value คือผลรวมของ prompt โดยเริ่มจาก startingValue
---
### Exercise 07
- ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)\
```
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
```
---
### Exercise 08
1. เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่
2. เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false
3. เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string 
ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”
4. เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar 
ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้"



