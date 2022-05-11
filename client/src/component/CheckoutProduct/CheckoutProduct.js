import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../StateProvider';

export default function CheckoutProduckt({id,itemIssueTitle,itemDescription,itemPublisher,username,itemPrice,itemCondition,itemImage,createdAt,itemTitle}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket =()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
        
    }
  

    return (
        <div className="checkoutProduct">
            <div>
            <p><strong>Title: </strong>{itemTitle}</p>
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
            <button className="removebtn mt-2 p-1.5 font-bold text-gray-800 bg-red-400 leading-tight uppercase rounded shadow-md hover:bg-rose-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out items-center sm:px-3" onClick={removeFromBasket}>Remove from Basket</button>
        </div>
        </div>
    )
}
