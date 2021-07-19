export function getTagList() {
  return fetch("http://localhost:3333/tags").then(data => data.json());
}

// TODO: Add proper error handling for failed requests
export function setTag(tag) {
  return fetch("http://localhost:3333/tags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ tag })
  }).then(data => data.json());
}
