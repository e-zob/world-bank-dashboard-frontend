import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm(props) {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    const result = props.userLogin(username, password, "sessions");
    if (result.status !== 200) {
      await updateError(result.response);
    } else {
      <Navigate to="/search"> </Navigate>;
    }
  }
  async function updateError(error) {
    setError(error);
  }

  return (
    <Container>
      <Form>
        <h1> World Bank Dashboard</h1>
        <h2>Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Stack direction="horizontal" gap={3}>
          <Link to="/create-account">
            {" "}
            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </Link>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          {error ? { error } : null}
        </Stack>
      </Form>
    </Container>
  );
}
