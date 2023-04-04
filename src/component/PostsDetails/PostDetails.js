import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {

    const post=useLoaderData()
const {id,userId}=post;
    const navigate=useNavigate()

    const handlelClick=()=>{
navigate(`/posts/${userId}`)
    }
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={handlelClick}>author</button>
            <Link to={`/fri/${userId}`}>link</Link>
        </div>
    );
};

export default PostDetails;