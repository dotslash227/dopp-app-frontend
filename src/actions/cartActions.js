export function addToCart(product){
    return{
        type: 'ADDTOCART',
        payload: product
    }
}

export function removeFromCart(productKey){
    return{
        type: 'REMOVEFROMCART',
        payload: productKey
    }
}