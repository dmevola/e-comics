import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../StateProvider';

export default function CheckoutProduckt({id,itemIssueTitle,itemDescription,itemPublisher,username,itemPrice,itemCondition,itemImage,createdAt}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket =()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
        
    }
  

    return (
        <div className="checkoutProduckt">
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
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
        </div>
    )
}
