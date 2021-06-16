// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// function binar (arr, elem){
//     for (let n = 0; n < arr.length-1; ++n){
//         for (let i = 0; arr.length / 2; ++i){
//             if(arr[i] === elem){
//                 return ++i;
//         }
//     }
// }
// }
// console.log(binar(arr, 16));

// var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// function binar(arr, elem){
//   for( let i = 0; i < arr.length; ++i){
//     for ( let n=0; arr.length / 2; ++n){
//     if(arr[i] === elem){
//       return i;
//     }
//     }
//   }
// }
// console.log(binar(arr, 6)); 


// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        
// console.log(arr);
//console.log(binar(arr));


// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// function search (arr, target){
//         let left = 0;
//         let right = arr.length - 1;
//         let mid;

//         while (left <= right){

//                 if (target === arr[mid]){
//                         return mid;
//                 } else if (target < arr[mid]){
//                         right = mid - 1;
//                 } else {
//                         left = mid + 1;
//                 }
//         }
//         return -1;
// }
// console.log(search(arr, 5));

// var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// function search (arr, target){
//         let left = 0;
//         let right = arr.length - 1;
//         let mid;

//         while (left <= right){
//                 mid = Math.round( ( right-left)/2) + left;
//                 if (target === arr[mid]){
//                         return mid;
//                 } else if (target < arr[mid]){
//                         right = mid - 1;
//                 } else {
//                         left = mid + 1;
//                 }
//         }
//         return -1;
// }
// console.log(search(array, 2));

// const arr = [1,20,50,36,-1,20,44];
// let index;
// let index1;
// let middle = arr[0];
// let max = arr[0];

// for(let i = 0; i < arr.length; ++i){
//         if(arr[i] > max){
//                 max = arr[i];
//                 index = i;
//         }
// }
        
// console.log(index);


// for(let n = 0; n < arr.length; ++n){
//         if(max > middle){
//                 middle = arr[i];
//                 index1 = i;
//         }
// }

// console.log(index1);
// var list = [34, 1, 529, -78, 89.7, 1243, 2000, 300000]; 
// function maxElement (list){
//     let max;
//     let min = list[0];
//     for(let i = 0; i < list.length; i++){
//         if((list[i]) < min){
//             min = list[i]; 
//         } else {
//             max = list[i];
//         }
//     }
//     return max;
// }

// console.log(maxElement(list));


// const arr = [1,20,50,36,-1,20,-2, 49, 51, 100, 101];


// let max = arr[0];
// let middle;
// let index = arr[0];
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] > max) {
//         middle = max;
//         max = arr[i];
//     } else if (arr[i] > middle) {
//         middle = arr[i];
//         index = i;
//         console.log(index);
//     }
   
    
// }

// console.log(index);

// const arr = [1,20,50,36,-1,20,-2, 49, 51, 100, 101];
// let index;
// let max = arr[0];
// for(let i = 0; i < arr.length; ++i){
//         if(arr[i] > max){
//                 max = arr[i];
//                 index = i;
//         }
// }

// console.log(index);

// for (let n = 0; n < arr.length; ++n){
//         if (middle === arr[n]){
//           console.log(n);
//         }
//       };


      




// let arr = [2022, 500, 1239, 520, -1, 515, 1240, 2];
// let max1 = arr[0];
// let max2 = arr[1];
// for (let i = 1; i < arr.length; ++i) {
//   if(arr[i] > max1){
//     max2 = max1;
//     max1 = arr[i];
//   } else
//   if(arr[i] > max2){
//     max2 = arr[i];
//     index = i;
//   }
// }
// for (let j = 0; j < arr.length; ++j){
//   if (max2 === arr[j]){
//     console.log(j);
//   }
// };

// let arr = [];
// function stack(myArr, action, elem){
//     if (elem === 'undefined' || action === 'get'){
//       if(myArr.length === 0){
//         return 'empty stack';
//       } else
//       return myArr.pop();
//     }
//     if(action === 'set' && elem !== 'undefined'){
//       myArr.push(elem);
//       return myArr;
//     }
// }


// let arr = [];
// function queue(myArr, action, elem){
//     if (elem === 'undefined' || action === 'get'){
//       if(myArr.length === 0){
//         return 'empty queue';
//       } else
//       return myArr.shift();
//     }
//     if(action === 'set' && elem !== 'undefined'){
//       myArr.push(elem);
//       return myArr;
//     }
// }
//   console.log(queue(arr, 'set', 15));
//   console.log(queue(arr, 'set', 16));
//   console.log(queue(arr, 'set', 17));
//   console.log(queue(arr, 'set', 18));
//   console.log(queue(arr, 'get', 24));
//   console.log(queue(arr, 'get'));
//   console.log(queue(arr, 'get'));
//   console.log(queue(arr, 'get'));
//   console.log(queue(arr, 'get'));


// let mika = 0;
// function foo (){
//   let mika = 0;
//   mika += 1;
  
// }
// console.log(mika);


// var arr = [5,20];
// function foo(array)
// {
//  arr[0]=arr[0]+arr[1]
// arr[1]=arr[0]-arr[1]
// arr[0]=arr[0]-arr[1]
// }
// foo(arr);
// console.log(arr);

// var myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
//  function foo(array){
//   for (let n = 0; n < array.length-1; ++n){
//     for (let i = 0; i < array.length - 1; ++i){
//       if  (array[i] < array[i + 1]){
//         let temp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//       }
//     }
//   }
//   return array;
// }
// console.log(foo(myArray));

// var myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// function mika(array){
//   for( let n = 0; n < array.length-1;++n){
//     for( let i = 0; i < array.length -1;++i){
//       if ( array[i] < array[i+1]){
//         let marish = array[i];
//         array[i] = array[i +1];
//         array[i + 1] = marish
//       }
//     }
//   }
// }
// console.log(mika(myArray));


// var stack = [];
// stack.push(1,2,3,4);
// console.log(stack);
// stack.pop();
// console.log(stack);
// stack.unshift(12);
// console.log(stack);
// stack.shift();
// console.log(stack);
// stack.push(999);
// console.log(stack);

// let i=0;
// console.log(i++ + 3)

// for(i = 0 ; i< 10; ++i){};
// console.log(i);


// const arr = [10, 20, 30 ,40, 50];
//  arr.forEach((elem, index, innerArr) =>{
//    console.log('Elem number ', index);
//    console.log(elem +=5);
//    console.log(innerArr);
//  })

// function filter (myArr){
//   const newArr = [];
//   for(let i = 0; i < myArr.length; i++){
//     newArr.push(innerFilter(myArr[i], i, myArr));
//   }
//    function innerFilter(elem, index, innerArr){
//      console.log('Elem number', index);
//      console.log(elem);
//      if (elem < 40){
//        return elem;
//      }
//    }
//    return newArr;
// }

// const result = filter(arr);



// var name = 'Arman';
// function foo(){
//   var myName = name;
// }
// console.log(this.myName);
// console.log(this.myName);
// console.log(this.myName);

// for(let i = 4; i<= 19; i=i+3){
//   console.log(i);
// };

// for( let i = 2021; i >= 1996; i--){
//   console.log(i);
// }


// var color = "kanach";
// function foo(){
// if(color === "kanach"){
//     console.log("Karas qshes");
// } else if ( color === "dexin"){
//     console.log("kayni hesa kpoxi");
// } else{
//     console.log("kayni");
// }
// }

// foo(); 