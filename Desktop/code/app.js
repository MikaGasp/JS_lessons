

function security(email, pass) {
    const regV = /@gmail.com/g;
    const result = email.match(regV);
    if(result){
        console.log(email);
    } else {
        console.log('sxala');
    }
    if (pass.length <= 15){
        const regE = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{3}/g
        const result1 = pass.match(regE);
        if(result1){
            console.log(pass);
        }else{
            console.log('sxala');
        }
    }
}


security('mik@gmail.com','Mik123$');
