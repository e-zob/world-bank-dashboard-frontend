export async function fetchSearchData(urlPath) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${urlPath}`, {
    credentials: "include",
  });
  const data = await response.json();
  return data;
}
