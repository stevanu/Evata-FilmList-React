import { Container, Row, Col, Button } from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro" id="intro">
            <Container className="d-flex justify-content-center align-items-center text-center min-vh-100">
                <Row>
                    <Col>
                        <div className="title">NONTON GRATIS</div>
                        <div className="title">TANPA HARUS NANGIS</div>
                        <div className="introButton mt-4 text-center">
                            <Button>Lihat Semua List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro
