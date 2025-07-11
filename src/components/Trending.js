import { Card, Container, Row, Col, Image } from "react-bootstrap";
import dragonImage from "../assets/images/Tranding/dragon.jpg";
import elio from "../assets/images/Tranding/elio.jpg";
import superman from "../assets/images/Tranding/superman.jpg";
import years from "../assets/images/Tranding/28years.jpg";
import summer from "../assets/images/Tranding/summer.jpg";
import jurassic from "../assets/images/Tranding/jurassic.jpg";
import doraemon from "../assets/images/Tranding/doraemon.jpg";
import tahzan from "../assets/images/Tranding/tahzan.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={3} className="movieWrapper mt-5">
            <Card className="movieImage">
              <Image src={dragonImage} alt="Dragon Movie" />
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5">
            <Card className="movieImage">
              <Image src={elio} alt="Elio Movie" />
              <div className=" box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5">
            <Card className="movieImage">
              <Image src={superman} alt="Superman Movie" />
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5">
            <Card className="movieImage">
              <Image src={years} alt="28 Years Movie" />
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5">
            <Card className="movieImage">
              <Image src={summer} alt="Superman Movie" />
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5">
            <Card className="movieImage">
              <Image src={jurassic} alt="Superman Movie" />
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5">
            <Card className="movieImage">
              <Image src={doraemon} alt="Superman Movie" />
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper mt-5">
            <Card className="movieImage">
              <Image src={tahzan} alt="Superman Movie" />
              <div className="box bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Card Title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
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
