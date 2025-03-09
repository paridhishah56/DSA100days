// 'use strict';
// let prices = [7,1,3,6,4];
// let minvalue = prices[0];
// let maxprofit=0;

// for(let i = 1; i< prices.length; i++){
//     if(prices[i] < minvalue)
// {
//     minvalue = prices[i];
//     console.log(432453)
// }

// else{
//     let profit = prices[i] - minvalue;
//     if(profit > maxprofit){
//         maxprofit = profit;
//     }
// }

// }
// console.log(maxprofit);

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }

//   myCalculator(5, 5, myDisplayer);

//   const getData  = async ()=>{

//   const res =  await callAPi();
//   console.log(res);
//   }

//   new Promise(data, (resolve, reject)=>{
//    if(data ===5) reject("valeu");
//     resolve(console.log("hardik"));
//   });

//  const  p1 =  new Promise(data, (resolve, reject)=>{
//     if(data ===5) reject("valeu");
//      resolve(console.log("hardik"));
//    });

//    const  p2 =  new Promise(data, (resolve, reject)=>{
//     if(data ===5) reject("valeu");
//      resolve(console.log("hardik"));
//    });

//    const  p3 =  new Promise(data, (resolve, reject)=>{
//     if(data ===5) reject("valeu");
//      resolve(console.log("hardik"));
//    });

//   const [] =  Promise.race([p1,p2,p3]);

let obj1 = {
  a: "hardik shah",
  b: { // --->ababd adddress 
    c: 2,
    d: ["2","33"]
  },
};

// obj1.a = 10;
// console.log(obj1.a);//10

// let obj2 = { ...obj1 };// shallow copy

// obj2.a = 10;
// obj2.b.c = 20;
// console.log(obj1.a);
// console.log(obj1.b.c);


var abc = undefined;
console.log(abc);

var abc = 2453;
console.log(abc);

const strObj = JSON.stringify(obj1); 

console.log(strObj);

console.log(JSON.parse(strObj));


const arr = [23,5,6,7,4,7,4,7,3];

arr.splice(2, 3,0,0,0);

console.log(arr);

const unaryFunction = (a) =>{
     console.log(a + 10); // Add 10 to the given argument and display the value\
}

unaryFunction(10);


function one(){
    var a = 0;

    function two(){
        console.log(a);

    }
    return two;
}

const result =  one();

console.log(result);
console.log(result());