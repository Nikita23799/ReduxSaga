import { type } from '@testing-library/user-event/dist/type';
import {takeEvery, put} from 'redux-saga/effects'
import { Add_To_Cart, Product_List, Set_Product_List } from './constant';
function* getProduct(){
    let data = yield fetch("http://localhost:3200/products")
    data = yield data.json()
    yield put({type:Set_Product_List, data})
}
function* testCart(){
    console.log("Test Card Call API Here!")
 }
function* productSaga()
{
 yield takeEvery(Product_List, getProduct)
 yield takeEvery(Add_To_Cart, testCart)
}
export default productSaga;