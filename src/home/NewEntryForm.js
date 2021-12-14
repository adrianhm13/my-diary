import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function FormContent(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content, date);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a new entry in your diary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FloatingLabel
            controlId="floatingInput"
            label="Entry title"
            className="mb-3"
          >
            <Form.Control
              required
              type="text"
              placeholder="Title entry"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Write about your day"
          >
            <Form.Control
              required
              as="textarea"
              placeholder="Entry"
              style={{ height: "100px" }}
              className="mb-3"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea3" label="Choose the day when the events happened">
            <Form.Control
              required
              type="date"
              placeholder="Entry Date"
              style={{ height: "100px" }}
              className="mb-3"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </FloatingLabel>
          <Button variant="dark" type="submit">Add</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function NewEntryForm() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        variant="outline-light d-none d-sm-block"
        onClick={() => setModalShow(true)}
      >
        New entry
      </Button>
      <Button
        variant="outline-light d-block d-sm-none"
        onClick={() => setModalShow(true)}
      >
        A
      </Button>
      {/* Add Icon */}
      <FormContent show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
