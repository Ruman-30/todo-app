import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setname] = useState("")
  const [company, setcompany] = useState("")
  const [phone, setphone] = useState("")
  const [allusers, setallusers] = useState([])
  
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(name,company,phone);
    const newArr = [...allusers, {name, company, phone}]
    setallusers(newArr)
    setname("")
    setphone("")
    setcompany("")
    
  }
const deleteHandler = (idx)=>{
 let copyUsers = [...allusers]
 copyUsers.splice(idx, 1)
  setallusers(copyUsers)
}
  return (
    <div className='min-h-screen w-full bg-zinc-200 flex p-3'>
      <div className="first h-screen w-1/2 bg-zinc-100 p-4 rounded-md">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h1 className='font-bold mb-2'>Add Contact</h1>
        <h3 className='text-[13px]'>Name</h3>
        <input
        value={name}
        onChange={(e)=>{
         setname(e.target.value)
        }}
        className='mb-4 w-full border-2 border-zinc-200 p-2 rounded-md' type="text" placeholder='Enter name'/>
        <h3 className='text-[13px]'>Company</h3>
        <input
          value={company}
          onChange={(e)=>{
           setcompany(e.target.value)
          }}
        className='mb-4 w-full border-2 border-zinc-200 p-2 rounded-md' type="text" placeholder='Enter name'/>
          <h3 className='text-[13px]'>Phone</h3>
        <input
          value={phone}
          onChange={(e)=>{
           setphone(e.target.value)
          }}
        className='mb-4 w-full border-2 border-zinc-200 p-2 rounded-md' type="text" placeholder='Enter name'/>
        <button className='w-full bg-blue-700 py-2 text-white rounded'>Add Contact</button>
      </form>
      </div>
      <div className="second h-screen w-1/2 bg-zinc-200 py-3 px-5">
       <h1 className='font-bold mb-4'>Contact list</h1>
      {allusers.map(function(elem, idx){
        return  <div key={idx} className="mb-2 card w-full py-2 px-4 bg-white rounded-md">
        <h1 className='font-semibold'>{elem.name}</h1>
        <h3 className='text-[13px]'>Company: {elem.company}</h3>
        <h3 className='text-[13px]'>Phone: {elem.phone}</h3>
        <button onClick={()=>{
        deleteHandler(idx)
        }} className='text-sm text-white rounded-md mt-1 py-1 px-4 bg-red-600'>Delete</button>
       </div>
      })}
      </div>
    </div>
  )
}

export default App
