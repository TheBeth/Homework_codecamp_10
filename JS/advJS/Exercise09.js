// 1
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert(fruits.length); //  4

// 2
let styles = ["Jazz", "Blues"]
styles.push("Rock-n-Roll")
styles[1] = "Classics"
styles.shift()
styles.unshift("Rap", "Reggae")

// 3
function sumInput() {
    let a = +prompt("Input number : ")
    let arr = []
    let sum = 0
    while (isNaN(a) === false) {
        arr.push(Number(a))
        sum += Number(a)
        a = +prompt("Input number : ")
    }
    console.log(sum)
}
// 3
function getMaxSubSum(arr) {
    let maxCurrent = arr[0];
    let maxTotal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    maxCurrent = Math.max(current, current + maxCurrent);
    maxTotal = Math.max(maxTotal, maxCurrent);
  }
  return maxTotal;
}