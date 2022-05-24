import { Button, Form, Container, Alert } from "react-bootstrap";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function CreateAccountForm(props) {
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [errPass, setErrPass] = useState(false);
  const [errUsername, setErrUsername] = useState(false);

  async function handleSubmit() {
    const result = props.userInfo(createUsername, createPassword, "users");
    if (result.status !== 200) {
      setErrUsername(result.response);
    } else {
      <Navigate to="/" />;
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
            onChange={(e) =>
              e.target.value === ""
                ? setErrUsername("Empty Username!")
                : setCreateUsername(e.target.value)
            }
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
            onChange={(e) =>
              e.target.value === createPassword
                ? setErrPass(false)
                : setErrPass("Password doesn't match!")
            }
          />
        </Form.Group>
        {errPass ? getErrMessage(errPass) : null}
        {errUsername ? getErrMessage(errUsername) : null}
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Create Account
        </Button>
      </Form>
    </Container>
  );
}
