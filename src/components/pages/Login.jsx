import React, { useState } from 'react'
import '../style/header.css'
import Header from './Header'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const saveData = () => {
    const user = {
      email: email,
      password: password
    }
    
    const url='http://localhost:7080/user/login'

    fetch(url,{
      headers:{
        "Content-Type":"application/json"
      },
      method:"POST",
      body:JSON.stringify(user)
    }).then((response)=>{
      return response.json()
    }).then((data)=>{
      alert("user login success")
      window.location.href='http://localhost:3000/Dashboard/table'
    }).catch((err)=>{
      console.log("error")
    })
  }
  return (
    <div className='container-fluid'>
    <Header />
      <div className='row'>
        <div className='col-md-6 px-0 mx-0 side-img'>
          <div className='px-3 text-center inspire'>
            <span>INSPIRE BY THE FUTURE:</span><br />
            <span className='fw-bold fs-1'>THE VISION UI DASHBOARD </span>
          </div>
        </div>
        <div className='col-md-6 right-side'>
          <div className='row'>
            <div className='col-10 text-white login_box'>
              <div className='main_login'>
                <div className='fw-bold fs-3'>Nice to see you!</div>
                <div className='' style={{ wordSpacing: "-1px", fontSize: "14px" }}>Enter Your Email and Password to Sign in</div>
                <div className='mt-3'>
                  <span className='fw-bold'>Email</span><br />
                  <input type='text' placeholder='Your Email' onChange={(e) => setEmail(e.target.value)} className='rounded mt-2 inp_box' />
                </div>
                <div className='mt-3'>
                  <span className='fw-bold'>Password</span><br />
                  <input type='password' placeholder='Your Password' onChange={(e) => setPassword(e.target.value)} className='rounded mt-2 inp_box' />
                </div>
                <div className='mt-3'>
                  <input type='checkbox' placeholder='Your Password' className='rounded' />
                  <span className='fw-bold px-3'>Remember me</span><br />
                </div>
                <div className='mt-3'>
                  <input type='button' onClick={saveData} className='btn btn-primary inp_box fw-bold' value='SIGNIN' />
                </div>
                <div className='mt-4'>
                  <span>Don`t have an account?<span className='fw-bold'>Sign up</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
