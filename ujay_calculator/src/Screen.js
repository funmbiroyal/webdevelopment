import { useEffect,useState } from "react/cjs/react.development";
const Screen = ({equation,result})=>{
    const[prev,setPrev] = useState(result)
     
     useEffect(()=>{
         return () =>{
             setPrev(result)
         }
     },[result])

    return(
        <div className='screen'>
            <h1 style = {{fontSize: "40px", marginBottom:"3px",marginRight:"2rem" }}>{result}</h1>
            <p style = {{fontWeight: "bold",marginRight:"2rem", marginBottom: "unset", marginTop:"unset"}}>{equation}</p>
            <div style={{ marginLeft: "1rem" }}>

                <h5 style={{ textAlign: "left", marginBottom: "unset",marginTop:"unset"}}>Prev Calculation {prev}</h5>
            </div>
        </div>
    )
}

export default Screen;