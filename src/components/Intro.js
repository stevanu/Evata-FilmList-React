import { Container, Row, Col } from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro">
            <Container className="d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title" id="title">NONTON GRATIS</div>
                        <div className="title">TANPA HARUS NANGIS</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro