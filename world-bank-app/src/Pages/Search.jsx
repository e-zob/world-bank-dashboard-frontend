import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";

export default function Search() {
  return (
    <div>
      <Header />
      <Container>
        <SearchBar />
      </Container>
    </div>
  );
}
