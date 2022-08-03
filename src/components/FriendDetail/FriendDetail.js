import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
   
    const {friendId} = useParams()
    const [friend, setFriend] = useState({})
    console.log(friend)

useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[friendId])
    return (
        <div>
            <h1>Here is friend details information {friendId}</h1>
            <h1>Name:{friend.name}</h1>
            <p>Phone:{friend.phone}</p>
            <p>Website:{friend.website}</p>
            <p>Address:{friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;