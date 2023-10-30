import React, { useState } from "react";
import {
  Button,
  FloatingLabel,
  Form,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import uniqid from "uniqid";
import { addVideo } from "../services/alllAPIs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = ({ update }) => {
  // State to hold I/P Data
  const [inputData, setInputData] = useState({
    id: "",
    caption: "",
    coverImg: "",
    videoURL: "",
  });

  const [show, setShow] = useState(false);

  const setValues = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  //func to extract video url
  const extractURL = (e) => {
    let videoURL = e.target.value;
    if (videoURL.includes("v=")) {
      let id = videoURL.split("v=")[1];
      let finalURL = `https://www.youtube.com/embed/${id}?autoplay=1`;
      // eslint-disable-next-line
      setInputData({ ...inputData, ["videoURL"]: finalURL });
    }
  };

  //Func to add content
  const addHandle = async () => {
    let uid = uniqid();
    // eslint-disable-next-line
    setInputData({ ...inputData, ["id"]: uid });

    const { caption, coverImg, videoURL } = inputData;

    if (caption === "" || coverImg === "" || videoURL === "") {
      toast.error("Enter all fields", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const result = await addVideo(inputData);

      if (result.status >= 200 && result.status < 300) {
        setShow(false);

        //update status of upload page
        update(result.data);
        toast.success("Added Successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="fixed-bottom d-flex m-3 justify-content-end">
        <OverlayTrigger
          placement="left"
          overlay={
            <Tooltip className="custom-tooltip" id={`tooltip`}>
              Upload Video
            </Tooltip>
          }
        >
          <Button
            variant="secondary"
            size="lg"
            style={{
              borderRadius: "10rem",
            }}
            onClick={handleShow}
          >
            <i class="fa-solid fa-upload"></i>
          </Button>
        </OverlayTrigger>
      </div>

      <Modal
        show={show}
        className="user-select-none"
        onHide={handleClose}
        data-bs-theme="dark"
        centered
      >
        <Modal.Header
          className="bg-bg text-secondary border-5 border-primary"
          closeButton
        >
          <Modal.Title className="text-primary display-6">
            Upload Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-bg ">
          <FloatingLabel className="mb-3 text-secondary" label="Video Caption">
            <Form.Control
              type="text"
              onChange={(e) => setValues(e)}
              name="caption"
              placeholder="Video Caption"
            />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3 text-secondary"
            label="Video Cover Image URL"
          >
            <Form.Control
              type="text"
              placeholder="Video Cover Image URL"
              onChange={(e) => setValues(e)}
              name="coverImg"
            />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3 text-secondary"
            label="YouTube Video URL"
          >
            <Form.Control
              type="text"
              placeholder="YouTube Video URL"
              onChange={(e) => extractURL(e)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className="bg-body border-0">
          <Button variant="secondary" onClick={handleClose}>
            <i class="fa-solid fa-xmark me-2"></i>Close
          </Button>
          <Button variant="primary" onClick={addHandle}>
            <i class="fa-solid fa-upload me-2"></i>Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Add;
