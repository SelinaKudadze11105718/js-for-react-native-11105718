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



