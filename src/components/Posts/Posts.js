import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const  [posts, setPosts] = useState([])
    console.log(posts)
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h1>This is post component</h1>
            {
                posts.map(post  => <Link to= {`/post/${post.id}`}>{post.id}  </Link>)
            }
            
        </div>
    );
};

export default Posts;