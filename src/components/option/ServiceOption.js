import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

const Option = () => {

    // untuk link whatsapp
  const phoneNumber = '089612021737'; // ganti nomor telepon sesuai dengan nomor WhatsApp kamu
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  
  const btnStyle = {backgroundColor: '#0014A0', color: 'white'}

  return (
    <div>
      <Container className='mt-5 mb-5 p-3'>
        <Form>
          <Form.Label className='fs-1 mb-2' style={{color: '#0014A0'}}>Estimasi service</Form.Label>
            <Form.Group>
                <Row className='d-flex justify-content-between'>
                    <Col md={6}>
                        <Form.Control type='text' placeholder='Masukan model motor' className='fs-3 mt-2 mb-3' style={{color: '#0014A0'}}></Form.Control>
                    </Col>
                    <Col md={6} className='mt-2'>
                        <Form.Select className='text-center fs-3' id='jenis-Service' style={{color: '#0014A0'}}>
                            <option>Jenis service</option>
                            <option value='service-ringan'>service ringan</option>
                            <option value='service-cvt'>service cvt</option>
                            <option value='service-injektorTB'>service injektor + throttle body</option>
                            <option value='service-komstir'>service komstir</option>
                            <option value='service-shock'>service shock depan</option>
                            <option value='service-rem'>service rem</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row>
                    <Col md={6 }>
                      <Form.Label className='fs-1 mt-2 mb-3' style={{color: '#0014A0'}}>Estimasi biaya service</Form.Label>
                      <Form.Control type="text" placeholder="Rp. " className='text-center fs-3' disabled style={{color: '#0014A0'}}/>
                    </Col>
                </Row>

                <Row>
                  <Col md={6} className='mt-5 mx-auto text-center'>
                    <Button type='submit' href='/booking' className='me-2' style={btnStyle} >BOOKING SERVICE</Button>
                    <Button type='submit' onClick={handleClick} style={btnStyle}>KELUHAN LAIN</Button>
                  </Col>
                </Row>
            
            </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default Option
