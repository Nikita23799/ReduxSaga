import { addToCart } from '../redux/action';
import { removeFromCart } from '../redux/action';
import { emptyCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { getProductList } from '../redux/productAction';
import { useSelector } from 'react-redux';
function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        console.log("Data in main component: ", state)
    })
    const product = {
        name: 'i Phone',
        category: 'mobile',
        price: 10000,
        color: 'red'
    }
    return (
        <>
            <div>
                <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(emptyCart(product))}>Empty Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(getProductList(product))}>Product List</button>
            </div>
        </>

    );
}

export default Main;