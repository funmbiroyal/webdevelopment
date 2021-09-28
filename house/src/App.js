import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Balance from './Balance'
import House from './House'
import Loader from './Loader'
import { updatePillars } from './redux/actions/action'
import { useDispatch } from 'react-redux'
import './House.css'



const App = () => {
    const [balance,setBalance] = useState(1000000)
    const [loading,setLoading] = useState(true)
    const [pillar,setPillar] = useState(0)

    const dispatch = useDispatch()

    useEffect(
        ()=>{
            axios.get('http://localhost:5000/pillar')
            .then((response)=>{
                let pillarPrice = response.data.price
                let pillarAmount = balance / pillarPrice
                setPillar(pillarAmount)
                dispatch(updatePillars(pillarAmount))
            })
            .catch((error)=>console.error(error))
            .finally(()=>setLoading(false))
        },[balance]
    )

    return (
        <div>
            <Balance setBalance = {setBalance} balance = {balance} />
            {loading ? <Loader /> : <House pillar = {pillar} /> }
        
        </div>
    )
}

export default App
