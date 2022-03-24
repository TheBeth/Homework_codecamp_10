// 1
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
alert(rabbit.jumps); // true
delete rabbit.jumps;
alert(rabbit.jumps); // null
delete animal.jumps;
alert(rabbit.jumps); // undefined

// 2
let pockets = {
    money: 2000
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: pockets
};
let table = {
    pen: 3,
    __proto__: bed
};
let head = {
    glasses: 1,
    __proto__: table
};

// 3
let animal = {
    eat() {
        this.full = true;
    }
};
let rabbit = {
    __proto__: animal
};
rabbit.eat(); // rabbit

// 4
let hamster = {
    eat(food) {
        if (!this.stomach) this.stomach = []
        this.stomach.push(food);
    }
};
speedy.eat("apple");

let speedy = {
    __proto__: hamster
};
let lazy = {
    __proto__: hamster
};

