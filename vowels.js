/*
i/p=> I eat pineapple.

o/p=> J FBt pJnFBpplB.

hint: replace the vowel with the adjacent consonant.
*/

let str=" i eat pineapple.";
let arr=str.split('');
//console.log(arr);

for(let v=0;v<arr.length;v++)
{
    if(arr[v]=='a')
    {
        arr[v]='B';
    }
    else if(arr[v]=='e')
    {
        arr[v]='F';
    }
    else if(arr[v]=='i')
    {
        arr[v]=='J';
    }
}
console.log("Input String:",str);
console.log("Output string:",arr.join(''));
