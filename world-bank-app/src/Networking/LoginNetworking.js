export async function postUserInfo(username, password, urlPath) {
  const response = await fetch(`http://process.env.REACT_APP_API_URL/${urlPath}`, {
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
  const response = await fetch(`http://process.env.REACT_APP_API_URL/sessions`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export async function deleteUserInfo(username) {
  const response = await fetch(`http://process.env.REACT_APP_API_URL/users`, {
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
