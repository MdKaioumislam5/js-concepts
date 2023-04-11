// constructor function
function Person(name, age){
    //parent class
    this.name = name;
    this.age = age;
}

function Cricketer(name, age, type, country){
    //sub class
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eit: function(){
        console.log(`${this.name} eating`);
    },
};

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;
Cricketer.prototype.play = function(){
    console.log(`${this.name} playing`);
}

let Tamim = new Cricketer('Tamim', 35, 'All Rounder', 'Bangladesh');
console.log(Tamim.type);


// class function
class Person{
    //parent class  
    constructor(name, age){
        this.name = name; //poperty
        this.age = age;
    }

    eit(){ // method
        console.log(`${this.name} eating`)
    }

    play(){
        console.log(`${this.name} playing`)
    }

    get setName(){ // getter (প্রোপারটি হিসেবে অ্যাক্সস করতে হবে এবং মেথড এর মত কাজ করবে)
        return this.name;
    }
    // console.log(sakib.setName)

    set setName(name){ // setter
         this.name = name;
    }
    // sakib.setName = 'Tamim'
    // console.log(sakib.name)

    static isEqual(){
        console.log(`I am static method or direct method`)
    }
    // Person.isEqual()  (স্টাটিক মেথড এর ক্ষেত্রে সরাসরি ক্লাস নেম ব্যবহার করতে হয় এবং এভাবে কল করতে হয়)
}

//sub class
class Cricketer extends Person{ 
    constructor(name, age, type, country){
        super(name, age)
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;

    }
    play(){ // polymorphism
        super.play();
        console.log(`${this.name} playing cricket`) //(প্যারেন্ট ক্লাস এর মেথড কে মোডিফাই করাকে পলিমরফিজম বলা হয়)
    }
}

let sakib = new Cricketer('sakib', 35, 'All Rounder', 'Bangladesh');
console.log(sakib);
