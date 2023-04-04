import React from 'react';
import { Link } from 'react-router-dom';
import './friend.css'

const Friend = ({friend}) => {
    console.log(friend)
    const {email,name,username,id}=friend;
    return (
        <div className='friend'>
           <h1>name : {name}</h1> 
           <h3>Email :{email}</h3>
        <Link to={`/fri/${id}`}>{username}</Link>
        </div>
    );
};

export default Friend;