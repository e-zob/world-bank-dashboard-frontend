import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import { postSearchData } from "../Networking/SearchNetworking";

export default function Search() {
  return (
    <div>
      <Header />
      <Container>
        <SearchBar />
      </Container>
      <SearchBar postSearchData={postSearchData} />
    </div>
  );
}
