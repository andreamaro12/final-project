import React from 'react'

const AccountType = () => {

    const isSavingsAccount =useSelector(state => state.isSavingsAccount)

    console.log(state)
    return(
        <div>
            <h1 className >
                { isSavingsAccount ? 'Savings Account': 'CHecking Account'}
                centered
                color = blue
            </h1>
        </div>
    )
}

export default AccountType