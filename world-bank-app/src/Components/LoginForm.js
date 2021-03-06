import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm(props) {
  let navigate = useNavigate();
  const [error, setError] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (username === "" && password === "") {
      await updateError("Please enter a username and password");
    } else if (username === "") {
      await updateError("Please enter a username");
    } else if (password === "") {
      await updateError("Please enter a password");
    } else {
      const result = await props.userLogin(username, password, "sessions");
      if (result.status === 200) {
        navigate("/search");
      } else {
        await updateError(result.response);
      }
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
            onChange={(e) => {
              setError("");
              setUsername(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
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
          {error ? (
            <Alert key="danger" variant="danger">
              {" "}
              {error}{" "}
            </Alert>
          ) : null}
        </Stack>
      </Form>
    </Container>
  );
}
