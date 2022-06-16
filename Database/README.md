# Code Camp 10
## Phubeth Manorat
----
### Example 1
* Database ของมหาวิทยาลัย CodeCampXX ที่ประกอบไปด้วยข้อมูลของอาจารย์(มี id เป็น unique attribute) และ รายวิชา(มี cid เป็น unique attribute) เก็บข้อมูลอาจารย์สอนรายวิชาต่าง ๆ จงวาด ER Diagram ทั้ง 4 เงื่อนไขต่อไปนี้ (4 ER Diagrams)
1. อาจารย์สามารถสอนคอร์สเดียวกันในหลาย ๆ เทอมได้ และสามารถเก็บได้ว่าสอนคอร์สนั้นล่าสุดเมื่อใด
2. อาจารย์สามารถสอนคอร์สเดียวกันในหลาย ๆ เทอมได้ แต่ให้เก็บรายละเอียดทุก ๆ เทอมที่อาจารย์สอนด้วย
3. อาจารย์ทุกคนต้องสอนอย่างน้อย 1 วิชา
4. อาจารย์ทุกคนต้องสอนแค่ 1 วิชาเท่านั้น

* จงวาด ER Diagram ของ Database ของค่ายเพลง CodeMusic ที่เก็บข้อมูล ศิลปิน ที่ร้องเพลงในแต่ละอัลบั้ม
1. ศิลปินแต่ละคนมี id, ชื่อ, ที่อยู่ และเบอร์โทรศัพท์ บางทีศิลปินก็จะมีที่อยู่เหมือนกัน
2. แต่ละเครื่องดนตรีมีชื่อ(เช่น กีต้าร์, คีย์บอร์ด)
3. แต่ละอัลบั้ม มีชื่ออัลบั้ม วันที่ออก และ id ของ อัลบั้ม
4. แต่ละเพลงจะมี ชื่อเพลง และ ชื่อศิลปิน
5. ศิลปินแต่ละคนสามารถเล่นได้หลายเครื่องดนตรี เครื่องดนตรีชิ้นนั้นก็อาจจะถูกเล่นโดยศิลปินได้หลายคน
6. แต่ละอัลบั้มมีจำนวนเพลงบอก แต่ไม่มีเพลงไหนที่ปรากฏออกมามากกว่า 1 อัลบั้ม
7. แต่ละเพลงสามารถถูกเล่นโดยเครื่องดนตรีตั้งแต่ 1 ชิ้นเป็นต้นไป ศิลปินก็สามารถเล่นได้หลายเพลง
8. แต่ละอั้ลบั้มมีศิลปินได้แค่ 1 คน และศิลปินก็สามารถออกได้หลายอัลบั้ม
----
### Example 2
* Database Schema
----
### Example 3
1. ค้นหาชื่อและอายุจากกะลาสีทุกคน 
- SELECT DISTINCT S.sname, S.age FROM Sailors S 
2. หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือรหัส 103
- SELECT sname FROM sailors S LEFT JOIN reserves R ON S.sid = R.sid WHERE R.bid=103
3. หา sids ทั้งหมดของกะลาสีเรือที่จองเรือสีแดง
- SELECT * FROM Reserves R LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = ‘red’
4. หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดง
- SELECT distinct S.sname FROM sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'red'
5. หาสีของเรือทั้งหมดที่ถูกจองโดยกะลาสีเรือชื่อ ‘Lubber’
- SELECT DISTINCT B.color FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE S.sname = 'Lubber'
6. หาชื่อของกะลาสีเรือที่จองเรืออย่างน้อย 1 ลำ
- SELECT DISTINCT S.sname FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid WHERE bid IS NOT NULL;
- SELECT DISTINCT S.sname FROM Sailors S RIGHT JOIN Reserves R ON S.sid = R.sid;
7. หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดงหรือเขียว
- SELECT distinct S.sname FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'Red' OR B.color = 'Green';
8. หาชื่อของกะลาสีเรือทั้งหมดที่จองเรือสีแดงและเขียว
- SELECT DISTINCT sname FROM Sailors S WHERE S.sname IN (SELECT distinct S.sname FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'Red') AND S.sname IN (SELECT distinct S.sname FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'Green');
9. หา sids ทั้งหมดของกะลาสีเรือที่จองเรือสีแดงแต่ไม่จองเรือสีเขียว
- SELECT DISTINCT sid FROM Sailors S WHERE S.sid IN (SELECT distinct S.sid FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R bid = B.bid WHERE B.color = 'Red') AND S.sid NOT IN (SELECT distinct S.sid FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'Green');
----
### Example 4
1. หาจำนวนของกะลาสีเรือทั้งหมด
* select count(sname) from sailors;
2. หาผลรวมของอายุกะลาสีเรือที่มี rating เท่ากับ 10
* SELECT sum(age) FROM boatrental.sailors WHERE rating = 10;
3. หาค่าเฉลี่ยอายุของกะลาสีที่มี rating เท่ากับ 10
* SLECT avg(age) from sailors where rating = 10;
4. หาชื่อของคนที่มีอายุมากที่สุด
* SELECT S.sname, MAX(S.age) FROM Sailors S
5. หาชื่อของคนที่มีอายุตั้งแต่ 25 ถึง 35
* SELECT sname FROM Sailors WHERE age BETWEEN 25 AND 35
----
### Example 5
1. หาเลขบัญชีที่เปิดในสาขาเมือง Riverside
* SELECT A.account_number FROM branch B LEFT JOIN account A ON B.branch_name = A.branch_name WHERE B.branch_city = 'Riverside';
2. หาเลขบัญชีที่เปิดในสาขาชื่อ A หรือ B
* SELECT account_number FROM account WHERE branch_name = 'A' OR branch_name = 'B';
3. หาจำนวนของเงินทั้งหมดของแต่ละคนฝาก
* SELECT customer_name, sum(balance) FROM depositor D LEFT JOIN account A ON D.account_number = A.account_number GROUP BY D.customer_name;
4. หาจำนวนของเงินทั้งหมดของแต่ละคนฝากที่มีบัญชีธนาคารอย่างน้อย 2 บัญชี”
* SELECT customer_name, sum(balance) FROM depositor D LEFT JOIN account A ON D.account_number = A.account_number GROUP BY D.customer_name HAVING count(*) > 1;
5. หาจำนวนของเงินทั้งหมดของแต่ละคนฝากที่มีบัญชีธนาคารอย่างน้อย 2 บัญชี โดยเรียงจากมากไปน้อย
* SELECT customer_name, sum(balance) FROM depositor D LEFT JOIN account A ON D.account_number = A.account_number GROUP BY D.customer_name HAVING count(*) > 1 ORDER BY sum(balance) DESC;





