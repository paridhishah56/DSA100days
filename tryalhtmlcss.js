let favcolr = "brown, blue ,black, red" ;

let arrorcolor = favcolr.split(',');

console.log(arrorcolor);


for (let i = 0; i <=10; i++){
    console.log("run the task", i);
}



//arrow function::

let invitation = name => `welcome to ${name}  home `

console.log(invitation("paridhi's"));


//object inside arrays

let blocklist = [{username: "john", reson:"abusive content"}, { userName: "sweety", reson: " copyright" }];

console.log(blocklist);


for(i = 0; i <blocklist.length;i++){
    console.log(blocklist[i]);
}


//for in loop

let car  = {
    model:2022,
    color:"black",
    company:"toyota"
}
console.log(car);
for(let key in car){
    console.log(key);
}