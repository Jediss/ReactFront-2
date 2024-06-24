import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import MainContent from './components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="page-top">
      <div id="wrapper">    
        
        <Sidebar/>
        
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          
          {/* Main Content */}
            <div id="content">
              <Topbar/>
              <MainContent/>
            </div>
         </div>
      </div>
    </div>
  );
}

export default App
