const express = require('express');

const app = express();

app.get('/student', (req,res) => {
    res.send({
        name: 'Mika'
    })
});

app.get('/student/age', (req,res) => {
    res.send({
        age: 19
    })
;})

app.get('/student/email', (req,res) => {
    res.send({
        email: 'mika@mail.ru'
    })
});

app.listen(3000);
