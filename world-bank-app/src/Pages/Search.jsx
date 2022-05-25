import SearchBar from "../Components/SearchBar";

import { postSearchData } from "../Networking/SearchNetworking";
export default function Search() {
  return (
    <div>
      <SearchBar postSearchData={postSearchData} />
    </div>
  );
}
