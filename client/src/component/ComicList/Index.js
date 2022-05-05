import React from 'react';
import { Link } from 'react-router-dom'

const ComicList = ({ items, itemTitle }) => {
  return (
    <div>
      <h3>{itemTitle}</h3>
      {items && 
      items.map(item =>
      <div key={item._id}>
        <p className="card-header">
          <Link to={`/profile/${item.username}`}
          >
            {item.username}
          </Link> {' '}
          created at {item.createdAt}
          </p>
          <div className='card-body'>
            <p>{item.itemIssueTitle}</p>
            <p>{item.itemDescription}</p>
            <p>{item.itemPrice}</p>
            <p>{item.itemCondition}</p>
          </div>
    </div>

      )}
          </div>
  )};

  export default ComicList;
