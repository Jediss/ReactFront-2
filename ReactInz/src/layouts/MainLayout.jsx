import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
  return (
    <div id="page-top">
        <div id="wrapper">
            
            <Sidebar/>

            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                
                {/* Main Content */}
                <div id="content">
                    
                    <Topbar/>
                    <Outlet/>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainLayout