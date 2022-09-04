import { Add_To_Cart, Empty_Cart, Remove_From_Cart } from "./constant"



export const cartData = (data = [], action) => {
    switch (action.type) {
        case Add_To_Cart:
            console.log("Add to cart", action)
            return [action.data, ...data]
            case Remove_From_Cart:
                console.log("Remove cart called")
                data.length = data.length? data.length-1:[]
                return [...data]
                case Empty_Cart:
                    console.log("Empty Cart called")
                    data =[]
                    return [...data]
        default:
            console.log("Action Not Matched!!")
            return data
    }
}