import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Alert from "react-bootstrap/Alert";
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
  const [countryOne, setCountryOne] = useState("");
  const [countryTwo, setCountryTwo] = useState("");
  const [yearOne, setYearOne] = useState(0);
  const [yearTwo, setYearTwo] = useState(0);
  const [indicator, setIndicator] = useState("");
  const [countries, setCountries] = useState([]);
  const [years, setYears] = useState([]);
  const [error, setError] = useState("");

  async function handleSearch(e) {
    setCountries((countries) => [...countries, countryOne]);
    if (countryTwo !== "") {
      setCountries((countries) => [...countries, countryTwo]);
    }
    setYears((years) => [...years, yearOne]);
    if (yearTwo !== 0) {
      setYears((years) => [...years, yearTwo]);
    }
    if (countryOne === "") {
      setError("Please enter a country");
    }
    e.preventDefault();
    console.log(countries, indicator, years);
    const result = await props.postSearchData(countries, indicator, years);
    // if (result.status === 200) {
    //   navigate("/results");
    // }
  }
  console.log(countries, indicator, years);
  return (
    <Container>
      <h2>Search</h2>
      <Form>
        <Row gap={3}>
          <Col className="justify-content-md-center">
            <Form.Control
              onChange={(e) => {
                setError("");
                setCountryOne(e.target.value);
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
                setYearOne(e.target.value);
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
                setYearTwo(e.target.value);
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
                  setCountryTwo(e.target.value);
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
        {error ? (
          <Alert key="danger" variant="danger">
            {" "}
            {error}{" "}
          </Alert>
        ) : null}
      </Form>
    </Container>
  );
}
