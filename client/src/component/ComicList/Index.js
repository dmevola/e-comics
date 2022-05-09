import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import './CommicList.css'
import Auth from '../../utils/auth';
import Product from '../Product/Product';

const ComicList = ({ items, title }) => {
 
  return (
    <div>
      <h3>{title}</h3>
      {items && 
      items.map(item => (
      <div key={item._id}>
        <p>
          
          </p>
          {/* <div>
            <p><strong>id</strong> {item._id}</p>
            <p><strong>Issue Title:</strong> {item.itemIssueTitle}</p>
            <p><strong>Description:</strong>{item.itemDescription}</p>
            <p><strong>Publisher:</strong>{item.itemPublisher}</p>
            <p><strong>Seller:</strong>{item.username}</p>
            <p><strong>Price:</strong>${item.itemPrice}</p>
            <p><strong>Condition:</strong> {item.itemCondition}</p>
            <img src={item.itemImage}/>
            <br></br>
            <button >Add to basket</button>
          </div> */}
          <Product id={item._id}
            itemIssueTitle={item.itemIssueTitle}
            itemDescription ={item.itemDescription}
            itemPublisher = {item.itemPublisher}
            username = {item.username}
            itemPrice = {item.itemPrice}
            itemCondition = {item.itemCondition}
            itemImage = {item.itemImage}
            createdAt = {item.createdAt}

          />
      </div>

      ))}
          </div>
  )};


  export default ComicList;
