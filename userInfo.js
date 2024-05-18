//TASK 3
const { formatArrayStrings, processArray } = require("./arrayManipulation");


function createUserProfiles(arrNames,modifiedNames) {
    let objNames=[];
    for(let i=0;i<arrNames.length;i++){
        objNames.push({
            originalName:arrNames[i],
            modifiedName:modifiedNames[i],
            id:i+1
        });
    }

    return objNames;

}

//SAMPLE 3
let originalName=['Selina','abena','Kudadze','enyonam','Samson'];
let originalName2=originalName.slice();
let modifiedName=formatArrayStrings(originalName,processArray([1,2,3,6,7]))
console.log(createUserProfiles(originalName2,modifiedName));