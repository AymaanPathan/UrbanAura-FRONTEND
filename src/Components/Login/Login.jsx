/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useNavigate  } from 'react-router-dom';
import loginImg from './login.png'

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate() 

  const loginUser = async()=>{
    try {
      const response = await fetch('https://urbanaura-back-4.onrender.com/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify({
          email,password
        })        
      });
      const data = await response.json()
          console.log(data)
      if(response.ok) {
        toast.success("User Login SuccessFully",{
        style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
          },
            })
            navigate('/')
            localStorage.setItem('token',data.Data)
            localStorage.setItem('name',data.UserName)
          }
          if(response.status===400){
            toast.error('Please Fill Email And Password Inputs')
          }
         if (response.status===401){
            toast.error('User Not Found With This Email Id')
          }
          if(response.status===402){
            toast.error('Password is incorrect')
          }
    } catch (error) {
      console.log(error)
    }
  }

  return  (
    // <div>
    <div className="  flex justify-center items-center">
<div className="w-1/2 h-full hidden md:flex items-center justify-center lg:block">
  <img src={loginImg} alt="Placeholder Image" className="object-cover ml-24 mb-20 h-96"/>
</div>
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-playfair-display font-light mb-4 ">Login</h1>
  <form >
    <div className="mb-4">
      <label htmlFor="Email" className="block text-gray-600">Username</label>
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="username" name="username" placeholder='Email' className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password</label>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
    </div>
    <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
      <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
    </div>
    <div className="mb-6 text-blue-500">
      <a href="#" className="hover:underline">Forgot Password?</a>
    </div>
    <button type="button" onClick={loginUser} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
  <div className="mt-6 text-blue-500 text-center">
    <Link to="/register" className="hover:underline">Sign up Here</Link>
  </div>
</div>
</div>
    // </div>
  );
}

export default Login