import { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";

function BookingListUser() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(savedBookings);
  }, []);

  const handleCancelBooking = (bookingIndex) => {
    const updatedBookings = [...bookings];
    updatedBookings.splice(bookingIndex, 1);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
  };


  return (
    <div>
      <Container>
        <p className="fs-1">List Booking</p>
        <div className="text-center">
          {bookings.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#id</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>No Telpon</th>
                  <th>Jenis Layanan</th>
                  <th>Tanggal</th>
                  <th>Jam</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.id}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.service}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleCancelBooking(index)}
                      >
                        Batal Booking
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>Tidak ada booking yang tersimpan.</p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default BookingListUser;
