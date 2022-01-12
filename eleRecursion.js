function minRecursion(arr, n)
{
    if (n == 1){
         return arr[0];
    }
     else{
         return Math.min(arr[n - 1],
        minRecursion(arr, n - 1));
     }
}

function maxRecursion(arr, n)
{
    if (n == 1){
         return arr[0];
    }
     else{
    return Math.max(arr[n - 1],
        maxRecursion(arr, n - 1));     
     }
      
}

let arr = [-5,-4,-3,-2-1,0,1,2,3,4,5];
let n = arr.length;
console.log("Min Element is : " + minRecursion(arr, n));
console.log("Max Element is : "+ maxRecursion(arr, n));