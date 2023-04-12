import React from 'react'
import { Container } from 'react-bootstrap'

const Paragraph = (props) => {
  return (
    <div style={{textAlign: 'justify'}}>
      <Container className='pt-3 pb-3 mt-5 mb-5'>
        <p className='fs-3 fw-semibold' style={{color: '#0014A0'}}>{props.mainTitle}</p>
        <Container>
            <p className='fs-5 fw-semibold mx-5' >{props.text}</p>
        </Container>
      </Container>
    </div>
  )
}

export default Paragraph
