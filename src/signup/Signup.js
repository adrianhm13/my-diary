import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

// Styles
import "./Signup.css";

//Bootstrap components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };
  return (
    <Container className="signup d-flex justify-content-center">
      <Row className="w-100 my-auto">
        <Col xs="12" lg="4" className="mx-auto">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="d-flex gap-2 flex-column align-items-center bg-primary"
          >
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            ></input>
            <input
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Username"
            ></input>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></input>
            {!isPending && <button variant="secondary">Signup</button>}
            {isPending && (
              <button variant="secondary" disabled>
                Loading
              </button>
            )}
            {error && <p className="text-danger">{error}</p>}
          </form>
        </Col>
      </Row>
    </Container>
  );
}
