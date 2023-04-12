import { useState } from 'react';

function QueueNumber() {
  const [queueNumber, setQueueNumber] = useState(null);

  const handleNewUser = (email) => {
    // Mendapatkan nomor antrian dan tanggal terakhir update dari localStorage
    const queueNumberString = localStorage.getItem('queueNumber');
    const lastUpdatedDateString = localStorage.getItem('lastUpdatedDate');

    // Jika nomor antrian dan tanggal terakhir update belum ada, inisialisasi dengan nomor 1 dan tanggal hari ini
    if (!queueNumberString || !lastUpdatedDateString) {
      setQueueNumber(1);
      localStorage.setItem('queueNumber', '1');
      localStorage.setItem('lastUpdatedDate', new Date().toISOString());
      return;
    }

    const lastUpdatedDate = new Date(lastUpdatedDateString);

    // Jika tanggal terakhir update bukan hari ini, reset nomor antrian menjadi 1
    if (lastUpdatedDate.toDateString() !== new Date().toDateString()) {
      setQueueNumber(1);
      localStorage.setItem('queueNumber', '1');
      localStorage.setItem('lastUpdatedDate', new Date().toISOString());
    } else {
      setQueueNumber(parseInt(queueNumberString, 10) + 1);
      localStorage.setItem('queueNumber', (parseInt(queueNumberString, 10) + 1).toString());
    }

    // Mengirim email konfirmasi nomor antrian ke pengguna
    sendEmail(email, `Your Queue Number is ${queueNumber}`);
  };

  const sendEmail = (email, message) => {
    // Fungsi untuk mengirim email menggunakan library atau service pihak ketiga, seperti Nodemailer atau SendGrid
    // Contoh penggunaan Nodemailer: https://nodemailer.com/about/
    // Contoh penggunaan SendGrid: https://sendgrid.com/docs/for-developers/sending-email/quickstart-nodejs/
    console.log(`Sending email to ${email}: ${message}`);
  };

  return (
    <div>
      <h1>Queue Number</h1>
      {queueNumber ? (
        <p>Your queue number is {queueNumber}.</p>
      ) : (
        <p>Please enter your email to get a queue number.</p>
      )}
      <form onSubmit={(e) => {
        e.preventDefault();
        handleNewUser(e.target.email.value);
      }}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />
        <button type="submit">Get Queue Number</button>
      </form>
    </div>
  );
}

export default QueueNumber