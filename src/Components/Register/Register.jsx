import { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
function Register() {
  const [username,setUserName] = useState('')
  const [email,setUserEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate  = useNavigate()
  
  // Register
  const createAccount = async (e)=>{
    e.preventDefault()
    try {
      const response = await fetch("https://urbanaura-back-4.onrender.com/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify({
          username,email,password
        })        
      })
          if(response.status==400){
            toast.error("Please Provide All Information ")
          }
      if (response.status==401) {
       toast.error("User Already Exist!")
   }
   const data = await response.json()
        if(response.ok) {
        toast.success("User SuccessFully Created",{
        style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
          },
            })
            navigate('/')
                navigate('/')
            localStorage.setItem('token',data.Data)
            localStorage.setItem('name',data.UserName)
          }
          console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center h-screen'>
    <div className='mt-12 grid min-w-[40%] h-96 rounded-md'>
        <div className='flex items-center justify-center'>
            <div className='flex flex-col mt-6 gap-6 font-light' >
                <h1 className='text-center text-4xl text-gray-600 mb-7'>Register to Your Account</h1>
                <div className='gap-4 flex'>
                <label htmlFor="">UserName:</label>
                <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)}  placeholder='Jackson_564' className='outline-none' />
                </div> 
                <div className='email gap-4 flex'>
                <label htmlFor="">Email:</label>
                <input value={email} onChange={(e)=>setUserEmail(e.target.value)} type="email" name='email'  placeholder='james@gmail.com' className='outline-none' />
                </div> 
                <div className='passowrd gap-4 flex'>
                <label htmlFor="">Password:</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name='passWord'className='outline-none' placeholder='Your Password....' />
                </div>
                <div>

                <p className='mt-8 text-gray-600'>Already Have an Account?<Link className='text-red-500 m-1' to={'/login'}>
                 Login
                  </Link></p>
              
                <button type='button' onClick={createAccount} className='hover:bg-red-400 duration-500 bg-[#F9CB9C] w-full rounded-md mt-6 text-white py-2 ' >Register</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register