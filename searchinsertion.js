let num = [1,3,5,6], target = 5;


// for(let i=0; i<num.length; i++){
//  if(num[i] == target){
//     console.log(i);
//  }
// }


function searchinsertion(num,target){
for(let i=0; i<num.length; i++){
    if(num[i] == target){
        return i;
}
}
}
 const res = searchinsertion(num,target);
console.log(res);

