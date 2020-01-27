import { handleResponse, handleError } from "./api.utils";
import Author from "../types/author.type";
const baseUrl = process.env.REACT_APP_API_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveAuthor(author: Author) {
  return fetch(baseUrl + (author.id || ""), {
    method: author.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(author)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAuthor(authorId: number) {
  return fetch(baseUrl + authorId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
