import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';

function ModalDodajProdukt(props) {

  const [startDate, setStartDate] = useState(new Date());
  const [jednostki, setJednostki] = useState([]);
  const [rodzaje, setRodzaje] = useState([]);

  
  async function fetchDataJednostka() {
      try {
        const response = await fetch('http://localhost:8080/jednostka/all');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Bezpośrednio używamy json() zamiast text() następnie JSON.parse()
        setJednostki(data); // Ustawiamy stan jednostek bezpośrednio tutaj
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    useEffect(() => {
      fetchDataJednostka();
    }, []);

    async function fetchDataRodzajSkladowania() {
      try {
        const response = await fetch('http://localhost:8080/rodzajSkladowania/all');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Bezpośrednio używamy json() zamiast text() następnie JSON.parse()
        setRodzaje(data); // Ustawiamy stan jednostek bezpośrednio tutaj
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    useEffect(() => {
      fetchDataRodzajSkladowania();
    }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:8080/jednostka/all');
  //       const data = await res.json();
  //       setJednostki(data);
  //     } catch (err) {
  //       console.error("Error fetching data", err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:8080/rodzajSkladowania/all');
  //       const data = await res.json();
  //       setRodzaje(data);
  //     } catch (err) {
  //       console.error("Error fetching data", err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  
  
  return (

    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dodawanie produktu
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <h5>Wprowadź dane położenia</h5>
          <Row>
            <Col xs={6} md={4}>
              Rząd:
            </Col>
            <Col xs={12} md={8}>
              <input type="text" className="form-control" placeholder="Rząd" />
            </Col>
          </Row>
           
          <Row>
            <Col xs={6} md={4}>
              Stelaż:
            </Col>
            <Col xs={12} md={8}>
              <input type="text" className="form-control" placeholder="Stelaż" />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              Poziom:
            </Col>
            <Col xs={12} md={8}>
              <input type="text" className="form-control" placeholder="Poziom" />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              Index:
            </Col>
            <Col xs={12} md={8}>
              <input type="text" className="form-control" placeholder="Index" />
            </Col>
          </Row>

          <br></br>

          <h5>Wprowadź dane towaru</h5>
          <Row>
            <Col xs={6} md={4}>
                Nazwa:
              </Col>
              <Col xs={12} md={8}>
                <input type="text" className="form-control" placeholder="Nazwa" />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
                Ilość:
              </Col>
              <Col xs={12} md={8}>
                <input type="text" className="form-control" placeholder="Ilość" />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
                Jednostka:
              </Col>
              <Col xs={12} md={8}>
              <Form.Select className="form-control" defaultValue="">
                <option value="" disabled>Wybierz jednostkę</option>
                {jednostki.map(jednostka => (
                  <option key={jednostka.idJednostka} value={jednostka.idJednostka}>{jednostka.jednostka}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
                Rodzaj składowania:
              </Col>
              <Col xs={12} md={8}>
              <Form.Select className="form-control" defaultValue="">
              <option value="" disabled>Wybierz rodzaj składowania</option>
                {rodzaje.map(rodzaj => (
                <option key={rodzaj.idRodzajSkladowania} value={rodzaj.idRodzajSkladowania}>{rodzaj.rodzajSkladowania}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
                Data przyjęcia:
              </Col>
              <Col xs={12} md={8}>
              <DatePicker 
                  selected={startDate} 
                  onChange={(date) => setStartDate(date)} 
                  className="form-control"
                />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
                Data wysyłki:
              </Col>
              <Col xs={12} md={8}>
                <DatePicker 
                  selected={startDate} 
                  onChange={(date) => setStartDate(date)} 
                  className="form-control"
                />
            </Col>
          </Row>







          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>  
  )
}

const Magazyn = () => {
  
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <div className="container-fluid">

      <div className="container-fluid">
        <Button variant="primary" onClick={() => setModalShow(true) }>
          <span className="icon text-white-50">
            <i className="fas fa-flag" />
          </span>
          <span className="text">Dodaj Produkt</span>
        </Button>
      </div>

      <ModalDodajProdukt show={modalShow} onHide={() => setModalShow(false)} />

      <div className="container-fluid">
        {/* Page Heading */}
          <h1 className="h3 mb-2 text-gray-800">Tabela produktów - Wrocław</h1>

        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary" />
            
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm" />
                </button>
              </div>
              </div>
            </form>

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
                    <th>Rząd/Stelaż/Poziom/Index</th>
                    <th>Data przyjęcia</th>
                    <th>Data wysyłki</th>
                    <th>Akcja</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Nazwa</th>
                    <th>Magazyn</th>
                    <th>Rodzaj składowania</th>
                    <th>Ilość</th>
                    <th>Rząd/Stelaż/Poziom/Index</th>
                    <th>Data przyjęcia</th>
                    <th>Data wysyłki</th>
                    <th>Akcja</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>Product 1</td>
                    <td>Wrocław</td>
                    <td>paleta</td>
                    <td>10</td>
                    <td>1/2/3/4</td>
                    <td>2022-01-01</td>
                    <td>2022-01-12</td>
                    <td>
                      <a href="#" className="btn btn-info btn-icon-split">
                        <span className="icon text-white-50">
                          <i className="fas fa-info-circle" />
                        </span>
                        <span className="text">Update</span>
                      </a>
                      <a href="#" className="btn btn-danger btn-circle">
                        <i className="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Product 5</td>
                    <td>Wrocław</td>
                    <td>karton</td>
                    <td>8</td>
                    <td>2/6/3/7</td>
                    <td>2022-01-05</td>
                    <td>2022-01-08</td>
                    <td>
                      <a href="#" className="btn btn-info btn-icon-split">
                        <span className="icon text-white-50">
                          <i className="fas fa-info-circle" />
                        </span>
                        <span className="text">Update</span>
                      </a>
                      <a href="#" className="btn btn-danger btn-circle">
                        <i className="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  )
}

export default Magazyn