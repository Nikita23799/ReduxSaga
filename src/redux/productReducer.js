import { Set_Product_List } from "./constant"
export const productData = (data = [], action) => {
    switch (action.type) {
        case Set_Product_List:
            console.log("Set Product List : ", action.data)
            return [...action.data]
        default:
            return data
    }
}