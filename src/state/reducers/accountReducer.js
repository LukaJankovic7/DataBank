export const DEFAULT_STATE = {
    user: 'default',
    loginSuccess: false
}



export const accountReducer = (state=DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'CHECK_LOGIN':
            {
                if (action.loginSuccess) return ({...state, loginSuccess: action.loginSuccess, user: action.user})
                break;
            }
        case 'SIGN_OUT' :
            return ({...state, loginSuccess: false, user: 'default'})
        default : return state
    }
}