var Person = function(name, age){
    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name)
        },
        father: {
            name: "Mr. KKK",
            printName: function(){
                console.log(this.name)
            },
        },
    };
};

var sakib = Person("sakib", 35);
sakib.printName();
sakib.father.printName();

var printName = function(){ // bind method
    console.log(`${this.name} is ${v1} ${v2} ${v3}`);
}

var sakib = {
    name: "sakib",
    age: "35",
};

var v1 = "Handsome";
var v2 = "All-Rounder";
var v3 = "Best Player";

var v = [v1, v2, v3];

var myFunc = printName.apply(sakib, v); //bind method
myFunc();

function Person(name, age){
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`);
}

var person = new Person("sakib", 35)