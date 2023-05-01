import React from "react";
import AdminForm from "../../components/adminComponents/form/AdminForm";
import Navbar from "../../components/adminComponents/navbar/AdminNavbar";
import { Container } from "react-bootstrap";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <Container className="mt-4 mb-4">
        <AdminForm />
      </Container>
    </div>
  );
};

export default Admin;
