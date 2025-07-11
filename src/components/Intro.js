import { Container, Row, Col, Button } from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro">
            <Container className="d-flex justify-content-center align-items-center text-center">
                <Row>
                    <Col>
                        <div className="title" id="title">NONTON GRATIS</div>
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