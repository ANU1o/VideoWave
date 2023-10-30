import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import View from "../components/View";
import Categories from "../components/Categories";
import Add from "../components/Add";

const Upload = () => {
  const [addUpdate, setAddUpdate] = useState({});

  return (
    <Container className="mt-5 py-5">
      <Add update={setAddUpdate} />
      <h1 className="text-uppercase display-3 text-center mb-0">
        Let the World Know
      </h1>
      <h4 className="text-center text-secondary mt-0 mb-5">
        Upload Your Content for <span className="text-primary-alt">1M</span>{" "}
        Users Around the Globe
      </h4>

      <Row>
        <Col lg xs="12">
          <View updatedState={addUpdate} />
        </Col>
        <Col lg="3" xs="12">
          <Categories />
        </Col>
      </Row>
    </Container>
  );
};

export default Upload;
