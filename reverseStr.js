function reversStr(str){
    var newStr = '';
      for(var i= str.length-1; i>=0; i--){
       newStr += str[i];
		}
    return newStr;
}
  var str ="I love JavaScript!";
 console.log(reversStr(str));
