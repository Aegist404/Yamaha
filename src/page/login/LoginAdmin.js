import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      alert("Login success!");
      alert("Welcome to Admin page!");
      window.location.replace("/admin-home");
    } else {
      alert("Wrong password or ussername");
    }
  }; 

  return (
    <Container
      className="d-flex justify-content-center align-items-center w-50"
      style={{ minHeight: "100vh", }}
    >
      <div className="w-100 p-5 rounded shadow" style={{background: '#252525', color: 'white'}}>
        
        <p className="fs-1 me-3 fw-bold text-center rounded" style={{background: '#0014A0'}}>Hello! Are you the Admin?</p>
        
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" className="w-100 mt-3" style={{background: '#0014A0', border: 'none'}}>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
