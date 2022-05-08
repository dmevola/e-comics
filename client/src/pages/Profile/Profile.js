import React from "react";
import './Profile.css';
import { useParams } from 'react-router-dom';
import ComicList from "../../component/ComicList/Index";
import { useQuery } from '@apollo/client';
import { Query_Profile_Items, QUERY_ME } from '../../utils/queries';


const Profile = (props) => {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? Query_Profile_Items : QUERY_ME, {
      variables: { username: userParam },
    });
    
    const user = data?.me || data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
          <div className="">
            <h2 className="">
              Welcome to profile {user.username} A true believer!
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