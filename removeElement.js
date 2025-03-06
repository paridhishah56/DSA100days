const nums = [3,2,2,3], val = 3;


const result =[];
let count = 0;


for(i = 0; i< nums.length; i++){
    if(nums[i] === val){
        count++;
    }
    else{
        result.push(nums[i]);
    } 
}
while(result.length < nums.length){
    result.push("_");
}

console.log(result);
console.log(count);
