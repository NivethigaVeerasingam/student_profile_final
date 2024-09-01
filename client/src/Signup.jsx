import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

<div>thileepsn</div>

function Signup() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const navigate = useNavigate()



const handleSubmit=(e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/register',{name,email,password})
    .then(result => {console.log(result)
        navigate('/login')

    })
    .catch(err => console.log(err))
}
  

    return (
        <div className = "d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className='w-25 bg-white rounded p-3'>
            <h2>Register</h2>
            <form  onSubmit={handleSubmit}>
                <div className='mb-3'> 
                <label htmlfor="email">
                    <strong>Name</strong>
                </label>
                <input 

                    type="text"
                    placeholder='Enter name'
                    autoComplete='off'
                    name='email'
                    className='form-control rounted-0'
                    onChange={(e) => setName(e.target.value)}
                 />
                  </div>
            
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
                   Register 
                  </button>
                  <p>Already Have an Account</p>
                  <Link  to ="/login" className='btn btn-default border w-100 bg-light rounded text-decorathion-none'>
                    Login
                  </Link>

                  </form>
            </div>
        </div>
      



                

              
            
    )
  }
  
  export default Signup;
  















