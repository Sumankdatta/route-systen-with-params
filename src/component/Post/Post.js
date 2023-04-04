import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id,title,body}=post;
    const navigate=useNavigate()

    const handleNavigate=()=>{
        navigate(`/posts/${id}`)
    }
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>Link{id}</Link>
            <Link to={`/posts/${id}`}><button>post details</button></Link>
            <button onClick={handleNavigate}>navigate</button>
        </div>
    );
};

export default Post;