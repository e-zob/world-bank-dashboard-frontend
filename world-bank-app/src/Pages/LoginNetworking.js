export async function postUserLogin(username, password) {
  const response = await fetch("http://localhost:8080/sessions", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const json = response.json();
  return json;
}
