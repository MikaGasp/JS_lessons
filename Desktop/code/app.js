const express = require('express');

const app = express();

app.get('/student/1', (req,res) => {
    res.send({
        name: 'Mika'
    })
});

app.get('/student/2', (req,res) => {
    res.send({
        name: 'Edgar'
    })
});

app.get('/student/3', (req,res) => {
    res.send({
        name: 'Hasmik'
    })
});

app.get('/student/4', (req,res) => {
    res.send({
        name: 'Eduard'
    })
});

app.get('/students', (req,res) => {
    res.send({
        names: ['Mika', 'Edgar', 'Hasmik', 'Eduard']
    })
})

app.get('/student/age/1', (req,res) => {
    res.send({
        age: 19
    })
});

app.get('/student/age/2', (req,res) => {
    res.send({
        age: 27
    })
});

app.get('/student/age/3', (req,res) => {
    res.send({
        age: 28
    })
});

app.get('/student/age/4', (req,res) => {
    res.send({
        age: 18
    })
});

app.get('/student/email/1', (req,res) => {
    res.send({
        email: 'mika@mail.ru'
    })
});

app.get('/student/email/2', (req,res) => {
    res.send({
        email: 'edgar@mail.ru'
    })
});

app.get('/student/email/3', (req,res) => {
    res.send({
        email: 'Hasmik@mail.ru'
    })
});

app.get('/student/email/4', (req,res) => {
    res.send({
        email: 'eduard@mail.ru'
    })
});

app.get('/student/emails', (req,res) => {
    res.send({
        email: ['mika@mail.ru', 'edgar@mail.ru', 'hasmik@mail.ru', 'eduard@mail.ru']
    })
});

app.get('/student/activity/1', (req,res) => {
    res.send({
        activity: [3, 2, 3, 2, 2]
    })
})

app.get('/student/activity/2', (req,res) => {
    res.send({
        activity: [9, 9, 8, 9, 9]
    })
})

app.get('/student/activity/3', (req,res) => {
    res.send({
        activity: [9, 9, 9, 9, 8]
    })
})

app.get('/student/activity/4', (req,res) => {
    res.send({
        activity: [2, 2, 3, 3, 2]
    })
})

app.listen(3000);
