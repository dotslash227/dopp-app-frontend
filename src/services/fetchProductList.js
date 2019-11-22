import axios from "axios";

export default async function fetchProductList(manufacturer, modality){
    console.log(manufacturer);
    let sub_query = '';
    if (manufacturer && !modality){
        sub_query = `
        query{
            products(manufacturer:${Number(manufacturer)}){
                id, name, mrp, discount, salePrice, mrp, manufacturer{name}, available
            }
        }
        `
    }
    if (modality && !manufacturer){
        sub_query = `
        query{
            products(category:${Number(modality)}){
                id, name, mrp, discount, salePrice, mrp, manufacturer{name}, available
            }
        }
        `
    }
    if (manufacturer && modality){
        sub_query = `
        query{
            products(category:${Number(modality)}, manufacturer:${Number(manufacturer)}){
                id, name, mrp, discount, salePrice, mrp, manufacturer{name}, available
            }
        }
        `
    }   
    try{
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8000/graphql',
            data: {"query":sub_query}
        })        
        return response;
    }
    catch(e){
        console.log(e);
        return null;
    }
}