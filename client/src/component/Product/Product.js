import { duration } from '@material-ui/core';
import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider'
import Auth from '../../utils/auth';
import { useNavigate } from 'react-router';

export default function Product({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    const Navigate = useNavigate();

    const addToBasket = ()=>{
        if(Auth.loggedIn()){
            dispatch({
                type : "ADD_TO_BASKET",
                item:{
                    id:id,
                    title:title,
                    image:image,
                    price:price,
                    rating:rating
                }
            })
        }else{
            Navigate("/login")
        }
       
    }

  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_,i)=>(<p>⭐️</p>))}
            </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to basket</button>
    
    </div>
  )
}