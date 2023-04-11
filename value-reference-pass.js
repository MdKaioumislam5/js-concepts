// primitive data types = null, number, bigint, boolean, string, symbol, undefined

// object data types = array, object, function

var n = 10
function changed(n) {
    n = n + 100
    console.log(n)
}
changed(n)
console.log(n)

var obj = {
    a: 10,
    b: 20
}

function changedMe(obj){
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj)
}

changedMe(obj)
console.log(obj)
