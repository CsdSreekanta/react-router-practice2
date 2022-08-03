import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, username, id } = friend;

  const navigate= useNavigate()
  const handleButton=()=>{
    const path= `/friend/${id}`
    navigate(path)
  }


  return (
    <div>
      <h1>Name:{name}</h1>
      <Link className="mr-3 underline" to = {'/friend/' + id}>{username}</Link>  
      <button onClick={handleButton} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {username} id:{id}
      </button>
    </div>
  );
};

export default Friend;
