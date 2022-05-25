import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function displayYearRange(start, end) {
  let years = [];
  for (let i = start; i < end; i++) {
    years.push(i);
  }
  const yearsOptions = years.map((year) => {
    return <option> {year} </option>;
  });
  return yearsOptions;
}

export default function SearchBar(props) {
  let navigate = useNavigate();
  const [openCountry, setOpenCountry] = useState(false);

  const [country, setCountry] = useState([]);
  const [indicator, setIndicator] = useState();
  const [years, setYears] = useState([]);

  const [results, setResults] = useState();

  async function handleSearch(e) {
    e.preventDefault();
    const result = await props.postSearchData(country, years, indicator);
    if (result.status === 200) {
      navigate("/results");
    }
  }

  return (
    <Container>
      <h2>Search</h2>
      <Form>
        <Row gap={3}>
          <Col className="justify-content-md-center">
            <Form.Control
              onChange={(e) => {
                setCountry((country) => [...country, e.target.value]);
              }}
              placeholder="Enter a country name..."
            />
          </Col>
          <Col>
            <Form.Control
              onChange={(e) => setIndicator(e.target.value)}
              placeholder="Enter an indicator..."
            />
          </Col>

          <Col>
            <Form.Select
              onChange={(e) => {
                setYears((years) => [...years, e.target.value]);
              }}
              size="sm"
              aria-label="Default select example"
            >
              <option>select start year</option>
              <option>null</option>
              {displayYearRange(1950, 2016)}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              onChange={(e) => {
                setYears((years) => [...years, e.target.value]);
              }}
              size="sm"
              aria-label="Default select example"
            >
              <option>select end year</option>
              <option>null</option>
              {displayYearRange(1950, 2016)}
            </Form.Select>
          </Col>
        </Row>
        <Row md={4} gap={3}>
          <Col>
            <Button
              onClick={() => setOpenCountry(!openCountry)}
              aria-controls="example-collapse-text"
              aria-expanded={openCountry}
            >
              +
            </Button>
            <Collapse in={openCountry}>
              <Form.Control
                onChange={(e) => {
                  setCountry((country) => [...country, e.target.value]);
                }}
                placeholder="Enter a country name..."
              />
            </Collapse>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 10 }}>
            <Button
              onClick={handleSearch}
              type="submit"
              variant="primary"
              size="lg"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
