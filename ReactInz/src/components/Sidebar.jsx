import React from 'react'
import Link from 'react-router-dom'

const Sidebar = () => {
    

  return (
    <div>
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index2.html">
            <div className="sidebar-brand-icon rotate-n-15">
            </div>
            <div className="sidebar-brand-text mx-3">AZPM <sup /></div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        
        
        {/* Divider
            <hr class="sidebar-divider">*/}
        {/* Heading */}
        <div className="sidebar-heading">
            Interfejs
        </div>
        
        {/* Nav Item - Utilities Collapse Menu*/} 
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench" />
            <span>Magazyn</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Lokalizacja</h6>
                <a className="collapse-item" href="wroc.html">Wrocław</a>
            </div>
            </div>
        </li>
        
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog" />
            <span>Zamówienia</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Magazyn:</h6>
                <a className="collapse-item" href="wrocZamowienia.html">Wrocław</a>
            </div>
            </div>
        </li>
        {/* Nav Item - Tables */}
        
        <li className="nav-item">
            <Link className="nav-link" to="/Towary">
                <i className="fas fa-fw fa-table" />
                <span>Towary</span>
            </Link>
        </li>

        {/* Nav Item - Charts */}
        <li className="nav-item">
            <a className="nav-link" href="zadania.html">
            <i className="fas fa-fw fa-folder" />
            <span />Zadania</a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        
        
        </ul>
        {/* End of Sidebar */}
        
    </div>
  );
}

export default Sidebar;