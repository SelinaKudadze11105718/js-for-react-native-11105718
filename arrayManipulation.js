//TASK 1
function processArray(arrNum){
    let newArr=Array();
    for (let arr of arrNum){
        if(arr%2 != 0){
            newArr.push(3*arr);
        }
        else{
            newArr.push(arr**2);
        }
    }
    return newArr;

}

//sample
console.log(processArray([1,2,3,4]));


//TASK 2
function formatArrayStrings(arrStrings,processedArray) {
    for(let i=0; i<arrStrings.length; i++) {
        if(processedArray[i]%2 === 0) {
            arrStrings[i] = arrStrings[i].toUpperCase();
    }else{
        arrStrings[i] = arrStrings[i].toLowerCase();
    }
    }
    return arrStrings;
}

//SAMPLE 2
let arrayStrings=['hi','good','bad'];
let processedNumbers=processArray([1,2,5]);

console.log(formatArrayStrings(arrayStrings,processedNumbers));

module.exports ={formatArrayStrings,processArray};





