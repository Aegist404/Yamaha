import React from 'react'
import Contain from '../contain/Contain'


const Sparepart = () => {

  const TextContain = 'Sparepart adalah komponen penting yang dibutuhkan untuk memperbaiki atau mengganti bagian yang rusak pada kendaraan. Pilihlah sparepart yang sesuai dengan kebutuhan dan budget Anda agar kendaraan Anda dapat berfungsi kembali seperti semula dengan optimal. Dengan memilih sparepart berkualitas, Anda dapat menghemat biaya perbaikan dalam jangka panjang dan memperpanjang usia kendaraan Anda'

  return (
    <div>
        <Contain img='../image/sparepart.jpg' text={TextContain} showButton={true} buttonName='CEK CATALOGUE' buttonLink='https://www.yamaha-motor.co.id/parts-catalogue/'/>
    </div>
  )
}

export default Sparepart