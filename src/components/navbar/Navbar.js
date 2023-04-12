import {Container , Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar variant='dark' expand="lg" style={{background: 'white'}}>
      <Container>
        <Navbar.Brand>
          <img src='../image/logoNavbar.png' alt='Yamaha Star Motor' width={150}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='fs-3 fw-semibold active me-5' style={{color: '#0014A0'}}>Home</Nav.Link>
            <Nav.Link href="/service" className='fs-3 fw-semibold active' style={{color: '#0014A0'}}>Service</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;