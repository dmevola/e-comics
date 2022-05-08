import React from "react";
import './Profile.css';
import { Redirect, useParams } from 'react-router-dom';
import ComicList from "../../component/ComicList/Index";
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

const Profile = (props) => {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: userParam }
      });
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
          <div className="">
            <h2 className="">
              Welcome to {userParam ? `${user.username}'s` : 'your'} profile. A true believer!
            </h2>
    
            
          </div>
    
        <div className="">
            <div className="">
              <ComicList
                
                
              />
            </div>    
        </div>
          
        </div>
      );
};
    


export default Profile;