import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
// Styles
import "./Home.css";

//Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import OffCanvas from "react-bootstrap/Offcanvas";
// import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button"

//Components
import { NewEntryForm } from "./NewEntryForm";
import EntriesList from "./EntriesList";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "entries",
    ["uid", "==", user.uid],
    null, // ["category", "==", "categorytest"], to use categories later on
    ["createdAt", "desc"]
  );

  return (
    <Container fluid className="home">
      <Row>
        <Col className="bg-primary sidebar" lg={2} xs={2}>
          <hr></hr>
          <div className="p-2">
            <div className="d-flex justify-content-center">
              <NewEntryForm uid={user.uid} action={"add"}/>
            </div>
          </div>
        </Col>
        <Col lg={9} xs={10}>
          {error && <p>{error}</p>}
          {documents && <EntriesList entries={documents} />}
        </Col>
      </Row>
    </Container>
  );
}
