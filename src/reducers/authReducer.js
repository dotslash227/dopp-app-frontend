const authState = {
    firstName: '',
    lastName: '',
    mobile: '',
    token:'123'
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
        default:
            state = {...state}      
            break;
    }
    return state;
}

export {authReducer};