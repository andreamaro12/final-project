export const deposit = (amount) => {
    return {
        type : "Deposit",
        payload: amount,
    }

}

export const withdraw = amount => {
    return{
       type: "Withdraw",
       payload: amount,
    }
}

export const toggleLogIn = () => {
    return {
        type: 'Is_Logged_In',
    }
}