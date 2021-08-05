function multiplyItemsInArray(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray[i] = array[i] * 2
        
    }
console.log(newArray)
}

arr = [1,2,3,4,5]
multiplyItemsInArray(arr)
console.log(multiplyItemsInArray)

function another(array){

    let newbooleanArray = []
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2== 0 ) {
        newbooleanArray[i] = true
    }else{
        newbooleanArray[i] = false
    }
    }
console.log(newbooleanArray)
}

arr = [1,2,3,4,5,6]
another(arr)
console.log(another)

function populateArray(personArray){
    let newPerson = {}
   for(let i = 0; i < personArray.length; i++){
        let fieldValue = ['funmbi','26','light','female','7']
        newPerson[personArray[i]]  = fieldValue[i] 
    }
return newPerson

}
personArray = ['name','age','complexion','gender','height']
console.log(populateArray(personArray))
const anArray = [1,2,3]
const [two,one,three] = anArray

console.log(one)
console.log(two)
console.log(three)

//in object you extract based on key
//in array you extract based on position

const anObject = {username: "Grace",age:26,complexion:'light'}
const {username,complexion,age} = anObject
console.log(username)
console.log(complexion)
console.log(age)

