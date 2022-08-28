import { cartData } from "./reducer"
import { Product } from "./productReducer"
import { combineReducers } from "redux"
export default combineReducers({cartData, Product})