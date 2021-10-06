       //---------*comparision operators*-------------//

console.log(5 == 5 );        // == return true when values are same otherwise false
console.log(5 =="5");        // In this case firstly convert str into number then it will true othewise false  
console.log(5 == "a");       // in this case return false because "a"  str is not convert into number.  
console.log(5 === 5);        // "===" comapre both value and data type then if same then it will return true.
console.log(5 === '5');      // false ccompare values n data type .
console.log(5 === "a");      // false  firstly compare values n data type

// ------------*Logical operators*------------//

// _____________AND (&&) operator -> if both operands true then it will retrun true otherwise false //


console.log(2>1 && 3<4);         // true && true : return -> true
console.log(8>7 && 9>10);       //  t && f: return-> false
console.log(5>9 && 4<8) ;      //  f && T: return -> false
console.log(2>6 && 34>60);    //   f && F : return-. false

// _____________OR (||) operator -> if either of operand true then it will retrun true otherwise  false//

   console.log(2>1 || 3<4)          // true && true : return -> true
   console.log(8>7 || 9>10);       //   t || f: return-> true
   console.log(5>9 || 4<8) ;      //  f || t : return -> true
   console.log(2>6 || 34>60);    //   f || f : return-. 
   

   // _____________NOT(!) operator -> it invert the operand.

