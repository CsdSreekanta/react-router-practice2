import React, { useEffect, useState } from 'react';

const Friends = () => {
    const [friends, setFriends] = useState([])
    console.log(friends)
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data =>setFriends(data))
    },[])
        return (
        <div>
            <h1 className='text-3xl font-bold'>Hi friends, how are you</h1>
            <p> parle kiso taka dar dao</p>
        </div>
    );
};

export default Friends;