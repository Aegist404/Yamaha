import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/title/Banner'
import Contain from '../components/contain/Contain'
import Footer from '../components/footer/Footer'
import FormBooking from '../components/form/FormBooking'

const Booking = () => {

  const TextContain = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, labore vel quis rerum fugiat dolor suscipit accusamus eveniet! Dicta, delectus. Delectus necessitatibus officia tenetur laboriosam ut sed eaque unde ratione?'


  return (
    <div>
        <Navbar />
        <Banner title='BOOKING SERVICE' />  
        <Contain img='../image/starMotor.jpg' text={TextContain} button='SERVICE SEKRANG' buttonName='SERVICE SEKARANG' buttonLink='/service'/>
        <FormBooking/>
        <Footer />  
    </div>
  )
}

export default Booking
