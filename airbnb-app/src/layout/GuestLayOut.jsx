import React from 'react'
import { Outlet } from 'react-router-dom'
//import '../css/auth.css'

function GuestLayOut() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 m-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default GuestLayOut
