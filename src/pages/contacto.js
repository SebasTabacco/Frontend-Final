import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './../styles/components/pages/Contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    comentario: "",
    telefono: ""
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos enviados al backend:", formData);

    try {
      const response = await fetch("http://localhost:3000/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Respuesta del backend:", data);

      if (response.ok) {
        alert("¡Formulario enviado exitosamente!");
        setFormData({ nombre: "", email: "", comentario: "", telefono: "" });
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Ocurrió un error. Intenta nuevamente.");
    }
  };


  return (
    <div className="form-container">
      <h1>Contacto</h1>
      <p>Complete el formulario y nos pondremos en contacto con usted.</p>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Ingrese Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Ingrese Correo"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="telefono"
            placeholder="Ingrese Número"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridConsulta">
          <Form.Label>Consulta</Form.Label>
          <Form.Control
            type="text"
            name="comentario"
            placeholder="Ingrese su Consulta"
            value={formData.comentario}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
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
              <li><a href="tel:+541123456789">+54 9 2664-860525 (Central)</a></li>
              <li><a href="tel:+541198765432">+54 9 2664-860525 (Emergencias)</a></li>
            </ul>
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            <p><strong>Correos Electrónicos:</strong></p>
            <ul>
              <li><a href="mailto:contacto@empresa.com">nucleoweb9@gmail.com</a></li>
              <li><a href="mailto:soporte@empresa.com">nucleoweb9@gmail.com</a></li>
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
