export async function postSearchData(countries, years, indicator) {
  const response = await fetch(`http://localhost:8080/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      countries: countries,
      years: years,
      indicator: indicator,
    }),
  });
  return response;
}
