//This function for reverse string with iteration 
function reversStr(str){
    var newStr = '';
      for(var i= str.length-1; i>=0; i--){
       newStr += str[i];
		}
    return newStr;
}
  var str ="I love JavaScript!";
 console.log(reversStr(str));//!tpircSavaJ evol I
 
 //revers string using inbuilt function
 function reversStr1(str1){
   var newStr1 = str1.split('').reverse().join('');
   return newStr1;
}
  var str1 ="I love JavaScript!";
 console.log(reversStr1(str1));//!tpircSavaJ evol I
 
//with recursive function

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverse("!I love Javascript"));//!tpircsavaJ evol I
