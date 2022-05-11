import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import './CommicList.css'
import Auth from '../../utils/auth';
import Product from '../Product/Product';

const ComicList = ({ items, title }) => {
 

  return (
    <div className='w-full pt-16 md:pt-5 pb-0 items-center h-full grid md:grid-cols-2 xl:grid-cols-3 mx-2 row-start-auto shadow-none outline-none bg-blue-400'>
      {items && 
      items.map(item => (

      <div className="product md:px-2 px-4 py-0 mb-0 max-w-[1300px] justify-center bg-blue-400 shadow-none outline-none border-0" key={item._id}>

       
         
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

