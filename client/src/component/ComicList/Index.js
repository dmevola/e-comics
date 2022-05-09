import React from 'react';
import { Link } from 'react-router-dom';

const ComicList = ({ items, title }) => {
    // if(!items.length) {
    //   return <h3>No comics for sale!</h3>;
    // }
  return (
    <div>
      <h3>{title}</h3>
      {items && 
      items.map(item => (
      <div key={item._id}>
        <p>
          created at {item.createdAt}
          </p>
          <div>
            <p><strong>Issue Title:</strong> {item.itemIssueTitle}</p>
            <p><strong>Description:</strong>{item.itemDescription}</p>
            <p><strong>Publisher:</strong>{item.itemPublisher}</p>
            <p><strong>Seller:</strong><Link to={`/profile/${item.username}`}>{item.username}</Link></p>
            <p><strong>Price:</strong>${item.itemPrice}</p>
            <p><strong>Condition:</strong> {item.itemCondition}</p>
            {/* <img src={item.itemImage}/> */}
          </div>
      </div>

      ))}
          </div>
  )};


  export default ComicList;