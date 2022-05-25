export async function postUserInfo(username, password, urlPath) {
  const response = await fetch(`http://localhost:8080/${urlPath}`, {
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

export async function deleteUserInfo(username, urlPath) {
  const response = await fetch(`http://localhost:8080/${urlPath}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
    }),
  });
  const json = response.json();
  return json;
}
