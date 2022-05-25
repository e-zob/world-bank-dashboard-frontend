import { ListGroup, Button } from "react-bootstrap";

export default function UserHistoryList(props) {
  function generateHistoryTitle() {
    let searchTitle = "";
    if (props.indicator) {
      searchTitle = +`Indicators ${props.indicator}`;
    } else searchTitle += `All indicators`;
    if (props.country.length > 1) {
      searchTitle += `for ${props.country.join(", ")}`;
    } else searchTitle += `for ${props.country[0]}`;
    if (props.year.length > 1) {
      searchTitle += `from ${props.year[0]} to ${props.year[1]}`;
    } else if (props.year.length === 1) {
      searchTitle += `in ${props.year[0]}`;
    }
    return searchTitle;
  }

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{generateHistoryTitle()}</div>
        {props.createdAt}
      </div>
      <Button variant="primary"> View</Button> {/* CREATE ONCLICK FOR BUTTON*/}
    </ListGroup.Item>
  );
}
