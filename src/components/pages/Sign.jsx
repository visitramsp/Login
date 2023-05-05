import React, { useEffect, useState } from 'react'
import '../style/header.css'
import { CiFacebook } from "react-icons/ci";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import Header from './Header'
import { useNavigate } from 'react-router-dom';
const Sign = () => {
  const navigation=useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const date=(new Date()).toLocaleDateString()
  const saveData = () => {
    const user = {
      name: name,
      email: email,
      date:date,
      password: password
    }
    
    const url='https://63ee44a75e9f1583bdbfa17d.mockapi.io/blogs/blogs'

    fetch(url,{
      headers:{
        "Content-Type":"application/json"
      },
      method:"POST",
      body:JSON.stringify(user)
    }).then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log("data inserted success")
      setPassword('')
      setEmail('')
      setName('')
      navigation('/login')
    }).catch((err)=>{
      console.log("error")
    })
  }

  const SignBoxPAge=()=>{
    navigation('/login')
  }

  return (
    <div className='container-fluid top_content'>
    {/* <Header/> */}
      <div className='row'>
        <div className='col-6 px-0 mx-0 side-img'>
          <div className='px-3 text-center future'>
            <span>INSPIRE BY THE FUTURE:</span><br />
            <span className='fw-bold fs-1'>THE VISION UI DASHBOARD </span>
          </div>
        </div>
        <div className='col-6 right-side'>
          <div className='row'>
            <div className='col-10'>
              <div className='sign_div'>
                <div className='fw-bold fs-2 text-center'>Welcome!</div>
                <div className='text-center' style={{ wordSpacing: "-1px", fontSize: "14px" }}>
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                </div>
                <div className='midle_box'>
                  <div className='py-2 fs-5 text-center fw-bold'>Register with</div>
                  <div className='row'>
                    <div className='col-8 text-center border-1 mx-auto' style={{ display: "flex" }}>
                      <div className='mx-auto rounded-4' style={{ height: "60px", border: "1px solid white", width: "60px", lineHeight: "50px" }}><CiFacebook className='fs-2' /></div>
                      <div className='mx-auto rounded-4' style={{ height: "60px", border: "1px solid white", width: "60px", lineHeight: "50px" }}><AiFillApple className='fs-2' /></div>
                      <div className='mx-auto rounded-4' style={{ height: "60px", border: "1px solid white", width: "60px", lineHeight: "50px" }}><AiOutlineGoogle className='fs-2' /></div>
                    </div>
                    <div className='row'>
                      <div className='col-10 mx-auto'>
                        <div className='mt-3'>
                          <span className='fw-bold'>Name</span><br />
                          <input type='text' placeholder='Your Name...' className='rounded mt-2 inp_box' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='mt-3'>
                          <span className='fw-bold'>Email</span><br />
                          <input type='text' placeholder='Your Email...' className='rounded mt-2 inp_box' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='mt-3'>
                          <span className='fw-bold'>Password</span><br />
                          <input type='password' placeholder='Your Password...' className='rounded mt-2 inp_box'   value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='mt-3'>
                          <input type='checkbox' placeholder='Your Password' className='rounded' />
                          <span className='fw-bold px-3'>Remember me</span><br />
                        </div>
                        <div className='mt-3'>
                          <input type='button' className='btn btn-primary inp_box form-control fw-bold' value='SIGNUP' onClick={saveData} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className='botton_box'>
                  Already have an Account?
                  <button className='btn text-white text-decoration-underline' onClick={SignBoxPAge}>Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sign
