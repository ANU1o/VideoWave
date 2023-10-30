import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-vh-100 bg-hero" data-bs-theme="dark">
        <Row className="align-items-center min-vh-100 mx-5">
          <Col lg xs="12">
            <Image src="/heroico.svg" className="m-5" />
          </Col>
          <Col lg xs="12" className="p-0 p-lg-3 m-0">
            <div className="bg-body border border-5 border-primary rounded-5 p-5 mb-5">
              <h1 className="mb-5">
                Welcome to <i class="fa-solid fa-circle-play me-2"></i>VideoWave
              </h1>
              <p className="text-white fs-5 mb-3">
                <span className="text-primary">
                  <i class="fa-solid fa-circle-play me-2"></i>VideoWave
                </span>{" "}
                allows users to upload and play videos. It offers a
                user-friendly experience for both content creators and viewers.
                Users can easily upload their videos and reach a global
                audience. The platform provides a smooth video player with
                support for various formats and customization options. It also
                features a wide range of videos from creators worldwide,
                categorized for easy discovery. Users can engage with the
                community through likes, comments, and shares.
              </p>
              <Button
                variant="primary"
                className="rounded-5 p-3"
                onClick={() => navigate("/Upload")}
              >
                Get Started<i class="fa-solid fa-angles-right fa-fade ms-2"></i>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-5 py-5">
        <Container>
          <h1 className="display-3 text-uppercase text-center my-5">
            Features
          </h1>

          <Row className="px-3">
            <Col lg xs="12">
              <Card className="mb-3 border-0">
                <Card.Img src="/manage.svg" className="bg-bg" variant="top" />
                <Card.Body className="bg-bg">
                  <Card.Title className="text-primary display-6">
                    Managing Video
                  </Card.Title>
                  <hr className="border-3 border-primary opacity-100" />
                  <Card.Text className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, iusto rem molestias illum, tempore vero sint quod
                    dicta repudiandae et perspiciatis animi minima laudantium.
                    Quae illo autem officia inventore praesentium.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg xs="12">
              <Card className="mb-3 border-0">
                <Card.Img src="/CatVid.svg" className="bg-bg" variant="top" />
                <Card.Body className="bg-bg">
                  <Card.Title className="text-primary display-6">
                    Categorise Videos
                  </Card.Title>
                  <hr className="border-3 border-primary opacity-100" />
                  <Card.Text className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, iusto rem molestias illum, tempore vero sint quod
                    dicta repudiandae et perspiciatis animi minima laudantium.
                    Quae illo autem officia inventore praesentium.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg xs="12">
              <Card className="mb-3 border-0">
                <Card.Img
                  src="/WatchHistory.svg"
                  className="bg-bg"
                  variant="top"
                />
                <Card.Body className="bg-bg">
                  <Card.Title className="text-primary display-6">
                    Watch History
                  </Card.Title>
                  <hr className="border-3 border-primary opacity-100" />
                  <Card.Text className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, iusto rem molestias illum, tempore vero sint quod
                    dicta repudiandae et perspiciatis animi minima laudantium.
                    Quae illo autem officia inventore praesentium.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
