
//1.
const c = {
    name: 'Mika '
}

function D(){}
D.prototype = c;
const e = new D;


//2.
const t = {
    lastName: 'Gasparyan '
}

function F(){}
F.prototype = t;
const a = new F;


//3.
const b = {
    age: 19
}

function U(){}
U.prototype = b;
const r = new U;



//4. 

const w = {
    studing: ' studing Basic it centre '
}
function Q(){}
Q.prototype = w;
const p = new Q;



//5.

const j = {
    activity: 'activity 4, '
}

function H(){}
H.prototype = j;
const k = new H;


//6.
const s = {
    absence: 'absence 2, '
}

function Z(){}
Z.prototype = s;
const x = new Z;


//7.
const v = {
    homework: 'Homework 3, '
}

function N(){}
N.prototype = v;
const m = new N;



//8.
const f1 = {
    reprimand: 'reprimand 999, '
}
function W1(){}
W1.prototype = f1;
const a1 = new W1;


//9.
const b1 = {
    vacation: 'vacation 2 week, '
}
function E1() {}
E1.prototype = b1;
const t1 = new E1;


const y1 = {
    phone: 'phone number - (094)457330.'
}
function L1(){}
L1.prototype = y1;
const m1 = new L1;


console.log(e.name + a.lastName + r.age + p.studing + k.activity + x.absence + m.homework + a1.reprimand + t1.vacation + m1.phone);
