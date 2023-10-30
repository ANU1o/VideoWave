import React, { useState, useEffect } from "react";
import { Button, FloatingLabel, Form, Modal, Accordion } from "react-bootstrap";
import { addCategory, getCategories } from "../services/alllAPIs";
import uniqid from "uniqid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryView from "./CategoryView";

const Categories = () => {
  const [show, setShow] = useState(false);

  const [update, setUpdate] = useState({});
  const [updateDeletion, setUpdateDeletion] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    videos: [],
  });

  const setValues = (e) => {
    let { value } = e.target;
    // eslint-disable-next-line
    setInputData({ ...inputData, ["name"]: value });
  };

  const addHandle = async () => {
    let uid = uniqid();
    // eslint-disable-next-line
    setInputData({ ...inputData, ["id"]: uid });

    const { name } = inputData;

    if (name === "") {
      toast.error("Enter Category Name", {
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
      const result = await addCategory(inputData);

      if (result.status >= 200 && result.status < 300) {
        setShow(false);
        setUpdate(result.data);
        //update status of upload page
        toast.success(`${result.data.name} added Successfully`, {
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

  const [category, setCategory] = useState([]);
  const fetchCategory = async () => {
    const result = await getCategories();
    if (result.status >= 200 && result.status < 300) {
      setCategory(result.data);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [update, updateDeletion]);

  return (
    <>
      <h3 className="text-primary mb-3">Categories</h3>

      <Accordion data-bs-theme="dark">
        <Button
          variant="primary"
          className="w-100 mb-4 m-0"
          onClick={handleShow}
        >
          <i class="fa-solid fa-plus me-2"></i>Add Category
        </Button>
        {category.length > 0 ? (
          category.map((i) => (
            <CategoryView cat={category} category={i} updatedFunc={setUpdateDeletion} />
          ))
        ) : (
          <h5 className="text-secondary text-center">
            Nothing here for now...
          </h5>
        )}
      </Accordion>

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
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-bg">
          <FloatingLabel className="mb-3 text-secondary" label="Add Category">
            <Form.Control
              type="text"
              placeholder="Add Category"
              onChange={(e) => setValues(e)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className="bg-body border-0">
          <Button variant="secondary" onClick={handleClose}>
            <i class="fa-solid fa-xmark me-2"></i>Close
          </Button>
          <Button variant="primary" onClick={addHandle}>
            <i class="fa-solid fa-plus me-2"></i>Add Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Categories;
