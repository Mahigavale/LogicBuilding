/*
i/p =>[1,2,3,4,5,6,7,8,9,10,,,,,,26]
o/p =>[a,b,c,d....................Z]
if number is greater than 26 then the o/p must be number is
greater than 26.
*/

let numbers=[1,3,5,6,7,8,17,21];

let letters='abcdefghijklmnopqrstuvwxyz';
let arrl=letters.split('');
//console.log(arrl);
//here we want tp print the corresponding letter. so 
//lets try foreach.

function numvalue(n)
{
    let c=n-1;
    return (arrl[c]);
}

//numbers.forEach(numvalue);
//here we get the o/p but in the form of the single
//elements. so try to convert them to array of letters.
let corespondance=numbers.map(numvalue);


console.log("array of numbers:",numbers);
console.log("corresponding letters",corespondance);