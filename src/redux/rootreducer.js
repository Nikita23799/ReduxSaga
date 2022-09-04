import { cartData } from "./reducer"
import { productData } from "./productreducer"
import { combineReducers } from "redux"
export default combineReducers({
    cartData,
    productData
})