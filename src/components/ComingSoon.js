import { Card, Container, Row, Col, Image } from "react-bootstrap";
import ghost from "../assets/images/ComingSoon/ghost.jpg";
import mission from "../assets/images/ComingSoon/mission.jpg";
import movie from "../assets/images/ComingSoon/movie.jpg";
import pamali from "../assets/images/ComingSoon/pamali.jpg";
import sakura from "../assets/images/ComingSoon/sakura.jpg";
import sukmo from "../assets/images/ComingSoon/sukmo.jpg";
import doraemon from "../assets/images/Tranding/doraemon.jpg";
import tahzan from "../assets/images/Tranding/tahzan.jpg";

const Trending = () => {
  return (
    <div>
      <Container id="comingSoon">
        <h1 className="text-white trending-text">Coming Soon</h1>
        <Row className="justify-content-center g-2">
          <Col md={3} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="movieImage hero">
              <Image src={ghost} alt="Dragon Movie" className="Image"/>
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Dragon</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="movieImage">
              <Image src={mission} alt="Elio Movie" className="Image"/>
              <div className=" box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Elio</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="movieImage">
              <Image src={movie} alt="Superman Movie" className="Image"/>
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Superman</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="movieImage">
              <Image src={pamali} alt="28 Years Movie" className="Image"/>
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">28 Years Later</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="movieImage">
              <Image src={sakura} alt="Superman Movie" className="Image"/>
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Last Summer</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="movieImage">
              <Image src={sukmo} alt="Superman Movie" className="Image"/>
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Jurassic World</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="movieImage">
              <Image src={doraemon} alt="Superman Movie" className="Image"/>
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Doraemon</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5 d-flex justify-content-center">
            <Card className="movieImage">
              <Image src={tahzan} alt="Superman Movie" className="Image"/>
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">La Tahzan</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
