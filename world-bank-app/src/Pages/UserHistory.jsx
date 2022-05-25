import Header from "../Components/Header";
import UserHistoryList from "../Components/UserHistoryList";
import { Container, ListGroup } from "react-bootstrap";

export default function UserHistory() {
  return (
    <>
      <Header />
      <Container>
        {" "}
        <h2>History</h2>
        <ListGroup as="ol">
          <UserHistoryList />
        </ListGroup>
      </Container>
    </>
  );
}
