import { Button, Card, Carousel, CarouselItem, Col, Container, Form, Row } from "react-bootstrap"

const Home = () => {
  return (
    <>
      <header className="bg-batt d-block d-md-block">
        <Container>
          <Carousel variant="dark" className="carousel-padding">
            <CarouselItem>
              <img src="/assets/images/batt_cargo_reguler.jpg" className="d-block w-75" />
            </CarouselItem>
            <CarouselItem>
              <img src="/assets/images/batt_cargo_ekonomis.jpg" className="d-block w-75" />
            </CarouselItem>
            <CarouselItem>
              <img src="/assets/images/batt_cargo_express.jpg" className="d-block w-75" />
            </CarouselItem>
          </Carousel>
        </Container>
      </header>
      <Row className="form-custom">
        <Col md={4} className="d-flex">
          <Card className="mb-4 w-100">
            <Card.Body className="d-flex flex-column">
              <Form.Label htmlFor="nomor_resi" className="fw-bold">Lacak Pengiriman</Form.Label>
              <div className="d-flex flex-row justify-content-between">
                <Form.Control type="text" id="nomor_resi" name="nomor_resi" className="w-75" placeholder="Masukkan nomor resi" />
                <Button className="bg-batt button-custom">Lacak</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex">
          <Card className="mb-4 w-100">
            <Card.Body className="d-flex flex-column">
              <Form.Label className="fw-bold">Cek Tarif</Form.Label>
              <div className="d-flex flex-row justify-content-between cek-tarif-custom">
                <Form.Control type="text" id="asal" name="asal" className="w-25" placeholder="Asal" />
                <Form.Control type="text" id="tujuan" name="tujuan" className="w-25" placeholder="Tujuan" />
                <Form.Control type="text" id="berat" name="berat" className="w-25" placeholder="Berat (Kg)" />
                <span className="mt-1 mb-2 small cek-tarif-tag-1">Masukkan asal, tujuan, & berat barang Anda</span>
                <Button className="bg-batt button-custom">Cek Tarif</Button>
              </div>
              <span className="mt-2 small cek-tarif-tag-2">Masukkan asal, tujuan, & berat barang Anda</span>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex">
          <Card className="mb-4 w-100">
            <Card.Body className="d-flex flex-column">
              <Form.Label htmlFor="kk" className="fw-bold">Lokasi Agen</Form.Label>
              <div className="d-flex flex-row justify-content-between">
                <Form.Control type="text" id="kk" name="kk" className="w-75" placeholder="Kecamatan/Kota" />
                <Button className="bg-batt button-custom">Cari</Button>
              </div>
              <span className="mt-2 small">Cari lokasi terdekat</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Home