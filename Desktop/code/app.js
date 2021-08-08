const express = require('express');
const mongoose = require('mongoose');
//const exphbs = require('express-handlebars');

const PORT = 3000

const app = express(); 


function start(){  
    try{
         mongoose.connect('mongodb+srv://mika:mika123@cluster0.ffkp0.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log('Server has been started...');
        })
    } catch(e){
        console.log(e);
    }
}

start();

const db = mongoose.connection;
db.once('open', () =>{
    console.log('Kpav');
});

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const user1 = mongoose.model(
    'myUser', userSchema
)

app.use(express.json());

app.post('/users', (req, res) =>{

    const user = new user1({
        name: req.body.name,
        age: req.body.age
    });

    try{
        user.save()
        }
        
        catch(e){
            console.log(e);
        }
        

        res.send(user);
})


app.get('/users', (req, res) =>{
    user1.find({}, (err, users) =>{
        if(err){
            throw new Error(err.name);
        } 
        res.send(users)});
})

app.delete('/users/:userId', (req, res) =>{
    user1.findOneAndRemove({id:req.params.userId})
    res.send('deleted');
})
