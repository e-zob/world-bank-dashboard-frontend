import Header from "../Components/Header";
import UserHistoryList from "../Components/UserHistoryList";
import { Container, ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";

export default function UserHistory() {
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    historyData();
  }, []);

  async function historyData() {
    const response = await fetch(`http://localhost:8080/history`);
    const json = response.json();
    setSearches(json);
  }

  function getSearchesList(searches) {
    return searches.map((search, i) => (
      <UserHistoryList
        key={i}
        idSearch={search.id}
        country={search.country}
        indicator={search.indicator}
        year={search.year}
        createdAt={search.createdAt}
      />
    ));
  }
  return (
    <>
      <Header />
      <Container>
        {" "}
        <h2>History</h2>
        <ListGroup as="ol">{getSearchesList(searches)}</ListGroup>
      </Container>
    </>
  );
}
