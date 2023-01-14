import * as Icon from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={4} className="mb-4">
          <Col xs={12} className="fw-bold mb-2 text-center">Batt Cargo</Col>
          <Col xs={12}><Link to="#" className="link-custom">Tentang Kami</Link></Col>
          <Col xs={12}><Link to="#" className="link-custom">Karir</Link></Col>
        </Col>
        <Col md={4} className="mb-4">
          <Col xs={12} className="fw-bold mb-2 text-center">Kontak Kami</Col>
          <Row xs={12}>
            <Col xs={2}><Icon.PinMap /></Col>
            <Col xs={10} className="mb-1">
              <span className="fw-bold text-muted">Kantor Pusat</span><br />
              Jl. Samoja, RT. 06 RW.09, Kecamatan Batununggal, Bandung
            </Col>
          </Row>
          <Row xs={12}>
            <Col xs={2}><Icon.Clock /></Col>
            <Col xs={10} className="mb-1">
              <span className="fw-bold text-muted">Jam Kerja</span><br />
              Senin s/d. Sabtu, jam 10:00 s/d. 20:00 WIB
            </Col>
          </Row>
          <Row xs={12}>
            <Col xs={2}><Icon.Envelope /></Col>
            <Col xs={10} className="mb-1">
              <span className="fw-bold text-muted">Email</span><br />
              irwan@battcargo.com
            </Col>
          </Row>
          <Row xs={12}>
            <Col xs={2}><Icon.Whatsapp /></Col>
            <Col xs={10} className="mb-1">
              <span className="fw-bold text-muted">WhatsApp</span><br />
              <a href="https://api.whatsapp.com/send?phone=6288218568571" target="_blank" className="link-custom">
                +6288218568571
              </a>
              &nbsp;&nbsp;<Icon.ArrowUpLeftSquare />
            </Col>
          </Row>
        </Col>
        <Col md={4} className="mb-4">
          <Col xs={12} className="mb-1 text-center">
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;
            <span className="fw-bold text-muted">Batt Cargo</span>.
            All rights reserved.
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer