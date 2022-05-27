export async function fetchSearchData(urlPath) {
  const response = await fetch(`http://localhost:8080/${urlPath}`, {
    credentials: "include",
  });
  const data = await response.json();
  return data;
}
