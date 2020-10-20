const BannedBooksApi = "https://bannedbooks.herokuapp.com"

export const allBooks = () =>
  fetch(`${BannedBooksApi}/book`).then(response => response.json()).then(data => data.books)

export const oneBooks = (book) =>
  fetch(`${BannedBooksApi}/book/${book}`).then(response => response.json()).then(data => data)


