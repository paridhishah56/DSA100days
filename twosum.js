// let twosum = function(num,target){
//     for(i = 0; i< num.length; i++){
//         for(j = 1 + 1; j<num.length; j++){
//             if(num[i] +num[j] == target){
//                 return[i,j];

//             }
//         }
//     }
// };

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) {
                return [i, j];
            }
        }
    }
 
    return [];
};
console.log(twoSum([3,5,2,6], 5));