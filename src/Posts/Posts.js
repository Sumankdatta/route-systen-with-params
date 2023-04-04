import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../component/Post/Post';
import './Posts.css'

const Posts = () => {
    const posts=useLoaderData()
    return (
        <div className='posts'>
            {
                posts.map(post=><Post
                key={post.id}
                post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;