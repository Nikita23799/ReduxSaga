import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { emptyCart, removeToCart } from '../redux/cartaction';
const Header = () => {
    const result = useSelector((state) => state.cartData);
    console.log("data in header", result);
    const dispatch = useDispatch();
    return (
        <div className="header">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
            </div>
            <div className="cart-btn-div">
                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
                <button onClick={() => dispatch(removeToCart(1))}>Remove to Cart</button>
            </div>
        </div>
    )
}

export default Header;