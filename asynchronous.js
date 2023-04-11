console.log('I am synchronous');

setTimeout(() =>{
    console.log('I am synchronous')
})

function saiName(name) {
    let result
    setTimeout(() =>{
        result = name
    }, 3000)
    return result
}

let output = saiName('Abdul Kaiyum')
console.log(output)

function saiName(name) {
    setTimeout(() =>{
        console.log(name)
    })
}

let output = saiName('Abdul Kaiyum')
console.log(output)
