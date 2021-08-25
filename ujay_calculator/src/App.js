//import logo from './logo.svg';
import './App.css';
import Screen from './Screen';
import NumberButton from './NumberButton';
import './Calculator.css';
import OperatorButton from './OperatorButton';
import { useState } from 'react';

const App = () =>{
  const [equation, setEquation] = useState("")
  const[result, setResult] = useState(0);

  const loadEquation = (numArray, operatorArray, item) =>{
    if (numArray.includes(item)){
      let data = equation + item
      setEquation(data)
      console.log(data)
    }else if(operatorArray.includes(item)){
      let data = equation + " " + item + " "
      setEquation(data)
      console.log(data)
    }
}

const loadResult=()=>{
  if(equation !== ""){
    let result = eval(equation)
    setResult(result)
  }else{
    setResult(0)
  }
}

const clearResult=()=>{
  setEquation("")
  setResult(0)
}

  return (
   <div className='calculatorContainer'> 
     <Screen equation = {equation}  result ={result} />
     <div className='buttonContainer'>
        <NumberButton loadEquation ={loadEquation} />
        <OperatorButton loadEquation={loadEquation} loadResult={loadResult} clearResult ={clearResult} />
     </div>
   </div>
  );
}

export default App;
