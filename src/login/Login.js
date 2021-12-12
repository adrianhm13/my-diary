//Styles
import "./Login.css";

//Bootstrap components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log (email, password)
  }
  return (
    <Container className="login d-flex justify-content-center">
      <Row className="w-100 my-auto">
        <Col xs="12"lg="4" className="mx-auto">
        <form onSubmit={(e) => handleSubmit(e)}className="d-flex gap-2 flex-column align-items-center bg-primary">
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
          <input type="password" onChange={(e) => setPassword(e.target.value)}placeholder="Password"></input>
          <button variant="secondary">Log In</button>
        </form>

        </Col>
      </Row>
    </Container>
  );
}
