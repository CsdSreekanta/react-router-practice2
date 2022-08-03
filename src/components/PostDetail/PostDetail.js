import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams()
    const [post, setPost] = useState({})

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res =>res.json())
        .then(data => setPost(data))
    },[postId])
    return (
        <div className='flex justify-center'>
            <div className='border-4 border-green-600 p-4 m-8 w-1/2 shadow-lg rounded'>
            <h1 className='text-orange-500 font-bold text-xl'>This is post Detail information: {postId}</h1>
            <p className=" font-bold text-purple-600">Title: {post.title}</p>
            <p className="font-bold text-pink-600">Body:{post.body}</p>
        </div>
        </div>
    );
};

export default PostDetail;