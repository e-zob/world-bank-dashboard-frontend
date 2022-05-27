export async function postSearchData(countries, years, indicator) {
  const response = await fetch(`http://localhost:8080/search`, {
    method: "POST",
    credentials: "include",
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

export async function getAutocompleteOptions() {
  const result = await fetch(`http://localhost:8080/autocomplete`);
  const data = await result.json();
  return data.response;
}
