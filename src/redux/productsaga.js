import { takeEvery, put } from 'redux-saga/effects'
import { Product_List, Set_Product_List } from './constant';

function* getProducts() {
    let data = yield fetch('http://localhost:3004/products');
    data = yield data.json();
    console.log("action is called", data)
    yield put({type: Set_Product_List, data})
}

function* productSaga()
{
 yield takeEvery(Product_List, getProducts)
}
export default productSaga;