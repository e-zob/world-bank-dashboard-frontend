import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>World Bank</Navbar.Brand>
        <Nav.Link href="#search">Search</Nav.Link>
        <Nav.Link href="#history">History</Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#log-out">Log Out</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
