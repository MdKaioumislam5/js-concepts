const takeOrder = (customer, callback) =>{
    console.log(`take order for ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback) =>{
    console.log(`processing order for ${customer}`);

    setTimeout(() =>{
        console.log(`cooking complete`)
        console.log(`order processed for ${customer}`);
        callback(customer);
    }, 3000);
}

const completeOrder = (customer) =>{
    console.log(`complete order for ${customer}`);
}

takeOrder('customer 1', () =>{
    processOrder('customer 1', () =>{
        completeOrder('customer 1')
    })
})