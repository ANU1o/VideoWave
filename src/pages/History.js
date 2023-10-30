import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Card } from "react-bootstrap";
import { deleteHistory, getAllHistory } from "../services/alllAPIs";

const History = () => {
  const [history, setHistory] = useState([]);
  const [mshow, setMShow] = useState(false);
  const [updateDelete, setUpadteDelete] = useState({});
  const handleMClose = () => setMShow(false);
  const handleMShow = () => setMShow(true);

  const fetchHistory = async () => {
    const { data } = await getAllHistory();
    setHistory(data);
  };

  const handleDelete = async (id) => {
    const result = await deleteHistory(id);
    if (result.status >= 200 && result.status < 300) {
      setUpadteDelete(result.data);
      handleMClose();
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [updateDelete]);

  return (
    <Container className="mt-5 py-5">
      <h1 className="text-uppercase display-3 text-center mb-5">
        Revisit Old Places
      </h1>

      <Button variant="secondary" className="mb-3">
        <i class="fa-solid fa-caret-left me-2"></i>Go Back
      </Button>

      <div className="overflow-scroll">
        <Table hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Video URL</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          {history.length > 0 ? (
            history.map((i) => (
              <tbody>
                <tr>
                  <td>{i.videoTitle}</td>
                  <td>{i.date}</td>
                  <td>{i.url}</td>
                  <td className="text-center">
                    <Button variant="danger" onClick={handleMShow}>
                      <i className="fa-solid fa-trash"></i>
                    </Button>

                    <Modal
                      show={mshow}
                      backdrop="static"
                      data-bs-theme="dark"
                      size="xs"
                      className="user-select-none"
                      centered
                    >
                      <Modal.Body className="bg-bg text-white">
                        <Modal.Title className="text-primary">
                          Confirm Delete?
                        </Modal.Title>
                        <Card.Text>
                          Are you sure to delete this event? This action cannot
                          be undone!
                        </Card.Text>
                      </Modal.Body>
                      <Modal.Footer className="bg-body border-0">
                        <Button variant="secondary" onClick={handleMClose}>
                          <i class="fa-solid fa-xmark me-2"></i>Close
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(i.id)}
                        >
                          <i class="fa-solid fa-trash me-2"></i>Delete
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h1 className="">Nothing Watched Yet.</h1>
            </div>
          )}
        </Table>
      </div>
    </Container>
  );
};

export default History;
