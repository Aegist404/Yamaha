import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Contain from '../components/contain/Contain'
import Banner from '../components/title/Banner'
import Option from '../components/option/ServiceOption'
import Sparepart from '../components/option/Sparepart'
 
const Service = () => {

  const textContain ='    Lakukan service tepat waktu agar performa sepeda motor akan tetap terjaga dalam kondisi yang optimal. Perawatan rutin saat servis berkala juga menurunkan risiko kerusakan parah pada komponen sepeda motor karena gejala permasalahan bisa dideteksi sejak dini. Sehingga sepeda motor tetap awet untuk waktu yang lama.'

  return (
    <div>
      <Navbar />
      <Banner title='SERVICE'/>
      <Contain text={textContain} img='../image/yamaha.jpg' />

      <Option />
      <Sparepart id='sparepart'/>
      <Footer />
    </div>
  )
}

export default Service
