import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

function BookingForm() {
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleServiceChange = (event) => setService(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setId(id + 1);
    const bookingData = { id, name, email, phone, service, date, time };
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem(
      "bookings",
      JSON.stringify([...bookings, bookingData])
    );
    alert("Booking berhasil disimpan!");
    window.open("/UserData");
  };

  const handleMessage = () => {
    const message = `Halo selamat siang`;
    window.open(`https://wa.me/6281398849224?text=${message}`);
  };

  const color = { color: "#0014A0" };

  return (
    <div className="mt-5 mb-5">
      <Container style={color}>
        <p className="fs-1">Booking Service</p>
        <Form onSubmit={handleSubmit} className="fs-4">
          <Row>
            <Col>
              <Form.Label htmlFor="name">Nama</Form.Label>
              <Form.Control
                className="fs-4"
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </Col>

            <Col>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                className="fs-4"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label htmlFor="email">Nomor Telepon</Form.Label>
              <Form.Control
                className="fs-4"
                type="number"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </Col>

            <Col>
              <Form.Label htmlFor="service">Jenis Layanan</Form.Label>
              <Form.Select
                className="fs-4"
                id="service"
                value={service}
                onChange={handleServiceChange}
                required
              >
                <option value="">Pilih Jenis Layanan</option>
                <option value="Service Ringan">Service Ringan</option>
                <option value="Service Berat">Service Berat</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label htmlFor="date">Tanggal</Form.Label>
              <Form.Control
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
                required
              />
              <Button
                variant="outline-success"
                type="submit"
                className="mt-2 me-2 fs-4 pt-0 pb-0"
              >
                Booking
              </Button>
              <Button
                variant="success"
                onClick={handleMessage}
                className="mt-2 fs-4 pt-0 pb-0"
              >
                Konsultasi
              </Button>
            </Col>
            <Col>
              <Form.Label htmlFor="time">Waktu</Form.Label>
              <Form.Control
                type="time"
                id="time"
                value={time}
                onChange={handleTimeChange}
                required
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default BookingForm;
