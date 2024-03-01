/*
i/p => unknown.
o/p => 'true' if the given value is present in that object.
*/
let obj={
    name:'mahesh',
    mobile:'123456',
    city:'pune'
}

//check the object for the value 'mahesh' return,
//boolean accordingly.
let arr2=Object.values(obj);

//mistake prone: format for the values function.
// Object.values(object_argument_here);
console.log(arr2);

if(arr2.includes('vatan'))
{
    console.log("True");
}
else{
    console.log("false");
}