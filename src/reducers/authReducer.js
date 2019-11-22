const authState = {
    token: '',
    userId: '',
    userName: '',
    userEmail: '',
    userMobile: ''
}

const authReducer = (state=authState, action) =>{
    switch(action.type){
        case "LOGIN":{} break;
        case "LOGOUT": {} break;
        default:{
            state = {...state}
        }        
    }
    return state;
}

export {authReducer}