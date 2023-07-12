// length
let name2 = "Deepak";
console.log(name2);
console.log('length of string name is :', name2.length);
//toLowerCase
console.log("String into lower case is:" + name2.toLowerCase());
// toUpperCase
console.log("string to upperCase:" + name2.toUpperCase());
// charAt
console.log("charcter at index 4 is:" + name2.charAt(5));
console.log("does string a includes r:" + name2.includes('D'));
// concat
// console.log('concatenation os string :' + name2.concat(Deepak));
// type_conversion
let num = 2004;
console.log(String(num));
let str = "deepak ";
let str2 = "kumar";

console.log(str + str2);
// comapre String
let str3 = "Dee ak";
if ("Deepak" == str3) {
    console.log("equal");
} else {
    console.log("not equal");
}
// concat
let str4 = "Deepak";
let str5 = "Kumar";
let str6 = str4.concat(" ", str5);
console.log(str6);
// Substring
let str7 = "this is javaScript.it is a light weight.";
let substrin = str7.substr(8, 19);
console.log(substrin);
let substring = str7.substring(8, 18);
console.log(substring);
//  position index of
let str8 = " Deepak    is agoodboy  ";
let position = str8.indexOf('iss');
console.log(position);
//  checking last indexOf
let position1 = str8.lastIndexOf('a');
console.log(position1);
// removing White space
let trim = "   Deepak is a very good boy";
let trim2 = str8.trimStart();
let trim3 = str8.trimEnd();
console.log(trim);
console.log(trim3);
// replace function
let str1 = "Deepak is a smart boy";
let A = str1.replace('smart','best');
console.log(A);
// include method  



