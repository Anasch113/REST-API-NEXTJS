"use client"

import React, { useEffect, useState } from 'react'



async function fetchData(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null or handle the error as needed
  }
}
const Userid = ({params}) => {
const [usersData, setUsersData] =  useState([])

useEffect(()=>{

  if(params.userid){
    fetchData(params.userid).then((data)=>{
      setUsersData(data)
    })
  }
}, [params.userid])
    
  return (
    <div>
      <h1>User Details</h1>
      {
        usersData ? (
          <div>
<h2> Name: {usersData.name}</h2>
<h3> Email: {usersData.email}</h3>
<h3> Age :{usersData.age}</h3>

          </div>
        ):
        <div><p>loading...</p></div>
      }
    </div>
  )
}

export default Userid
