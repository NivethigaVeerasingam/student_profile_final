import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Login() {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const navigate = useNavigate()



const handleSubmit=(e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/login',{email,password})
    .then(result => {
        console.log(result)
        if(result.data==="Success"){
                navigate('/Users')
    }

    })
    .catch(err => console.log(err))
}
  

    return (
        <div className = "d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className='w-25 bg-white rounded p-3'>
            <h2>Login</h2>
            <form  onSubmit={handleSubmit}>
               
            
            
                 <div className='mb-3'> 
                <label htmlfor="email">
                    <strong>Email</strong>
                </label>

                <input 

                    type="email"
                    placeholder='Enter email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounted-0'
                    onChange={(e) => setEmail(e.target.value)}
                 />
                  </div>

                  <div className='mb-3'> 
                <label htmlfor="email">
                    <strong>Password</strong>
                </label>

                <input 

                    type="password"
                    placeholder='Enter password'
                   
                    name='password'
                    className='form-control rounted-0'
                    onChange={(e) => setPassword(e.target.value)}
                 />
                  </div>
                  <button type="submit" className='btn btn-success w-100 rounded-0'>
                   Login
                  </button>
                  </form>
                  <p>Already Have an Account</p>
                  <Link  to ="/register" className='btn btn-default border w-100 bg-light rounded text-decorathion-none'>
                   Sign Up
                  </Link>

                 
            </div>
        </div>
      



                

              
            
    )
  }
  
  
  



export default Login;