import { BASE_URL } from './base.js';

const getBookDetails = (bookId) => {
  return fetch(`${BASE_URL}/works/${bookId}.json`)
    .then((response) => response.json())
    .then((data) => data);
};

export { getBookDetails };
