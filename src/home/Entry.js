import { useState } from "react";
import { useFirestore } from "../hooks/useFirestore.js";

import Card from "react-bootstrap/Card";

//Styles
import "./Home.css";

//Components
import {ModalForm} from "../components/ModalForm";

export default function Entry({ entry }) {
  const [modalShow, setModalShow] = useState(false);
  const { deleteDocument} = useFirestore("entries");

  return (
    <div>
      <Card key="entry.id" className="grid-item flex-row">
        <div className="side-color" style={{backgroundColor: `${entry.color}`}}>
        </div>
        <Card.Body className="d-flex flex-column">
          <div className="icons-container">
            <i className="fas fa-edit" onClick={() => setModalShow(true)}></i>
            <i
              className="far fa-minus-square"
              onClick={() => deleteDocument(entry.id)}
            ></i>
          </div>
          <Card.Title>{entry.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {entry.date}
          </Card.Subtitle>
          <Card.Text>{entry.content}</Card.Text>
        </Card.Body>
      </Card>
      {modalShow && <ModalForm
        action={"edit"}
        show={modalShow}
        entry={entry}
        onHide={() => setModalShow(false)}
      />}
    </div>
  );
}
