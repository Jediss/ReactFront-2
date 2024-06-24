<div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <title>AZPM - Base</title>

  {/* Custom fonts for this template*/}
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

  {/* Custom styles for this template*/}
  <link href="css/sb-admin-2.min.css" rel="stylesheet" />

  {/* Page Wrapper */}
  <div id="wrapper">

    {/* Sidebar */}
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
        </div>
        <div className="sidebar-brand-text mx-3">AZPM <sup /></div>
      </a>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

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
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table" />
          <span>Towary</span></a>
      </li>
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <a className="nav-link" href="zadania.html">
          <i className="fas fa-fw fa-folder" />
          <span />Zadania</a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>

    {/* End of Sidebar */}

    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">

      {/* Main Content */}
      <div id="content">

        {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          {/* Sidebar Toggle (Topbar) */}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars" />
          </button>
          <span className="mr-2 d-none d-lg-inline text-gray-800">Witaj, Jan </span>

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

        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Content Row */}
          <div className="row">
            {/* Content Row */}
            <div className="row">
              {/* Area Chart */}
              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                  {/* Content Row */}
                  <div className="row">
                    {/* Content Column */}
                    <div className="col-lg-6 mb-4">
                      <div className="col-lg-6 mb-4">
                      </div>
                    </div>
                  </div>
                  {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}
                {/* Footer */}
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                    </div>
                  </div>
                </footer>
                {/* End of Footer */}
              </div>
              {/* End of Content Wrapper */}
            </div>
            {/* End of Page Wrapper */}
            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
              <i className="fas fa-angle-up" />
            </a>
            {/* Logout Modal*/}
            <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login.html">Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
