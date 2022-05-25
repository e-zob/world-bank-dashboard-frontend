import { ListGroup, Button } from "react-bootstrap";

export default function UserHistoryList(props) {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">props.search</div>
        props.createdAt
      </div>
      <Button variant="primary">View</Button>
    </ListGroup.Item>
  );
}
