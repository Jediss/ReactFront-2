import React from 'react'

const Towary = () => {
  return (
    <div>
            {/* Begin Page Content */}
            <div className="container-fluid">
            
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tabela produktów</h1>
            
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary" />
                </div>
                <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                        <tr>
                        <th>Nazwa</th>
                        <th>Magazyn</th>
                        <th>Rodzaj składowania</th>
                        <th>Ilość</th>
                        <th>Data przyjęcia</th>
                        <th>Data wysyłki</th>
                        {/*<th>Akcja</th>*/}
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                        <th>Nazwa</th>
                        <th>Magazyn</th>
                        <th>Rodzaj składowania</th>
                        <th>Ilość</th>
                        <th>Data przyjęcia</th>
                        <th>Data wysyłki</th>
                        {/*<th>Akcja</th>*/}
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                        <td>Product 1</td>
                        <td>Wrocław</td>
                        <td>paleta</td>
                        <td>10</td>
                        <td>2022-01-01</td>
                        <td>2022-01-12</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
            {/* /.container-fluid */}
            
            {/* End of Main Content */}

    </div>
  )
}

export default Towary