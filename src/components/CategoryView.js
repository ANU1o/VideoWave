import React, { useState } from "react";
import { deleteCategory, getVideo, updateCategory } from "../services/alllAPIs";
import { Button, Modal, Accordion, Badge, Card } from "react-bootstrap";

const CategoryView = ({ cat, category, updatedFunc }) => {
  const [mshow, setMShow] = useState(false);
  const handleMClose = () => setMShow(false);
  const handleMShow = () => setMShow(true);
  const handleDelete = async (id) => {
    const result = await deleteCategory(id);
    if (result.status >= 200 && result.status < 300) {
      updatedFunc(result.data);
      handleMClose();
    }
  };

  const dargOver = (e) => {
    e.preventDefault();
    // console.log("dragging");
  };
  const dropped = async (e, id) => {
    // console.log("dropped at cat", id);

    const videoID = e.dataTransfer.getData("cardid");
    // console.log(videoID);

    const { data } = await getVideo(videoID);
    // console.log(data);

    //select dropped category from all category
    const selectedCategory = cat.find((i) => i.id === id);
    selectedCategory.videos.push(data);
    // console.log(selectedCategory);
    await updateCategory(id, selectedCategory);
    updatedFunc();
  };

  return (
    <>
      <Accordion.Item
        droppable
        onDragOver={(e) => {
          dargOver(e);
        }}
        onDrop={(e) => {
          dropped(e, category.id);
        }}
        className="border-0"
        eventKey={category.id}
      >
        <Accordion.Header className="border-bottom border-3 border-primary">
          <Badge onClick={handleMShow} className="py-2 me-auto" bg="danger">
            <i className="fa-solid fa-trash"></i>
          </Badge>
          {category.name}
        </Accordion.Header>
        <Accordion.Body className="d-flex overflow-auto gap-3">
          {category.videos.map((i) => (
            <img
              src={i.coverImg}
              className="rounded border border-3 border-primary"
              style={{ width: "75px", height: "75px", objectFit: "cover" }}
              alt=""
            />
          ))}
        </Accordion.Body>
      </Accordion.Item>
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
            Are you sure to delete this category? This action cannot be undone!
          </Card.Text>
        </Modal.Body>
        <Modal.Footer className="bg-body border-0">
          <Button variant="secondary" onClick={handleMClose}>
            <i class="fa-solid fa-xmark me-2"></i>Close
          </Button>
          <Button variant="danger" onClick={() => handleDelete(category.id)}>
            <i class="fa-solid fa-trash me-2"></i>Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CategoryView;
