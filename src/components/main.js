import { addToCart} from '../redux/cartaction';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productaction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log("data in main component", data);

  useEffect(() => {
    dispatch(productList())
  }, [])
  return (
    <div>
     
      <div className='product-container'>
        {
        data?.map((item, keyIndex) => <div className='product-item' key={keyIndex}>
            <img className='product-img' src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
