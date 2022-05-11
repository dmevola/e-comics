import { duration } from '@material-ui/core';
import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider'
import Auth from '../../utils/auth';
import { useNavigate } from 'react-router';

export default function Product({id,itemIssueTitle,itemDescription,itemPublisher,username,itemPrice,itemCondition,itemImage,createdAt,itemTitle}) {
    const [{basket},dispatch] = useStateValue();
    const Navigate = useNavigate();

    const addToBasket = ()=>{
        if(Auth.loggedIn()){
            dispatch({
                type : "ADD_TO_BASKET",
                item:{
                    id : id,
                    itemTitle:itemTitle,
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
    <div className="product h-[975px] py-0 m-0 rounded-lg shadow-none outline-none bg-white">
        <div>
            <p><strong>Title:</strong>{itemTitle}</p>
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
            <button className="addTOBasket bg-green-300 mt-2 p-1 rounded leading-tight shadow-md flex justify-center items-center text-gray-700 md:w-[100px] md:mx-3 transition duration-150 ease-in-out hover:outline hover:outline-1" onClick={addToBasket} >Add to basket</button>
        </div>
    
    </div>
  )
}