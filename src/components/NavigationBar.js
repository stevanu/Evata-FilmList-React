import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark fw-bold mb-4">
                <Container>
                    <Navbar.Brand>Evata Film</Navbar.Brand>
                    <Nav>
                    <Nav.Link>TRANDING</Nav.Link>
                    <Nav.Link>COMING SOON</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
};

export default NavigationBar