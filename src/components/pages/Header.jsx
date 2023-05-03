import React from 'react'
import '../style/header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { BsFillKeyFill } from "react-icons/bs";
const Header = () => {
  const navigate=useNavigate()
  return (
    <div className='container-fluid owner_class'>
      <div className='row'>
        <div className='col-6 mx-auto border-1 header_box'>
          <div className='row'>
            <div className='col-7 d-flex'>
              <div className='px-2 pt-2 text-white mt-2 fs-6'><RxDashboard className='px-1 fs-5' />
                  <span className=''style={{ paddingTop: "2px" }}>
                    Dashboard
                  </span>
              </div>
              <div className='px-2 pt-2 text-white mt-2 fs-6'><FaUserAlt className='px-1 fs-5' />Profile</div>
              <div className='px-2 pt-2 text-white mt-2 fs-6'>
                <NavLink to='/' style={{ textDecoration: "none" }} className='text-white'><FaUserCircle className='px-1 fs-4' />Sign up </NavLink></div>
              <div className='px-2 pt-2 text-white mt-2 fs-6'>
                <NavLink to='/login' style={{ textDecoration: "none" }} className='text-white'><BsFillKeyFill className='px-1 fs-4' />Sign in</NavLink>
              </div>
            </div>
            <div className='col-5 py-2'>
              <button className='btn btn-primary float-end'>BUY NOW</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
