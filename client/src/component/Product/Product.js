import { duration } from '@material-ui/core';
import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider'
import Auth from '../../utils/auth';
import { useNavigate } from 'react-router';

export default function Product({id,itemIssueTitle,itemDescription,itemPublisher,username,itemPrice,itemCondition,itemImage,createdAt}) {
    const [{basket},dispatch] = useStateValue();
    const Navigate = useNavigate();

    const addToBasket = ()=>{
        if(Auth.loggedIn()){
            dispatch({
                type : "ADD_TO_BASKET",
                item:{
                    id : id,
                    itemIssueTitle:itemIssueTitle,
                    itemDescription:itemDescription,
                    itemPublisher:itemPublisher,
                    username:username,
                    itemPrice:itemPrice
                    ,itemCondition:itemCondition
                    ,itemImage:itemImage,
                    createdAt:createdAt
                }
            })
        }else{
            Navigate("/login")
        }
       
    }

  return (
    <div className="product">
        <div>
            <p><strong>id</strong> {id}</p>
            <p><strong>Issue Title:</strong> {itemIssueTitle}</p>
            <p><strong>Description:</strong>{itemDescription}</p>
            <p><strong>Publisher:</strong>{itemPublisher}</p>
            <p><strong>Seller:</strong>{username}</p>
            <p><strong>Price:</strong>${itemPrice}</p>
            <p><strong>Condition:</strong> {itemCondition}</p>
            <img src={itemImage}/>
            <br></br>
            created at :  {createdAt}
            <br></br>
            <button onClick={addToBasket} >Add to basket</button>
        </div>
    
    </div>
  )
}