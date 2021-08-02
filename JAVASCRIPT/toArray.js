function toArray(...num){
array = []
for(let i = 0; i < num.length; i++){
    array[i] = num[i];
  }
  return array
}  

let result = toArray(1,2,3,4,5)
document.write(result,"<br/>")


