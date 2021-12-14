// Styles
import "./Home.css";

//Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OffCanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"
import { NewEntryForm } from "./NewEntryForm";
export default function Home() {
  return (
    <Container fluid className="home">
      <Row>
        <Col className="bg-primary sidebar" lg={3} xs={2}>
          <hr></hr>
          <div className="p-2">
            <div className="d-flex justify-content-center">
            <NewEntryForm />
            </div>
          </div>
        </Col>
        <Col lg={9} xs={10}>
          B
        </Col>
      </Row>
    </Container>
  );
}
