// 1
function ucFirst(string) {
    let m = string[0].toUpperCase()
    let n = string.slice(1)
    console.log(m + n)
}

// 2
function checkSpam(string) {
    let n = 0
    let m = 0
    for (let i = 0; i < string.length; i++) {
        i = string.indexOf("xxx", i)
        if (i < 0) break
        n++
    }
    for (let i = 0; i < string.length; i++) {
        i = string.indexOf("viagra", i)
        if (i < 0) break
        m++
    }
    if (m + n <= 0) {
        return false
    } else {
        return true
    }
}

// 3
function truncate(str, maxlength){
    let s = ""
    if(str.length > maxlength){
        str = str.slice(0, maxlength-1)
        str += "..."
    }else{
       str
    }
    console.log(str)
}

// 4 
function extractCurrencyValue(string, rate){
    string = Number(string.slice(1,string.length))
    return string *= rate
}