const initialState = {
    balance: 0,
    interest: 0,
    isSavingsAccount: false,
}

export const bankingReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'Deposit':
           return { ... state, balance: state.balance + action.payload }
        case 'Withdraw'
            return { ... state, balance: state.balance - action.payload }
        default:
            return state

    }
}