"use client"
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DeleteUser from "../../utils/DeleteUser"
const Users = () => {

    const [usersData, setUsersData] = useState([]);
useEffect(()=>{
const fetchData = async ()=>{
    try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsersData(data)

    } catch (error) {
        console.log("error fetching data", error)
    }
}


fetchData();
}, [])



  return (
    <div >
      <h1>Users List</h1>

      {
        usersData.map((item)=>(
            <div key={item.id}>
                <h2> Name: {item.name}</h2>
                <h2>Email: {item.email}</h2>
                <h2>Age: {item.age}</h2>
                <Link href={`/users/${item.id}`}><button className="get-details">Get Details</button></Link> 

                <span> <Link href={`/users/${item.id}/userupdate`}><button className="get-details">Update User</button></Link> </span>

               <DeleteUser id={item.id}/>
            </div>
        ))
      }
    </div>
  )
}

export default Users
