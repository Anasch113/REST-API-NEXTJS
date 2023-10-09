"use client"
import React from 'react'

const DeleteUser = ({id}) => {
 
    const handleDelete = async ()=>{
       let result = await fetch(`http://localhost:3000/api/users/${id}`,{
        method: "delete"
       });
       result = await result.json();
       if(result){
        alert("User deleted successfully")
       }else{
        alert("Failed to delete user")
       }
    }
  return (
    <div>
      <button onClick={handleDelete} >Delete User</button>
    </div>
  )
}

export default DeleteUser
