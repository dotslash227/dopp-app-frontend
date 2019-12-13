const cart = {
    products: [
        {
            build: "SPHERICAL", 
            id: "1", 
            image:"http://localhost:8000/media/products/dt1.jpg", 
            name: "Dailies Total 1",
            quantity: 1, 
            total: 3080,
            power:{sph:-1.00}
        }
    ],
    count: 1,
    sub_total: 500
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