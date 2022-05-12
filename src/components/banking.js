import React from 'react'
import {useDispatch} from 'react-redux'

import { deposit , withdraw} from '../actions'

const Banking = () => {
    const [amount, setAmount]= useState(0)

    const dispatch = useDispatch()

    const handleChange = () => {
        setAmount(prevState => value )
    }

    const handleDeposit = (amount) => {
        dispatch(deposit(+amount))
    }

    const handlewithdraw = () => {
        dispatch(withdraw(-amount))
    }

    return (
        <div>
            <input 
            type="number" 
            className='input' 
            placeholder='amount' 
            value={amount}
            onChange={handleChange}
            />
            <button className="button is-success" onClick={handleDeposit}>Deposit</button>
            <button className="button is-unsuccess" onClick = {handlewithdrawal} Withdrawal</button>
        </div>
    )
}

export default Banking