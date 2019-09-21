export const checkUser = (loginSuccess, user) => {
    console.log('login', loginSuccess)
    return {type:'CHECK_LOGIN', loginSuccess, user}
}

export const signOut = () => {
    return{ type: 'SIGN_OUT'}
}