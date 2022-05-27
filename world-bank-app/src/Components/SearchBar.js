import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";
import { getAutocompleteOptions } from "../Networking/SearchNetworking";

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
  const [countryOptions, setCountryOptions] = useState([]);
  const [indicatorOptions, setIndicatorOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return async () => {
      setOptions();
    };
  }, []);

  async function setOptions() {
    let options = await getAutocompleteOptions();
    const allCountryOptions = options["countries"]
      .map((names) => [
        { value: names["shortname"], label: names["shortname"] },
        { value: names["longname"], label: names["longname"] },
      ])
      .flat();
    const allIndicatorOptions = options["indicators"].map((indicator) => [{ value: indicator["indicatorname"], label: indicator["indicatorname"] }]).flat();
    setCountryOptions(allCountryOptions);
    setIndicatorOptions(allIndicatorOptions);
  }

  function updateCountries(country) {
    setCountries((countries) => [...countries, country]);
  }

  async function handleSearch(e) {
    e.preventDefault();
    const result = await props.postSearchData(countries, years, indicator);

    if (result.status === 200) {
      navigate("/results");
    }
  }

  function handleChange(e) {
    setCountries([]);
    updateCountries(e.value);
  }

  function handleIndicatorChange(e) {
    console.log(e.value);
    setIndicator(e.value);
  }

  function handleCountryTwoChange(e) {
    updateCountries(e.value);
  }
  //console.log(countries, indicator, years);

  return (
    <Container>
      <h2>Search</h2>
      <Form>
        <Row gap={3}>
          <Col className="justify-content-md-center">
            <Select
              className="basic-single"
              classNamePrefix="select"
              options={countryOptions}
              isClearable={true}
              //value={countryOptions.find((obj) => obj.value === countryOne)}
              onChange={handleChange}
              placeholder="Enter a country name..."
            />
          </Col>
          <Col>
            <Select
              className="basic-single"
              classNamePrefix="select"
              options={indicatorOptions}
              isClearable={true}
              //value={indicatorOptions.find((obj) => obj.value === indicator)}
              onChange={handleIndicatorChange}
              placeholder="Enter a indicator..."
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
            <Button onClick={() => setOpenCountry(!openCountry)} aria-controls="example-collapse-text" aria-expanded={openCountry}>
              +
            </Button>
            <Collapse in={openCountry}>
              <Select
                className="basic-single"
                classNamePrefix="select"
                options={countryOptions}
                isClearable={true}
                //value={countryOptions.find((obj) => obj.value === countryTwo)}
                onChange={handleCountryTwoChange}
                placeholder="Enter a country name..."
              />
            </Collapse>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 10 }}>
            <Button onClick={handleSearch} type="submit" variant="primary" size="lg">
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
