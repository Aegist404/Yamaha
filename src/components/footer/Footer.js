import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row, } from 'react-bootstrap'

const Footer = () => {
  return (
    <div style={{backgroundColor: '#262626'}}>
        <Container className='pt-5 pb-5'>
            <Row>
                <Col md={8}>
                    <Row>
                        <Col md={1}>
                            <img src='../image/maps.png' alt='' width={100}/>
                        </Col>
                        <Col>
                            <a href='https://www.google.com/maps/place/Yamaha+Star+Motor/@-6.9200731,107.5662606,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e5e4accb1c2b:0x1813903c502e2d73!8m2!3d-6.9200731!4d107.5684493!16s%2Fg%2F1pzph83ng' style={{textDecoration: 'none'}}>
                                <p className='mt-3 ms-5' style={{color: 'white'}}>Jl. Melong Asih No.27, Cijerah, Kec. Bandung Kulon, Kota Bandung</p>
                            </a>
                            <a href='https://www.google.com/maps/place/Yamaha+Star+Sarijadi/@-6.8739064,107.5803451,15z/data=!4m6!3m5!1s0x2e68e69bf95a9e71:0x8ce7a8b8e723eaeb!8m2!3d-6.8739064!4d107.5803451!16s%2Fg%2F11b6_zkdbc' style={{textDecoration: 'none'}}>
                                <p className='ms-5' style={{color: 'white'}}>Jl. Sarijadi Raya No.54, Sarijadi, Kec. Sukasari, Kota Bandung</p>
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Link to=''><img src='../image/tokopedia.png' alt='' className='me-3' width={80}/></Link>
                    <Link to='https://www.instagram.com/yamahastarmotor/?hl=id'><img src='../image/instagram.png' alt='' className='me-3' width={50}/></Link>
                    <Link to=''><img src='../image/tiktok.png' alt='' className='me-3' width={55}/></Link>
                    <Link to=''><img src='../image/whatsapp.png' alt='' width={55}/></Link>
                </Col>
            </Row>
        </Container>
        
        <p className='mb-0 p-2 text-center opacity-50' style={{backgroundColor: 'black', color: 'white'}}>Copyright © 2023 | YAMAHA Star Motor</p>
    </div>
  )
}

export default Footer
