
// 13. Roman to Integer
var romanToInt = function(s) {
    // STORE THE INTEGERS AND THE ROMAN VALUES IN AN A romanNumbers object
   const romanNumbers = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
   };

   let results = 0;
   for(let i = 0; i < s.length; i++){
    if(romanNumbers[s[i]] < romanNumbers[s[i+1]]){
            results -= romanNumbers[s[i]];
        } else {
            results += romanNumbers[s[i]];
        }
   }
   return results;
};

console.log(romanToInt("III")); /// RETURNS 3
console.log(romanToInt("LVIII")); /// RETURNS 58
console.log(romanToInt("LVIII")); /// RETURNS 1994