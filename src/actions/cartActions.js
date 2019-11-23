export function addToCart(product){
    return{
        type: 'ADDTOCART',
        payload: product
    }
}