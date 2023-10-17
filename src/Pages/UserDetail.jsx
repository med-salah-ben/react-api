import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const UserDetail = () => {
    const {id} = useParams();
    const [userDetails , setUserDetails] = useState({});
    const [loadDetails , setLaodDetails] = useState(true);
    const getUserDetails = async()=>{
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUserDetails(response.data);
            setLaodDetails(false);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUserDetails()
    },[])
  return (
    <div>
        <UserCard userDetails={userDetails} loadDetails={loadDetails} />
    </div>
  )
}

export default UserDetail