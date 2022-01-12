function factor(n){
    var res = 1;
    for (let i =2; i<=n; i++)
    res *= i;
    return res;
}
var num = 10;
console.log("Factorial of" + num + "is" + factor(10));