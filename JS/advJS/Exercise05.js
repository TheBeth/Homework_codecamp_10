// 1
let user = {
    name: "John",
    go: function () { alert(this.name) }
}
user.go()  // John

// 2
function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();
alert(user.ref.name); // none

// 3
let cal = {
    read() {
        this.num1 = +prompt("Number 1")
        this.num2 = +prompt("Number 2")
    },
    sum() {
        return this.num1 + this.num2
    },
    mul() {
        return this.num1 * this.num2
    }
};

cal.read();
alert(cal.sum())
alert(cal.mul())

// 4
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function () { // shows the current step
        alert(this.step);
        return this
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

ladder.up().up().down().showStep();

