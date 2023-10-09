"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import style from "../../../adduser/pageuser.module.css"

const UserUpdate = ({params}) => {
  const id = params.userid
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [age, setAge] = useState("");


useEffect(()=>{
  getUserDetails();
},[])

const getUserDetails =  async ()=>{
  let data = await fetch(`http://localhost:3000/api/users/${id}`)
  data = await data.json()
  setName(data.name)
  setEmail(data.email)
  setAge(data.age)
}
const userUpdate = async (e)=>{
  e.preventDefault();
  let result = await fetch(`http://localhost:3000/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({name, age, email})
  })
  result = await result.json()
  if(result.success){
    alert("User Updated successfully")
  }
 
  console.log(result)
}



  return (
    <div className={style.container}>
     <h1> Add User</h1>
     <form className={style.form}>
<div className={style.row}>


        <div className={style.inputs}>
         <label htmlFor="">Name</label>
         <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter your Name' />
        </div>

        <div className={style.inputs}>
         <label htmlFor="">Email</label>
         <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Enter your email' />
        </div>

        <div className={style.inputs}>
         <label htmlFor="">age</label>
         <input value={age} onChange={(e)=> setAge(e.target.value)} type="text" placeholder='Enter your Age' />
        </div>
        <button onClick={userUpdate} className={style.btn}>Update</button>

        </div>
      </form>

    </div>
  )
}

export default UserUpdate
