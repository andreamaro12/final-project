import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
    const balance = useSelector(state) =>{
        return{
          balance: state.balance,

        }
    })

    console.log(state)
    return (
        <div>
            <h1 className="is-size-1">
                Balance : <bold> $(state.balance) </bold>
            </h1>
        </div>
    )
}

export default Balance 