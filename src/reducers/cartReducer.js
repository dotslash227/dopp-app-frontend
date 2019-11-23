const cart = {
    products: {},
    count: 0,
    sub_total: 0
}

const cartReducer = (state=cart, action) =>{
    let newState = {};
    switch(action.type){        
        case 'ADDTOCART':
            newState = state;
            newState.count = newState.count + action.payload.quantity
            newState.sub_total = newState.sub_total + action.payload.total
            newState.products[action.payload.id] = action.payload

            // state = {
            //     ...state, count:state.count + action.payload.quantity, 
            //     sub_total: state.sub_total + action.payload.total                
            // };
            
            break;
        case 'REMOVEFROMCART':
            newState = {...state}
            break;
        default:
            newState = {...state}
                
    }
    return newState;
}

export {cartReducer}