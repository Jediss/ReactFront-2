import React from 'react'

const HomePage = () => {
  return (
    <div className="container-fluid">
      
      <div className="row">

          <div>
            
              {/*Dział pracy*/}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Dział</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">Magazyn</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Stanowisko*/}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Stanowisko</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">Kierownik</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      </div>

    </div>
  );
}

export default HomePage