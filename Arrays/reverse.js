// let arr = [1,4,3,2,6,5];

//  for(i = 1; i< arr.length; i++){
//     for(j = i-1; j<arr.length; j++){
//      console.log(arr);
//     }
//  }



function reverseString(s) {
    let res = [];
  
    // Traverse on s in backward direction
    // and add each character to the array
    for (let i = s.length - 1; i >= 0; i--) {
        res.push(s[i]);
    }
    return res.join('');
}

const s = "abdcfe";
console.log(reverseString(s));
