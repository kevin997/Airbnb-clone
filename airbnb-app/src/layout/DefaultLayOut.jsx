import React from 'react'
import { Outlet } from 'react-router-dom'

function DefaultLayOut() {
    return (
        <div className='container-fluid'>
            <Outlet />
        </div>
    )
}

export default DefaultLayOut
