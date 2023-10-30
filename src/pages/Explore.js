import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { getCategories, getCategory } from "../services/alllAPIs";
import VCard from "../components/VCard";

const Explore = () => {
  const [category, setCategory] = useState([]);
  const [video, setVideo] = useState([]);

  const fetchCategory = async () => {
    const result = await getCategories();
    if (result.status >= 200 && result.status < 300) {
      setCategory(result.data);
    }
  };

  const fetchVideo = async (catid) => {
    const result = await getCategory(catid);
    if (result.status >= 200 && result.status < 300) {
      setVideo(result.data.videos);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Container className="my-5 pt-5">
      <h1 className="text-uppercase display-3 text-center mb-5">
        Seek the Horizon
      </h1>
      <Row>
        <Col lg="3" xs="12">
          <div className="bg-bg p-5 rounded sticky-top" style={{ top: "6rem" }}>
            <h3 className="mb-5">Category</h3>
            <Nav className="flex-column">
              {category.length > 0 ? (
                category.map((i) => (
                  <p className="nav-link" onClick={() => fetchVideo(i.id)}>
                    {i.name}
                  </p>
                ))
              ) : (
                <h5>Nothing here</h5>
              )}
            </Nav>
          </div>
        </Col>
        <Col lg xs="12">
          <Row lg="1" md="1" xs="1">
            {video.length > 0 ? (
              video.map((j) => (
                <VCard
                  caption={j.caption}
                  img={j.coverImg}
                  url={j.videoURL}
                  vid={j.id}
                  del={false}
                />
              ))
            ) : (
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "50vh" }}
              >
                <h5>Select a Category</h5>
              </div>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Explore;
