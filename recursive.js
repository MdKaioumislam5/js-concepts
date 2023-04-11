function saiHi(n){
    if(n === 0){
        return
    }
    console.log('Hi, I am calling')
    saiHi(n - 1)

}
saiHi(10)