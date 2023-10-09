"use client"

import React from 'react'
import { useState } from 'react'
// import "./../style.css"
import style from './pageuser.module.css'
const AddUser = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [age, setAge] = useState("");


const handleSubmit =  async(e)=>{
    e.preventDefault()
let response = await fetch("http://localhost:3000/api/users", {
  method: "Post",
  body: JSON.stringify({name, email, age})

})
if(!response.ok){
  throw new Error("error in fecthing data")
} 
 response = await response.json()
if(response.success){
  alert('user added successfully')
}
else{
  alert("some error occurred please try again")
}

console.log(response)

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
        <button onClick={handleSubmit} className={style.btn}>Register</button>

        </div>
      </form>

    </div>
  )
}

export default AddUser
