function addWithSubCharge(amount){
    let charge = 0;
    if (amount <= 10){
        charge = amount + 1
    }else{
         charge = amount + 2
    }
    return charge;

}

console.log(addWithSubCharge(30))
console.log(addWithSubCharge(5))

//function rotateArray(anArray)
// let rotateArr = []
// for(let i = 0; i < anArray.length; i++){
//     anArray[i] = rotateArr.length-1
//     for(let j = 1 ; j<anArray.length;i++){
//         anArray[i -1] = rotateArr[j]
//     }
//     return rotateArr;
// }

//function rotateArray(...numberArr){
    
//}


let numberArr = [1,2,3, 4]

let firstNumber = numberArr[0];

for(let i = 1; i < numberArr.length; i++){
    numberArr[i -1] = numberArr[i];
}

numberArr[numberArr.length - 1] = firstNumber;


console.log(numberArr)