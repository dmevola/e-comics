import React from "react";
import './Profile.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries'


const Profile = (props) => {
    const { username: userParam } = useParams();
    
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
    
    const item = data?.item || {};
    console.log(item)
  
    return (
        <div>
          <div className="center">
            <h2>Welcome to the profile of <span class="username">{userParam}</span>. A true believer!</h2>
          </div>
    
           <div>
            <p><strong>Issue Title:</strong> {item.itemIssueTitle}</p>
            <p><strong>Description:</strong>{item.itemDescription}</p>
            <p><strong>Publisher:</strong>{item.itemPublisher}</p>
            <p><strong>Price:</strong>${item.itemPrice}</p>
            <p><strong>Condition:</strong> {item.itemCondition}</p>
            {/* <img src={item.itemImage}/> */}
          </div>
      </div>

         
      );
};
    
export default Profile;