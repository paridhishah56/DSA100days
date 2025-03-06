

const num1 = [1,2,4];

const nums2 = [1,3,4];

function mergeArray(arr1, arr2){

    const resultArr = [];
    let a = 0;
    let b = 0;

    while(a<=arr1.length-1){

        if(arr1[a]<=arr2[b]){
            resultArr.push(arr1[a]);
            a++;
        }
        else{
            resultArr.push(arr2[b]);
            b++;
        }
    }
    while(b<arr2.length){
        resultArr.push(arr2[b]);
        b++;
    }
    return resultArr;

}

console.log(mergeArray(num1, nums2));