import React from 'react'
import '../style/dash.css'
import { NavLink } from 'react-router-dom'
const Dashboard = () => {
  const name=window.localStorage.getItem("name")
  const LogOutData=()=>{
   window.localStorage.removeItem("email")
   window.localStorage.removeItem("name")
   window.location.href='http://localhost:3000/login'
  }
  return (
    <div className='dash_outer'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <nav className="navbar fixed-top dash_outer">
              <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Offcanvas navbar</a> */}
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start side_navbar" style={{width:"230px"}}  tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Dashboard</h5>
                    <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                        <NavLink className="nav-link active text-light main_link" aria-current="page" to="/Dashboard/profile">Profile</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link text-light main_link" to="/Dashboard/table">Table</NavLink>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light main_link" href="#">Billing</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light main_link" href="#">RTL</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item main_link w-100" href="#">Action</a></li>
                          <li><a className="dropdown-item main_link w-100" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item main_link w-100" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                    
                  </div>
                  
                </div>
                <div className='text-white text-end'>{name}</div>
                <button onClick={LogOutData} className='btn btn-outline-danger'>
                Logout
                </button>
                
              </div>
              
            </nav>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
