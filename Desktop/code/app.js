let string = ')';
let count = 0;

for( let i = 0; i < string.length; ++i){
    if(string[i] == '(' ||string[i] ==  '{' ||string[i] ==  '['){
        count++;
    }
    if(string[i] == ')' ||string[i] ==  '}' ||string[i] ==  ']'){
        count--;
    }
    if(count < 0){ 
        console.log(false);
    }
}

if(count!= 0){
    console.log(false);
}
else{
    console.log(true);
}

console.log(count);
