import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../StateProvider';

export default function CheckoutProduckt({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket =()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
        
    }

    return (
        <div className="checkoutProduckt">
            <img src={image} alt="" className="checkoutProduckt__image"/>
            <div className="checkoutProduckt__info">
                <p className="checkoutProduckt__title">{title}</p>
                <p className="checkoutProduckt__price">
                    <small>$</small> 
                    <strong>{price}</strong>   
                </p> 
                <div className="checkoutProduckt__rating">
                    {Array(rating).fill().map((_,i)=>(<p>⭐️</p>))}    
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}