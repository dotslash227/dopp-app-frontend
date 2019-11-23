const cart = {
    produdct: [],
    count: '',
    sub_total: ''
}

const cartReducer = (state, action) =>{
    switch(action.type){
        case 'ADDTOCART':
            state = {...state}
            break;
        case 'REMOVEFROMCART':
            state = {...state}
            break;
        default:
            state = {...state}
                
    }
    return state;
}

export {cartReducer}