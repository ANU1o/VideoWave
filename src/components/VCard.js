import React, { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { addHistory, deleteVideo } from "../services/alllAPIs";
import uniqid from "uniqid";
import { format } from "date-fns";

const VCard = ({ caption, img, url, vid, del, deleteStatus }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //id
    var id = uniqid();
    //title
    var videoTitle = caption;

    //date
    var date = format(new Date(), "yyyy-MM-dd hh:mm:ss a");

    //body
    const body = { id, videoTitle, url, date };

    //api call
    if (body) {
      const result = await addHistory(body);
      console.log(result);
    }
  };

  const [mshow, setMShow] = useState(false);
  const handleMClose = () => setMShow(false);
  const handleMShow = () => setMShow(true);

  const handleDelete = async (id) => {
    const result = await deleteVideo(id);
    if (result.status >= 200 && result.status < 300) {
      deleteStatus(result.data);
      handleMClose();
    }
  };

  const dragStart = (e, id) => {
    //store dragged data
    e.dataTransfer.setData("cardid", id);
  };

  return (
    <Col className="mb-4">
      <Card
        draggable
        onDragStart={(e) => {
          dragStart(e, vid);
        }}
        className="border-5 bg-bg border-primary"
      >
        <Row className="align-items-center">
          <Col lg="4" md="12" xs="12" className="m-0">
            <Card.Img
              src={img}
              style={{
                height: "100%",
                objectFit: "cover",
              }}
              className="rounded-0"
              onClick={handleShow}
            />
          </Col>
          <Col className="m-0">
            <Card.Body>
              <Row className="align-items-center">
                <Col lg md="12" sm="12">
                  <Card.Title className="h3 text-secondary">
                    {caption}
                  </Card.Title>
                </Col>
                {del === true ? (
                  <Col className="text-end">
                    <Button variant="danger" onClick={handleMShow}>
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </Col>
                ) : (
                  <span></span>
                )}
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Modal
        show={mshow}
        backdrop="static"
        data-bs-theme="dark"
        size="xs"
        className="user-select-none"
        centered
      >
        <Modal.Body className="bg-bg text-white">
          <Modal.Title className="text-primary">Confirm Delete?</Modal.Title>
          <Card.Text>
            Are you sure to delete this video? This action cannot be undone!
          </Card.Text>
        </Modal.Body>
        <Modal.Footer className="bg-body border-0">
          <Button variant="secondary" onClick={handleMClose}>
            <i class="fa-solid fa-xmark me-2"></i>Close
          </Button>
          <Button variant="danger" onClick={() => handleDelete(vid)}>
            <i class="fa-solid fa-trash me-2"></i>Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show}
        onHide={handleClose}
        data-bs-theme="dark"
        size="lg"
        className="user-select-none"
        centered
      >
        <Modal.Header
          className="bg-bg text-secondary border-5 border-primary"
          closeButton
        >
          <Modal.Title className="text-primary display-6">Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-bg p-0">
          <div>
            <iframe
              width="100%"
              height="100%"
              style={{ aspectRatio: "16/9" }}
              src={url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default VCard;
