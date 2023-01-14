import React from "react"
import * as Icon from "react-bootstrap-icons"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import { Container, Nav, Navbar, NavbarBrand, NavDropdown, NavItem, NavLink } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar expand="md" variant="dark" sticky="top" className="bg-batt">
      <Container>
        <NavbarBrand href="/">
          <img src="/assets/images/batt_cargo.jpg" width="140" height="50" />
        </NavbarBrand>
        <NavbarToggle aria-controls="navbar-responsive"><Icon.List color="white" size={30} /></NavbarToggle>
        <NavbarCollapse id="navbar-responsive" className="justify-content-end">
          <Nav>
            <NavDropdown className="px-2" title="Tentang Kami">
              <NavDropdown.Item href="#" className="text-black">Profil Perusahaan</NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-black">Karir</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="px-2" title="Layanan Kami">
              <NavDropdown.Item href="#" className="text-black">Reguler</NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-black">Ekonomis</NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-black">Express</NavDropdown.Item>
            </NavDropdown>
            <NavLink className="px-2"><Icon.PersonFill size={20} />&nbsp;Masuk</NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default Header