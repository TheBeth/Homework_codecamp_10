// 1
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true

Rabbit.prototype = {}; // true
Rabbit.prototype.eats = false; // false
delete rabbit.eats; // true

// 2
function OB() {}

let obj = new OB()
let obj2 = new obj.constructor()