const authState = {
    firstName: '',
    lastName: '',
    mobile: '',
    token:''
}

const authReducer = (state=authState, action) =>{
    switch(action.type){
        case "LOGIN":            
            state = {
                ...state
            };
            break;         
        case "LOGOUT":
            state = {
                firstName: '', lastName: '', mobile:'', token:''
            };
            break; 
        case "ANONYMOUS":
            state = {...state, token:action.payload}
        default:
            state = {...state}      
            break;
    }
    return state;
}

export {authReducer};