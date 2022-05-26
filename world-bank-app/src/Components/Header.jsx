import { Navbar, Nav, Container } from "react-bootstrap";
import { logUserOut } from "../Networking/LoginNetworking";

export default function Header() {
  async function handleLogOut() {
    await logUserOut();
  }
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>World Bank</Navbar.Brand>
        <Nav.Link href="/search">Search</Nav.Link>
        <Nav.Link href="/user-history">History</Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link onClick={handleLogOut} href="/">
            Log Out
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
