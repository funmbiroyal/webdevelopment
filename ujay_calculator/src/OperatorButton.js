const OperatorButton = ({loadEquation,loadResult,clearResult})=>{
    const operatorArray = ['+','-','/','*','%','.']
    const numArray = ['1','2','3','4','5','6','7','8','9','0']
    const equateArray =['=']
    return(
        <div>
          {operatorArray.map((operator,index) => <button className='numBtn'
          key={index} onClick={()=>loadEquation(numArray,operatorArray,operator)}
          >{operator}</button>)}
          <button className='equateButton' onClick={clearResult}>CE</button>
          <button className='equateButton' onClick={loadResult}>{equateArray[0]}</button>
        </div>
    )
}
 export default OperatorButton