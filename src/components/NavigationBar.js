import { Navbar, Container, Nav } from "react-bootstrap";
import Scrollspy from "react-scrollspy";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark" className="fw-bold mb-4 my-navbar" fixed="top">
        <Container>
          <Navbar.Brand>Evata Film</Navbar.Brand>
          {/* Scrollspy di-wrap Nav */}
          <Scrollspy
            items={["trending", "comingSoon",]}
            currentClassName="active"
            offset={-100}
            componentTag={Nav}
          >
            <Nav.Link href="#trending">TRANDING</Nav.Link>
            <Nav.Link href="#comingSoon">COMING SOON</Nav.Link>
          </Scrollspy>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;