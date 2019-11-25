const cart = {
    products: [],
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
            newState.products.push(action.payload)            
            
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