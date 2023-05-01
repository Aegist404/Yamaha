import { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(savedBookings);
  }, []);

  return (
    <div>
      <Container className="mt-4 mb-4">
        <p className="fs-1">Data Booking</p>
        <div className="text-center">
          {bookings.length > 0 ? (
            <Table striped bordered hover className="mt-4 mb-4"> 
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>No Telpon</th>
                  <th>Jenis Layanan</th>
                  <th>Tanggal</th>
                  <th>Jam</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.service}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>Tidak ada booking disini :(</p>
          )}
        </div>
          <p className="">note : harap untuk screenshot halman ini untuk bukti booking service</p>
          <Button href="/service">Kembali</Button>
      </Container>
    </div>
  );
}

export default BookingList;
