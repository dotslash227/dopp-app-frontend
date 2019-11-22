export function userLogin(user){
    return{
        type: 'LOGIN',
        payload: user
    }
}