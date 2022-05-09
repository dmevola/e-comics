import React from 'react';

const ComicList = ({ items, title }) => {
    // if(!items.length) {
    //   return <h3>No comics for sale!</h3>;
    // }
  return (
    <div>
      <h3>{title}</h3>
      {items && 
      items.map(item => (
      <div key={item._id} className='home__row'>
        <p>
          Listed at {item.createdAt} 
          <br/> by {item.username}
          </p>
          <div>
            <p><strong>Title:</strong> {item.itemTitle}</p>
            <p><strong>Issue Title:</strong> {item.itemIssueTitle}</p>
            <p><strong>Description:</strong>{item.itemDescription}</p>
            <p><strong>Publisher:</strong>{item.itemPublisher}</p>
            <p><strong>Price:</strong>${item.itemPrice}</p>
            <p><strong>Condition:</strong> {item.itemCondition}</p>
            <img src={item.itemImage} className='comic_img'/>
          </div>
      </div>

      ))}
          </div>
  )};


  export default ComicList;
