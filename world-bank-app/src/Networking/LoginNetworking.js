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

  return response;
}

export async function logUserOut() {
  const response = await fetch(`http://localhost:8080/sessions`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function deleteUserInfo(username) {
  const response = await fetch(`http://localhost:8080/users`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
    }),
  });
  return response;
}
