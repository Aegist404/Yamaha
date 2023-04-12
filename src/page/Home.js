import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/title/Banner";
import Contain from "../components/contain/Contain";
import Paragraph from "../components/paragraph/Paragraph";
import Footer from "../components/footer/Footer";

const Home = () => {

  const TextParagraph = 'Anda bisa melakukan servis motor tiap interval 2000-3000 km di speedometer. Jangan lupa juga untuk mengganti oli motor agar performa mesinnya semakin baik dan optimal setelah diservis. Selain patokan pada speedometer, pemilik motor juga bisa melakukan servis dengan berpatokan pada bulan terakhir servis. Biasanya servis dilakukan setiap 2-3 bulan sekali.'

  const TextContain = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, labore vel quis rerum fugiat dolor suscipit accusamus eveniet! Dicta, delectus. Delectus necessitatibus officia tenetur laboriosam ut sed eaque unde ratione?'

  return (
    <div>
      <Navbar />
        <Banner title='YAMAHA STAR MOTOR' />

        <Contain img='../image/starMotor.jpg' text={TextContain} button='SERVICE SEKRANG' showButton={true} buttonName='SERVICE SEKARANG' buttonLink='/service'/>

        <Paragraph mainTitle='Kapan harus service?' text={TextParagraph} />

        <Footer />
    </div>
  );
};

export default Home;
