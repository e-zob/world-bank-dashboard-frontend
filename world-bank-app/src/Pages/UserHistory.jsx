import Header from "../Components/Header";
import UserHistoryList from "../Components/UserHistoryList";
import { Container, ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { fetchSearchData } from "../Networking/ResultsNetworking";

export default function UserHistory() {
  const [searches, setSearches] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchSearchData("history");
      setSearches(result.response);
    }
    fetchData();
  }, []);

  function getSearchesList(searches) {
    return searches.map((search, i) => (
      <UserHistoryList
        key={i}
        idSearch={search.id}
        country={search.country}
        indicator={search.indicator}
        year={search.year}
        createdAt={search.createdAt}
        admin={admin}
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
