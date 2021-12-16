import { useState} from "react";

//Bootstrap components
import Button from "react-bootstrap/Button";

import {ModalForm} from '../components/ModalForm.js'

export function NewEntryForm({ uid, action }) {
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
      {modalShow && <ModalForm
        uid={uid}
        action={action}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />}
    </>
  );
}
