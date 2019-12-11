const authState = {
    token: 'sample-token',
    id: undefined,
    username: undefined,
    email: undefined,
    mobile: undefined
}

const authReducer = (state=authState, action) =>{
    switch(action.type){
        case "LOGIN":            
            state = {
                ...state, token: action.payload.token,
                id: action.payload.id, username: action.payload.username,
                email: action.payload.email, mobile: action.payload.mobile
            };
            break;         
        case "LOGOUT":
            state = {
                token: '', id: '', username: '', email: '', mobile: ''
            };
            break;        
    }
    return state;
}

export {authReducer};