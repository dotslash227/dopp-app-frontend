const address = {
    firstName: '',
    lastName: '',
    add1: '',
    add2: '',
    pincode:'',
    city: '',
    locality: '',
    landmark: ''
}

const addressReducer = (state=address, action) =>{
    switch(action.type){
        case 'ADD':
            state = {...action.payload}            
            break;
        default:
            state = {...state}
            break;
    }
    return state;
}

export {addressReducer};