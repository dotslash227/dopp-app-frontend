const cart = {
    products: [],
    count: 0,
    sub_total: 0
}

const cartReducer = (state=cart, action) =>{    
    switch(action.type){                
        case 'ADDTOCART':{            
            let {products, count, sub_total} = state;
            products.push(action.payload);
            count += action.payload.quantity;
            sub_total += action.payload.total
            return {...state, products, count, sub_total};
        }
        case 'REMOVEFROMCART':{                                    
            let {products, count, sub_total} = state;
            count -= products[action.payload].quantity;
            sub_total -= products[action.payload].total;            
            products.splice(action.payload, 1);
            return {...state, products, count, sub_total};
        }
        default:
            return {...state};
                
    }    
}

export {cartReducer}