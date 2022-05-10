import React from "react";
import './Profile.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries'
import Product from "../../component/Product/Product";


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
          <Product id={itemsByUser._id}
            itemTitle={itemsByUser.itemTitle}
            itemIssueTitle={itemsByUser.itemIssueTitle}
            itemDescription ={itemsByUser.itemDescription}
            itemPublisher = {itemsByUser.itemPublisher}
            username = {itemsByUser.username}
            itemPrice = {itemsByUser.itemPrice}
            itemCondition = {itemsByUser.itemCondition}
            itemImage = {itemsByUser.itemImage}
            createdAt = {itemsByUser.createdAt}

          />
          )}
        </div>
      );
};
    
export default Profile;