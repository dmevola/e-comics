import React from 'react'
import './Checkout.css'
import { useStateValue } from '../../StateProvider';
import Subtotal from '../../component/Subtotal/Subtotal'
import CheckoutProduckt from '../../component/CheckoutProduct/CheckoutProduct'



export default function Checkout() {
    
    const [{basket,user},dispatch] = useStateValue();


  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__add" src="https://m.media-amazon.com/images/I/A1tmfYAtb+L._AC_UY436_FMwebp_QL65_.jpg" alt=""></img>

            <div>
                <h2 className="checkout__title">
                    Your shopping bascket
                </h2>
                {basket.map(item=>(
                    <CheckoutProduckt
                        id ={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}

            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
            
        </div>    
    </div>
  )
}