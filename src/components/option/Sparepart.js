import React from 'react'
import Contain from '../contain/Contain'


const Sparepart = () => {

  const TextContain = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, labore vel quis rerum fugiat dolor suscipit accusamus eveniet! Dicta, delectus. Delectus necessitatibus officia tenetur laboriosam ut sed eaque unde ratione?'

  return (
    <div>
        <Contain img='../image/sparepart.jpg' text={TextContain} showButton={true} buttonName='CEK CATALOGUE' buttonLink='https://www.yamaha-motor.co.id/parts-catalogue/'/>
    </div>
  )
}

export default Sparepart