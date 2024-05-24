import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";
import {useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice";

const CartItem = ({name,price,
    defaultPrice, imageId})=>{
    return(
        <div className="flex m-4 p-2 items-center">
            <div className="w-12 ">
                <img className='w-full h-12 object-cover rounded-sm' src={IMG_CDN_URL+
imageId} alt="img" /> 
            </div>
            <div className="mx-4 text-lg">{name}</div>
            <div className="border-2 rounded-sm mx-2">
                <button className="p-1 text-base font-bold rounded-md m-1">+</button>
                <span>Q</span>
                <button className="p-1 text-base font-bold rounded-md m-1">-</button>
            </div>
            <div className="mx-4">{price?(price/100):(defaultPrice/100)}</div>
        </div>
    )
}

const Cart = ()=>{
    const cartItems = useSelector(store=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    // console.log(cartItems);
    return(
        <>
            <button className="bg-red-500 m-2 p-2" onClick={()=>handleClearCart()}>Clear Cart</button>
            <h1 className="text-red-500 text-3xl">Your Cart!!</h1>
            <div>
                {/* {cartItems.map(item=><div key={item.id}>{item.name+"  Rs."+(item.price/100)}</div>)} */}
                {cartItems.map(item=> <CartItem {...item} key={item.id}  />)}

            </div>
        </>
    )
}

export default Cart;