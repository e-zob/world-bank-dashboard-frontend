export async function postSearchData(countries, years, indicator) {
  const response = await fetch(`http://${process.env.REACT_APP_API_URL}/search`, {
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
  const result = await fetch(`http://${process.env.REACT_APP_API_URL}/autocomplete`);
  const data = await result.json();
  return data.response;
}
