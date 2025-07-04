import React from 'react'


const Topbar = () => {
  return (
    <div>
                {/* Topbar */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* Sidebar Toggle (Topbar) */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars" />
                </button>
                <span className="mr-2 d-none d-lg-inline text-gray-800"> Witaj, Jan </span>
                {/* Topbar Search
                            <form
                                class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">
                                            <i class="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        */}
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                    <div className="topbar-divider d-none d-sm-block" />
                    
                    {/* Nav Item - User Information */}
                    <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Jan Kowalski</span>
                        <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                    </a>
                    
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                        Profile
                        </a>
                        <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                        Settings
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                        </a>
                    </div>
                    </li>
                </ul>
                </nav>
                {/* End of Topbar */}

    </div>
  );
}

export default Topbar;