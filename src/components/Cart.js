import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../config";
import {useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice";
import React, { useEffect, useState } from "react";
import imgSrc from "../assests/img/cartEmpty.jpg";

const CartItem = ({name,price,
    defaultPrice, imageId})=>{
        const price_in_rupees = price?(price/100):(defaultPrice/100);
        
    return(
        <div className="flex m-4 p-2 items-center">
            <div className="w-12 ">
                <img className='w-full h-12 object-cover rounded-sm' src={IMG_CDN_URL+
imageId} alt="img" /> 
            </div>
            <div className="mx-4 text-lg w-52 truncate">{name}</div>
            <div className="border-2 rounded-sm mx-2">
                <button className="p-1 text-base font-bold rounded-md m-1">-</button>
                <span>1</span>
                <button className="p-1 text-base font-bold rounded-md m-1">+</button>
            </div>
            <div className="mx-4">{price_in_rupees}</div>
        </div>
    )
}

const Cart = ()=>{
    const cartItems = useSelector(store=>store.cart.items);
    const [useTotalCost,setTotalCost] = useState(0);
    const dispatch = useDispatch();
    
    const handleClearCart = ()=>{
        dispatch(clearCart());
        setTotalCost(0);
    }

    useEffect(()=>{
        let cost = 0;
        cartItems.map((item)=>{
            const price = (item.price)?(item.price/100):(item.defaultPrice/100);
            cost +=price;
        })
        setTotalCost(cost.toFixed(2));
    },[])
    // console.log(cartItems);
    return(cartItems.length === 0)?(
        <>
            <div className="text-center text-red-500 my-2 text-2xl font-serif font-bold">Your Cart is empty</div>
            <img className="w-3/5 mx-auto" src={imgSrc} alt="Cart is empth"></img>
        </>
        ):(
        <>
            <button className="bg-red-500 m-2 p-2" onClick={()=>{handleClearCart()
            }}>Clear Cart</button>
            
            <h1 className="text-red-500 text-3xl">Your Cart!!</h1>
            <div>
                {/* {cartItems.map(item=><div key={item.id}>{item.name+"  Rs."+(item.price/100)}</div>)} */}
                {
                cartItems.map(item=> {
                    return <CartItem {...item} key={item.id}  />
            })}

            </div>
            <hr className="w-2/5 " />
            <div className="">To Pay: Rs.{useTotalCost}</div>
            
        </>
    )
}

export default Cart;