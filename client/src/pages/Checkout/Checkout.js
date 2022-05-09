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
                    <CheckoutProduckt id={item.id}
                    itemIssueTitle={item.itemIssueTitle}
                    itemDescription ={item.itemDescription}
                    itemPublisher = {item.itemPublisher}
                    username = {item.username}
                    itemPrice = {item.itemPrice}
                    itemCondition = {item.itemCondition}
                    itemImage = {item.itemImage}
                    createdAt = {item.createdAt}
        
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