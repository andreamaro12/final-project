const initialState= {
    isLoggedIn : false,
}


export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'Is_Logged_In':
            return{
               ... state,
               isLoggedIn: !state.isLoggedIn,
            }
            default: return state
    }
}