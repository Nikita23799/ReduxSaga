import { Product_List } from "./constant"

export const productList = () => {
    console.log("Product List Here !!")
    return {
        type: Product_List,
    }
}