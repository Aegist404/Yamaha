import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'

const Contain = (props) => {

    const styleButton = {backgroundColor: 'white', color: '#0014A0'}

  return (
    <div id='sparepart' style={{backgroundColor: '#0014A0', textAlign: 'justify'}}>
        <Container className=''>
            <Row className='d-flex justify-content-between text-center'>
                <Col md={6}  className='mt-5 text-justify'>
                    <p className='fs-4' style={{color: 'white',textAlign: 'justify'}}>{props.text}</p>
                    {props.showButton && <Button href={props.buttonLink} className='fs-5 fw-semibold' style={styleButton}>{props.buttonName}</Button>}
                </Col>
                <Col className='mt-5 mb-5'>
                    <img src={props.img} alt="Yamaha Star Motor" className='rounded' width={600}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contain
