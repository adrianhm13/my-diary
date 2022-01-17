import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

//Styles
import "./Login.css";

//Bootstrap components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Login() {
  const [email, setEmail] = useState('test@personaldiary.com');
  const [password, setPassword] = useState("123456");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <Container className="login d-flex justify-content-center">
      <Row className="w-100 my-auto">
        <Col xs="12" lg="4" className="mx-auto">
          <form
            autoComplete="disabled"
            onSubmit={(e) => handleSubmit(e)}
            className="d-flex gap-2 flex-column align-items-center bg-primary"
          >
            <input
              type="email"
              aria-label="Email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              value={email}
            />
            <input
              type="password"
              aria-label="Password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              value={password}
            />
            {!isPending && <button variant="secondary">Login</button>}
            {isPending && (
              <button type="submit" variant="secondary" disabled>
                Loading
              </button>
            )}
            {error && <p className="text-light bg-danger p-2">{error}</p>}
          </form>
        </Col>
      </Row>
    </Container>
  );
}
