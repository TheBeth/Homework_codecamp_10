// 1
function Cal() {
    this.read() = function(){
        let num1 = +prompt("Number 1")
        let num2 = +prompt("Number 2")
    },
    this.sum() = function(){ 
        return this.num1 + this.num2},
    this.mul() = function(){ 
        return this.num1 * this.num2}
}

let cal = new Cal()

cal.read() 
cal.sum()
cal.mul()

// 2
function Accumulator(startValue){
    this.value = startValue;
    this.read = function(){
       let temp = +prompt("Input number")
       this.value += temp
       }
   }

   let acc = new Accumulator(3)

   acc.value

   acc.read()