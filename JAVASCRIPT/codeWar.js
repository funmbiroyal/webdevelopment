function findIndicesOfTwoAddedNumber(array,number){
    const newArray = []
    for(let i = 0; i < array.length; i++ ){
        for(let j = 0; j < array.length; j++){
            if(array[i]+array[j]== number){
               newArray[0] = i;
               newArray[1] = j;
            }
        }
    }
    return newArray;
}
let array = [1,2,3,4,5];
let value = 3;
let result = findIndicesOfTwoAddedNumber(array,value)
document.write(result,"<br/>")
console.log(findIndicesOfTwoAddedNumber)