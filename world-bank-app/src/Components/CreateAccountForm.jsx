import { Button, Form, Container, Alert, Navbar } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccountForm(props) {
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [errPass, setErrPass] = useState(false);
  const [errUsername, setErrUsername] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit() {
    const result = props.createUser(createUsername, createPassword, "users");
    if (result.status === 200) {
      navigate("/");
    } else {
      setErrUsername(result.response);
    }
  }
  function getErrMessage(err) {
    return (
      <Alert key={"danger"} variant={"danger"}>
        {err}
      </Alert>
    );
  }
  return (
    <Container>
      <h1>World Bank Dashboard</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter Username"
            onChange={(e) => {
              e.target.value === ""
                ? setErrUsername("Empty Username!")
                : setErrUsername(false);
              setCreateUsername(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={async (e) => setCreatePassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            onChange={(e) => {
              e.preventDefault();
              e.target.value === createPassword
                ? setErrPass(false)
                : setErrPass("Password doesn't match!");
            }}
          />
        </Form.Group>
        {errPass ? getErrMessage(errPass) : null}
        {errUsername ? getErrMessage(errUsername) : null}
        <div class="d-flex justify-content-between">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Create Account
          </Button>

          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              navigate("/");
            }}
          >
            Log In
          </Button>
        </div>
      </Form>
    </Container>
  );
}
