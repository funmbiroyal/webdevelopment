import React,{useState} from "react"
const Practice = ()=>{
    const [number,setNumber] = useState(0);
    console.log("You have clicked " + number+ " time(s)")

    return (
       
        <div>
         <button style={{color:"green",backgroundColor:"rgb(233, 143, 34)"}}
          onClick = {()=>setNumber(number + 1)}>Click me</button>
          </div>
         
    )
}

 export default Practice
