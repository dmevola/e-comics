import React from "react";
import './Profile.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries'


const Profile = (props) => {
    const { username: userParam } = useParams();
    
    const { loading, data } = useQuery(QUERY_USER, {
      variables: { username: userParam },
    });
    
    const itemsByUser = data?.itemsByUser || {};

    if (loading) {
      return <div>Loading...</div>;
    }
              
    return (
        <div>
          <div className="center">
            <h2>Welcome to the profile of <span class="username">{userParam}</span>. A true believer!</h2>
          </div>

          {itemsByUser.map((itemsByUser) =>
           <div>
            <p><strong>Issue Title:</strong> {itemsByUser.itemIssueTitle}</p>
            <p><strong>Description:</strong>{itemsByUser.itemDescription}</p>
            <p><strong>Publisher:</strong>{itemsByUser.itemPublisher}</p>
            <p><strong>Price:</strong>${itemsByUser.itemPrice}</p>
            <p><strong>Condition:</strong> {itemsByUser.itemCondition}</p>
            {/* {<img src={itemsByUser.itemImage}/>} */}
          </div>
          )}
          
        </div>
      );
};
    
export default Profile;