// 1
function work(a, b) {
    console.log(a + b);
}
function spyDecorator(func) {
    wrapper.calls = []

    function wrapper(...arr) {
        wrapper.calls.push(arr)

        func.apply(this, arr)
    }
    return wrapper
}
work = spyDecorator(work)
work(1, 2)
work(4, 5)
for (let args of work.calls) {
    alert('call : ' + args.join())
}

// 2
function f(x){
    alert(x);
}
function delayDecorator(func, ms) {

    return function(...arr){

        setTimeout(() => func.apply(this,arr),ms)
    }
}
let f1000 = delayDecorator( f, 1000)
let f1500 = delayDecorator( f, 1500)