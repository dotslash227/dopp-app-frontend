export function userLogin(user){
    return{
        type: 'LOGIN',
        payload: user
    }
}

export function anonymousLogin(){
    return{
        type: 'ANONYMOUS',
        payload: "anonymous"
    }
}