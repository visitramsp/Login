import React from 'react'
import Header from './components/pages/Header'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Sign from './components/pages/Sign'
import Login from './components/pages/Login'
import List from './components/pages/List'
import Dashboard from './components/pages/Dashboard'
import Profile from './components/pages/Profile'
import Table from './components/pages/Table'

const App = () => {
    return (
        <div>    
            <Routes>
                <Route path='/' element={<Sign />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/Dashboard' element={<Dashboard/>} />
                <Route path='/Dashboard/profile' element={<Profile/>} />
                <Route path='/Dashboard/table' element={<Table/>} />
            </Routes>
        </div>
    )
}

export default App
