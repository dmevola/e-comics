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
      <div className="product" key={item._id}>
       
         
          <Product id={item._id}
            itemTitle={item.itemTitle}
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
