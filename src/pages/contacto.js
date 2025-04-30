import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './../styles/components/pages/Contacto.css';


function Contacto() {
  return (
    <div className="form-container">
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="nombre" placeholder="Ingrese Nombre" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="apellido" placeholder="Ingrese Apellido" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Localidad</Form.Label>
        <Form.Control placeholder="Ingrese Localidad" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Codigo Postal</Form.Label>
        <Form.Control placeholder="C.D" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control placeholder="Ingrese Correo"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Telefono</Form.Label>
          <Form.Select placeholder="Ingrese Numero">
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Consulta</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      
      {/* Mapa de ubicación */}
      <div className="map-container">
        <h2>Ubicación</h2>
        <iframe
          title="Mapa de ubicación de la empresa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4257.218303301863!2d-65.01873642355108!3d-32.347740373845994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2e1ef3ebb389d%3A0xca02b7750430a491!2sMerlo%20-%20San%20Lu%C3%ADs!5e1!3m2!1ses-419!2sar!4v1744513613756!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
       {/* Datos útiles */}
       <div className="datos-utiles">
        <h2>Datos Útiles</h2>
        <div className="datos-contenedor">
          <div>
            <i className="fas fa-phone"></i>
            <p><strong>Teléfonos Útiles:</strong></p>
            <ul>
              <li><a href="tel:+541123456789">+54 11 2345 6789 (Central)</a></li>
              <li><a href="tel:+541198765432">+54 11 9876 5432 (Emergencias)</a></li>
            </ul>
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            <p><strong>Correos Electrónicos:</strong></p>
            <ul>
              <li><a href="mailto:contacto@empresa.com">contacto@empresa.com</a></li>
              <li><a href="mailto:soporte@empresa.com">soporte@empresa.com</a></li>
            </ul>
          </div>
          <div>
            <i className="fas fa-users"></i>
            <p><strong>Sector RRHH:</strong></p>
            <ul>
              <li><a href="mailto:rrhh@empresa.com">rrhh@empresa.com</a></li>
            </ul>
          </div>
          <div>
            <i className="fas fa-bullhorn"></i>
            <p><strong>Marketing:</strong></p>
            <ul>
              <li><a href="mailto:marketing@empresa.com">marketing@empresa.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      
  );
}

export default Contacto;