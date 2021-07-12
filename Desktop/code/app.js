//1.
const fs = require('fs'); 
fs.writeFileSync('test', 'Mika, Basic It Centre');


//2.

fs.writeFile('test1', 'Mikk', 'utf-8', (err)=>{
    if(err){
        throw err;
    }   else {
        console.log('Ok')
    }
})
