
// //1.
// const c = {
//     name: 'Mika '
// }

// function D(){}
// D.prototype = c;
// const e = new D;


// //2.
// const t = {
//     lastName: 'Gasparyan '
// }

// function F(){}
// F.prototype = t;
// const a = new F;


// //3.
// const b = {
//     age: 19
// }

// function U(){}
// U.prototype = b;
// const r = new U;



// //4. 

// const w = {
//     studing: ' studing Basic it centre '
// }
// function Q(){}
// Q.prototype = w;
// const p = new Q;



// //5.

// const j = {
//     activity: 'activity 4, '
// }

// function H(){}
// H.prototype = j;
// const k = new H;


// //6.
// const s = {
//     absence: 'absence 2, '
// }

// function Z(){}
// Z.prototype = s;
// const x = new Z;


// //7.
// const v = {
//     homework: 'Homework 3, '
// }

// function N(){}
// N.prototype = v;
// const m = new N;



// //8.
// const f1 = {
//     reprimand: 'reprimand 999, '
// }
// function W1(){}
// W1.prototype = f1;
// const a1 = new W1;


// //9.
// const b1 = {
//     vacation: 'vacation 2 week, '
// }
// function E1() {}
// E1.prototype = b1;
// const t1 = new E1;


// const y1 = {
//     phone: 'phone number - (094)457330.'
// }
// function L1(){}
// L1.prototype = y1;
// const m1 = new L1;


// console.log(e.name + a.lastName + r.age + p.studing + k.activity + x.absence + m.homework + a1.reprimand + t1.vacation + m1.phone);


//CLAS

1.
class Cars{
    constructor(brand, model, color, engine, power){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.power = power;
    }
    salon = [];
}

class Moto extends Cars{
    constructor(brand, model, color, engine, power){
        super();
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.power = power;
    }
}

const cars = new Cars('lada', 'niva', 'white', 1.7, 137);
//console.log(cars);
const moto = new Moto('suzuki', 'GS 250', 'Black', 2.0, 222);
moto.salon.push('black');

console.log(moto.salon);

//2.

class Person{
    constructor(achqer,mazer,ser){
        this.achqer = achqer;
        this.mazer = mazer;
        this.ser = ser;
    }
    name = [];

}


//3.


class Student extends Person{
    constructor(achqer,mazer,ser){
        super();
        this.achqer = achqer;
        this.mazer = mazer;
        this.ser = ser;
    }
    activity = [];
    email = [];
    phone = [];
}

const student = new Student('kapuyt','sev', 'txa');
student.name.push('Mika');
student.email.push('mika@ysu.am');
student.activity.push('[2,2,3]');
student.phone.push('(094)-45-73-30');
console.log(student.name);


//4.

class Worker extends Student{
    constructor(achqer,mazer,ser){
        super();
        this.achqer = achqer;
        this.mazer = mazer;
        this.ser = ser;
    }
    workTime = [];
    workSalary = [];
}

const worker = new Worker('kapuyt','sev', 'txa');
worker.name.push('Mika');
worker.activity.push("[5,6,7]");
worker.email.push('mika@mail.ru');
worker.workTime.push('9am-6pm');
worker.workSalary.push('420.000AMD');
worker.phone.push('(094)-45-73-30');
console.log(worker);

//5.
class Crediter extends Worker{
    constructor(achqer,mazer,ser){
        super();
        this.achqer = achqer;
        this.mazer = mazer;
        this.ser = ser;
    }
    credit = [];
}

const crediter = new Crediter('kapuyt','sev', 'txa');
crediter.name.push('Mika');
crediter.email.push('mika@mail.ru');
crediter.phone.push('(094)-45-73-30');
crediter.workSalary.push('420.000AMD');
crediter.credit.push('30.000AMD');
console.log(crediter);
