import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    keluhan: "",
  });

  const [id, setId] = useState(1);
  const [users, setUsers] = useState([]);

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmSubmit = window.confirm(
      `Apakah data yang di isi sudah benar? \n Nama: ${formData.name}\n Email: ${formData.email}\n Phone: ${formData.phone} \n Keluhan: ${formData.keluhan}`
    );
    if (confirmSubmit) {
      const newUser = { ...formData, id };
      setId(id + 1);
      setUsers([...users, newUser]);
      localStorage.setItem("user", JSON.stringify([...users, newUser]));
      setFormData({ name: "", email: "", phone: "", keluhan: "" });
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit} className="fs-3" style={{color: '#0014A0'}}>
        
        <Form.Label className='fs-1 mb-2'>Estimasi service</Form.Label>
          
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>
                  Name
                </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>
                  Email
                </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                  />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>
                  Phone
                </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>
                  Keluhan
                </Form.Label>
                  <Form.Control
                    as='textarea'
                    name="keluhan"
                    placeholder="Keluhan pada motor"
                    value={formData.keluhan}
                    onChange={handleFormChange}
                  />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" className="mt-4">BOOKING SERVICE</Button>
        
        </Form>
      </Container>
    </div>
  );
}

export default App;
