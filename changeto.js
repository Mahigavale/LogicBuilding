/*
 i/p => js is beautiful language.
 o/p=>Js Is BEAUTIFUL LANGUAGE.
*/
let str='js is beautiful language.'
//seperate the string into array.
let arr1=str.split(' ');
console.log(arr1);
arr2=arr1.splice(0,2);
console.log(arr2);
console.log(arr1);
let finalhalf=arr1.join(' ');
console.log(finalhalf.toUpperCase());
let firsthalf=arr2.join(' ');
console.log(firsthalf);
let arr4=firsthalf.split('');
console.log(arr4);
arr4[0]='J';
arr4[3]="I";
console.log(arr4);
firsthalf=arr4.join('');
console.log(firsthalf);
let final_result=firsthalf+" "+finalhalf;
console.log(final_result);
