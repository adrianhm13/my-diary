import { useState, useEffect } from "react";
import { useFirestore } from "../hooks/useFirestore";
import Picker from "emoji-picker-react";

//Bootstrap components
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export function ModalForm(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("#936fac");
  const { action, uid, onHide, entry } = props;

  const { addDocument, editDocument, response } = useFirestore("entries");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "add") {
      addDocument({ uid, title, content, date, color,});
    } else if (action === "edit") {
      editDocument(entry.id, { ...entry, title, content, date });
    }
    onHide();
  };


  //Adding values of entry to the inputs when editing
  useEffect(() => {
    if (entry) {
      console.log("editing");
      setTitle(entry.title);
      setContent(entry.content);
      setDate(entry.date);
      setColor(entry.color);

    }
  }, [entry]);

  //Reset values after adding or editing an entry
  useEffect(() => {
    if (response.success) {
      setTitle("");
      setContent("");
      setDate("");
      setColor("#936fac");

    }
  }, [response.success]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {action === "add"
            ? "Add a new entry in your diary"
            : "Edit your entry"}
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
              value={title}
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
              value={content}
              placeholder="Entry"
              style={{ height: "100px" }}
              className="mb-3"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea3"
            label="Choose the day when the events happened"
          >
            <Form.Control
              required
              type="date"
              value={date}
              placeholder="Entry Date"
              style={{ height: "100px" }}
              className="mb-3"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingColorPicker"
            label="Pick the color for your entry"
          >
            <Form.Control
              type="color"

              defaultValue="#563d7c"
              style={{ height: "100px", width: "100%" }}
              className="mb-3 p-5"
              title="Choose your color"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </FloatingLabel>
          <Button variant="outline-primary" type="submit">
            {action === "add" ? "Add" : "Edit"}
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
