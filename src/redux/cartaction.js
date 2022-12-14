import { Add_To_Cart, Empty_Cart, Remove_From_Cart } from "./constant"

export const addToCart = (data) => {
    console.log("Action Called!", data)
    return {
        type: Add_To_Cart,
        data
    }
}

export const removeToCart = (data) => {
    console.log("Remove Action Called!", data)
    return {
        type: Remove_From_Cart,
        data
    }
}

export const emptyCart = () => {
    console.log("Empty Action Called!")
    return {
        type: Empty_Cart,
    }
}