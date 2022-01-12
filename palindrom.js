// function Palindrome_recursion(str , s,e){
//     if((str.charAt(s)) != (str.CharAt(e))){
//         return false;
//     }
//     if(s < e + 1){
//         return Palindrome_recursion(str, S + 1, e - 1);
//     }
//     {
//         return True;
//     }
// }

// function Palindrome( str) {
//     var n = str.length;
//     if (n == 0) {
//         return True;
//     }
//     {
//     return Palindrome_recursion(str, 0, n - 1);
//     }
// }
// var str = "Maharashtra";

// if (Palindrome_recursion(str)){
//         console.log("String is Palindrome");
// }
// else{
//         console.log("String is Not Palindrome");
//     }


    function isPalRec( str , s , e) {
        if ((str.charAt(s)) != (str.charAt(e))) {
            return false;
        }
        if (s < e + 1){
            return isPalRec(str, s + 1, e - 1);
        }
        {
        return true;
        }
    }
    
    function isPalindrome( str) {
        var n = str.length;
        if (n == 0) {
            return true;
        }
        {
        return isPalRec(str, 0, n - 1);
        }
    }
    var str = "malayalam";
    
    if (isPalindrome(str)){
            console.log("String is Palindrome");
    }
    else{
            console.log("String is Not Palindrome");
        }